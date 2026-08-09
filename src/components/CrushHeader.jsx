import { motion } from 'framer-motion'

const menuItems = [
  { label: 'Üyeler', href: '#members' },
  { label: 'Diskografi', href: '#discography' },
  { label: 'Klipler', href: '#videos' },
  { label: 'Eras of Crush', href: '#eras' },
  { label: 'Konserler', href: '#concerts' },
  { label: 'İletişim', href: '#' },
]

function CrushHeader() {
  return (
    <main className="crush-hero">
      <div className="hero-background" aria-hidden="true"><img src="/crush-band.jpg" alt="" /></div>
      <header className="site-header">
        <nav aria-label="Ana menü">
          {menuItems.map((item, index) => (
            <motion.a href={item.href} key={item.label} initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 + index * 0.09, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>{item.label}</motion.a>
          ))}
        </nav>
      </header>
      <section className="hero-content" id="ana-sayfa" aria-labelledby="hero-title">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.75, ease: 'easeOut' }}>Yeni Nesil Boyband</motion.p>
        <motion.h1 id="hero-title" className="logo-frame" initial={{ opacity: 0, y: -55, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: 0.58, duration: 1.25, ease: [0.16, 1, 0.3, 1] }}><img src="/crush-logo.png" alt="CRUSH" /></motion.h1>
      </section>
      <a className="hero-discover" href="#members"><span>Daha fazlasını keşfet</span><svg viewBox="0 0 16 20" aria-hidden="true"><path d="M8 1v16M2.5 12.5 8 18l5.5-5.5" /></svg></a>
    </main>
  )
}

export default CrushHeader
