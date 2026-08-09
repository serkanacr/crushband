import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const members = [
  { firstName: 'Arda', lastName: 'Soydoğan', birthday: '2 Şubat 2007', image: '/ardasoydogan.jpg' },
  { firstName: 'Efe', lastName: 'Şan', birthday: '9 Ağustos 2007', image: '/efesan.jpg' },
  { firstName: 'Batu', lastName: 'Cengiz', birthday: '12 Haziran 2001', image: '/batucengiz.jpg' },
  { firstName: 'Oğuzhan', lastName: 'Çifçi', birthday: '21 Kasım 1999', image: '/oguzhancifci.jpg' },
  { firstName: 'Milan', lastName: 'Önder', birthday: '28 Eylül 2004', image: '/milanonder.jpg' },
  { firstName: 'Miraç', lastName: 'Fırat', birthday: '11 Nisan 2004', image: '/miracfirat.jpg' },
  { firstName: 'Barış', lastName: 'Yüksekkaya', birthday: '10 Ekim 2002', image: '/barisyuksekkaya.jpg' },
]

function MembersSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const member = members[activeIndex]
  const firstName = member.firstName.toLocaleUpperCase('tr-TR')
  const lastName = member.lastName.toLocaleUpperCase('tr-TR')

  const changeMember = (step) => {
    setDirection(step)
    setActiveIndex((current) => (current + step + members.length) % members.length)
  }

  return (
    <section className="members-section" id="members" aria-labelledby="members-title">
      <div className="members-label" id="members-title">Üyeler <span>— 0{activeIndex + 1}/07</span></div>
      <button className="member-arrow member-arrow--previous" onClick={() => changeMember(-1)} aria-label="Önceki üye"><span>←</span></button>
      <button className="member-arrow member-arrow--next" onClick={() => changeMember(1)} aria-label="Sonraki üye"><span>→</span></button>

      <div className="member-stage">
        <motion.p className="member-birthday" key={`birthday-${member.firstName}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35 }}>
          <span>Doğum tarihi</span>{member.birthday}
        </motion.p>

        <div className="member-name member-name--first" aria-hidden="true">
          <AnimatePresence initial={false} mode="wait">
            <motion.div className="member-name__track member-name__track--right" key={member.firstName} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .24 }}>
              <span>{firstName}</span><span>{firstName}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="member-portrait">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.img key={member.image} src={member.image} alt={`${member.firstName} ${member.lastName}`} custom={direction} initial={{ x: direction * -160, scale: .76, opacity: 0 }} animate={{ x: 0, scale: 1, opacity: 1 }} exit={{ x: direction * 160, scale: .76, opacity: 0 }} transition={{ duration: .66, ease: [0.22, 1, 0.36, 1] }} />
          </AnimatePresence>
        </div>

        <div className="member-name member-name--last" aria-hidden="true">
          <AnimatePresence initial={false} mode="wait">
            <motion.div className="member-name__track member-name__track--left" key={member.lastName} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .24 }}>
              <span>{lastName}</span><span>{lastName}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default MembersSection
