const socialLinks = [
  { name: 'Instagram', handle: '@wearecrushboys', href: 'https://www.instagram.com/wearecrushboys/?hl=en', icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.4" cy="6.7" r=".9" fill="currentColor" stroke="none" /></> },
  { name: 'TikTok', handle: '@wearecrushboys', href: 'https://www.tiktok.com/@wearecrushboys', icon: <path d="M14 3v11.2a4.8 4.8 0 1 1-4.1-4.75v2.5a2.35 2.35 0 1 0 1.65 2.25V3h2.45c.35 2.2 1.8 3.6 4 3.9v2.45A7.3 7.3 0 0 1 14 8.1" /> },
  { name: 'X', handle: '@wearecrushboys', href: 'https://x.com/wearecrushboys', icon: <path d="M4 4l6.05 7.75L4.2 20h2.45l4.5-6.1L15.9 20H20l-6.3-8.05L19.15 4H16.7l-4.15 5.65L8.1 4H4Zm3.15 1.9h1.98l7.7 12.2h-1.98L7.15 5.9Z" fill="currentColor" stroke="none" /> },
  { name: 'YouTube', handle: 'CRUSH', href: 'https://www.youtube.com/channel/UCdKIMZMJeZtLwitpv0O_U3Q', icon: <><path d="M21 12s0-4.1-.52-6.05a2.55 2.55 0 0 0-1.8-1.8C16.73 3.63 12 3.63 12 3.63s-4.73 0-6.68.52a2.55 2.55 0 0 0-1.8 1.8C3 7.9 3 12 3 12s0 4.1.52 6.05a2.55 2.55 0 0 0 1.8 1.8c1.95.52 6.68.52 6.68.52s4.73 0 6.68-.52a2.55 2.55 0 0 0 1.8-1.8C21 16.1 21 12 21 12Z" /><path d="m10 15.5 5-3.5-5-3.5v7Z" fill="currentColor" stroke="none" /></> },
  { name: 'Spotify', handle: 'CRUSH', href: 'https://open.spotify.com/intl-tr/artist/2JEo6ivzJS4vQbHZycSsS6?si=hl7Oq-djRZm574kgDnnu0g', icon: <><circle cx="12" cy="12" r="9" /><path d="M7.5 10.1c3.2-.9 6.6-.55 9.15.8M8.05 13.1c2.55-.7 5.3-.4 7.35.65M8.6 15.8c1.85-.48 3.75-.25 5.25.52" /></> },
]

function SocialsSection() {
  return (
    <section className="socials-section" id="social" aria-labelledby="socials-title">
      <div className="socials-inner">
        <p className="section-kicker">CRUSH — 07</p>
        <h2 id="socials-title">Sosyal</h2>
        <p className="socials-intro">CRUSH’ı her yerde takip et.</p>
        <div className="social-grid">
          {socialLinks.map((social, index) => (
            <a className="social-card" href={social.href} target="_blank" rel="noreferrer" key={social.name} style={{ '--delay': `${index * 55}ms` }} aria-label={`${social.name} hesabını yeni sekmede aç`}>
              <svg viewBox="0 0 24 24" aria-hidden="true">{social.icon}</svg>
              <span>{social.name}</span><small>{social.handle}</small>
              <i aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialsSection
