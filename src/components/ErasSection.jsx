import { AnimatePresence, motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'

const photoFiles = [
  ['Arda', 'ARDA 🤍.jpg'],
  ['Barış', 'BARIŞ 🤍.jpg'],
  ['Batu', 'BATU 🤍.jpg'],
  ['Efe', 'EFE 🤍.jpg'],
  ['Milan', 'MİLAN 🤍.jpg'],
  ['Miraç', 'MİRAÇ 🤍.jpg'],
  ['Oğuzhan', 'OĞUZHAN 🤍.jpg'],
]

const photos = photoFiles.map(([name, file]) => ({ name, source: `/eras/crush-era/${encodeURIComponent(file)}` }))

function ErasSection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  useEffect(() => {
    if (!selectedPhoto) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [selectedPhoto])

  return (
    <section className="eras-section" id="eras" aria-labelledby="eras-title">
      <div className="eras-inner">
        <p className="section-kicker">CRUSH — 05</p>
        <h2 id="eras-title">Eras of Crush</h2>
        <div className="era-selector" role="tablist" aria-label="CRUSH dönemleri">
          <button className="is-active" role="tab" aria-selected="true">CRUSH! Era <span>01</span></button>
          <span className="era-selector__hint">Yeni era yakında</span>
        </div>
        <p className="era-description">CRUSH! döneminden yedi özel photocard.</p>

        <div className="photocard-grid">
          {photos.map((photo, index) => (
            <motion.button
              className="photocard"
              key={photo.name}
              onClick={() => setSelectedPhoto(photo)}
              initial={{ opacity: 0, y: 35, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .15 }}
              transition={{ delay: index * .07, duration: .65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -14, rotate: 0, transition: { duration: .25 } }}
              aria-label={`${photo.name} photocardını büyüt`}
            >
              <img src={photo.source} alt={`${photo.name} — CRUSH! Era`} />
              <span>{String(index + 1).padStart(2, '0')} / 07</span>
              <strong>{photo.name}</strong>
            </motion.button>
          ))}
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={`${selectedPhoto.name} photocard`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedPhoto(null)}>
              <motion.figure initial={{ opacity: 0, scale: .9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .9, y: 20 }} transition={{ duration: .35 }} onClick={(event) => event.stopPropagation()}>
                <img src={selectedPhoto.source} alt={`${selectedPhoto.name} — CRUSH! Era`} />
                <figcaption>{selectedPhoto.name}<button onClick={() => setSelectedPhoto(null)} aria-label="Kapat">×</button></figcaption>
              </motion.figure>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  )
}

export default ErasSection
