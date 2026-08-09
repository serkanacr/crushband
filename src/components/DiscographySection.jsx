import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const releaseDate = new Date('2026-12-31T00:00:00+03:00')

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
          <button className={activeTab === 'singles' ? 'is-active' : ''} onClick={() => setActiveTab('singles')} role="tab" aria-selected={activeTab === 'singles'} lang="en">SINGLELAR</button>
        </div>

        {activeTab === 'albums' ? (
          <motion.div className="album-teaser" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
            <div className="coming-soon-cover"><span>CRUSH</span><strong lang="en">COMING<br />SOON</strong><i>01</i></div>
            <div className="album-copy"><p>İlk albüm</p><h3>Yakında</h3><span>Yeni bir dönem başlıyor.</span></div>
            <div className="countdown" aria-label="Albüm çıkışına kalan süre">
              {parts.map(([label, value]) => <div key={label}><b>{String(value).padStart(2, '0')}</b><span>{label}</span></div>)}
            </div>
          </motion.div>
        ) : (
          <motion.div className="single-list" initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .5 }}>
            <div className="single-cover"><img src="https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e025fd811e0b5320163d644d22d" alt="CRUSH! single kapağı" /></div>
            <div className="single-info"><p lang="en">SINGLE — 2026</p><h3>CRUSH!</h3><span>31 Temmuz 2026 · 2:28</span></div>
            <a className="spotify-play" href="https://open.spotify.com/intl-tr/track/4uFIhAOi62bRG1OhmQfDB9?si=1679618422ed4d6b" target="_blank" rel="noreferrer" aria-label="CRUSH! şarkısını Spotify'da dinle"><i>▶</i> Spotify'da dinle</a>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default DiscographySection
