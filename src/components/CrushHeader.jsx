import { motion } from 'framer-motion'

const menuItems = ['Üyeler', 'Diskografi', 'Eras of Crush', 'İletişim']

function CrushHeader() {
  return (
    <main className="crush-hero">
      <div className="hero-background" aria-hidden="true"><img src="/crush-band.jpg" alt="" /></div>
      <header className="site-header">
        <nav aria-label="Ana menü">
          {menuItems.map((item, index) => (
            <motion.a href={item === 'Üyeler' ? '#members' : item === 'Diskografi' ? '#discography' : item === 'Eras of Crush' ? '#eras' : '#'} key={item} initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 + index * 0.09, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>{item}</motion.a>
          ))}
        </nav>
      </header>
      <section className="hero-content" id="ana-sayfa" aria-labelledby="hero-title">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.75, ease: 'easeOut' }}>Yeni Nesil Boyband</motion.p>
        <motion.h1 id="hero-title" className="logo-frame" initial={{ opacity: 0, y: -55, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: 0.58, duration: 1.25, ease: [0.16, 1, 0.3, 1] }}><img src="/crush-logo.png" alt="CRUSH" /></motion.h1>
      </section>
    </main>
  )
}

export default CrushHeader
