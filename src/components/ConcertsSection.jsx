import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const concerts = [
  { day: '12', month: 'Eylül', weekday: 'Cumartesi', time: '21:00', venue: 'Maximum Uniq Açıkhava', city: 'İstanbul', startsAt: '2026-09-12T21:00:00+03:00', soldOut: true },
  { day: '13', month: 'Eylül', weekday: 'Pazar', time: '21:00', venue: 'Maximum Uniq Açıkhava', city: 'İstanbul', startsAt: '2026-09-13T21:00:00+03:00', soldOut: true },
]

const ticketUrl = 'https://www.bubilet.com.tr/istanbul/etkinlik/crush'

function getCountdown(date, currentTime) {
  const remaining = Math.max(0, new Date(date).getTime() - currentTime)
  if (remaining === 0) return 'Gerçekleşti'
  const days = Math.floor(remaining / 86400000)
  const hours = Math.floor((remaining / 3600000) % 24)
  return `${days} gün ${String(hours).padStart(2, '0')} saat kaldı`
}

function ConcertsSection() {
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 60000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="concerts-section" id="concerts" aria-labelledby="concerts-title">
      <div className="concerts-inner">
        <p className="section-kicker">CRUSH — 06</p>
        <h2 id="concerts-title">Konserler</h2>
        <p className="concerts-intro">İlk sahne, ilk enerji. Yakında görüşürüz.</p>
        <div className="concert-list">
          {concerts.map((concert, index) => (
            <motion.article className="concert-card" key={`${concert.day}-${concert.month}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .42, delay: index * .07, ease: [0.22, 1, 0.36, 1] }}>
              <div className="concert-date"><b>{concert.day}</b><span>{concert.month}<small>{concert.weekday}</small></span></div>
              <div className="concert-info"><p>{concert.city} · {concert.time}</p><h3>{concert.venue}</h3><em>{getCountdown(concert.startsAt, now)}</em></div>
              {concert.soldOut ? <span className="sold-out">Tükendi</span> : <a className="ticket-button" href={ticketUrl} target="_blank" rel="noreferrer">Bilet al <i>↗</i></a>}
            </motion.article>
          ))}
        </div>
        <a className="concert-source" href={ticketUrl} target="_blank" rel="noreferrer">Tüm etkinlikleri Bubilet’te gör <svg className="external-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" /></svg></a>
      </div>
    </section>
  )
}

export default ConcertsSection
