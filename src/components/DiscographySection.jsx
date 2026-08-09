import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const releaseDate = new Date('2026-09-03T00:00:00+03:00')

function getRemainingTime() {
  const remaining = Math.max(0, releaseDate.getTime() - Date.now())
  return {
    days: Math.floor(remaining / 86400000),
    hours: Math.floor((remaining / 3600000) % 24),
    minutes: Math.floor((remaining / 60000) % 60),
    seconds: Math.floor((remaining / 1000) % 60),
  }
}

function DiscographySection() {
  const [activeTab, setActiveTab] = useState('albums')
  const [time, setTime] = useState(getRemainingTime)

  useEffect(() => {
    const timer = window.setInterval(() => setTime(getRemainingTime()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const parts = [
    ['Gün', time.days], ['Saat', time.hours], ['Dakika', time.minutes], ['Saniye', time.seconds],
  ]

  return (
    <section className="discography-section" id="discography" aria-labelledby="discography-title">
      <div className="discography-inner">
        <p className="section-kicker">CRUSH — 03</p>
        <h2 id="discography-title">Diskografi</h2>
        <div className="discography-tabs" role="tablist" aria-label="Diskografi türü">
          <button className={activeTab === 'albums' ? 'is-active' : ''} onClick={() => setActiveTab('albums')} role="tab" aria-selected={activeTab === 'albums'}>Albümler</button>
          <button className={activeTab === 'singles' ? 'is-active' : ''} onClick={() => setActiveTab('singles')} role="tab" aria-selected={activeTab === 'singles'} lang="en">Singlelar</button>
        </div>

        {activeTab === 'albums' ? (
          <motion.div className="album-teaser" initial="hidden" whileInView="show" viewport={{ once: true, amount: .35 }}>
            <motion.div className="coming-soon-cover" variants={{ hidden: { opacity: 0, scale: .88, rotate: -5 }, show: { opacity: 1, scale: 1, rotate: 0, transition: { duration: .7, ease: [0.22, 1, 0.36, 1] } } }} whileHover={{ y: -7, rotate: -1 }}><span>CRUSH</span><strong lang="en">COMING<br />SOON</strong><i>01</i></motion.div>
            <motion.div className="album-copy" variants={{ hidden: { opacity: 0, x: 25 }, show: { opacity: 1, x: 0, transition: { delay: .16, duration: .6, ease: [0.22, 1, 0.36, 1] } } }}><p>İlk albüm</p><h3>Yakında</h3><span>Yeni bir dönem başlıyor.</span></motion.div>
            <div className="countdown" aria-label="Albüm çıkışına kalan süre">
              {parts.map(([label, value], index) => <motion.div key={label} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { delay: .26 + index * .07, duration: .45, ease: [0.22, 1, 0.36, 1] } } }}><b>{String(value).padStart(2, '0')}</b><span>{label}</span></motion.div>)}
            </div>
          </motion.div>
        ) : (
          <motion.div className="single-list" initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .5 }}>
            <motion.div className="single-cover" initial={{ opacity: 0, scale: .86, rotate: -4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }}><img src="https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e025fd811e0b5320163d644d22d" alt="CRUSH! single kapağı" /></motion.div>
            <motion.div className="single-info" initial={{ opacity: 0, y: 13 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .14, duration: .5, ease: [0.22, 1, 0.36, 1] }}><p lang="en">SINGLE — 2026</p><h3>CRUSH!</h3><span>31 Temmuz 2026 · 2:28</span></motion.div>
            <motion.a className="spotify-play" href="https://open.spotify.com/intl-tr/track/4uFIhAOi62bRG1OhmQfDB9?si=1679618422ed4d6b" target="_blank" rel="noreferrer" aria-label="CRUSH! şarkısını Spotify'da dinle" initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .25, duration: .45, ease: [0.22, 1, 0.36, 1] }}><i aria-hidden="true" /> Spotify'da dinle</motion.a>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default DiscographySection
