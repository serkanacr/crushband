const concerts = [
  { day: '12', month: 'Eylül', weekday: 'Cumartesi', time: '21:00', venue: 'Maximum Uniq Açıkhava', city: 'İstanbul', soldOut: true },
  { day: '13', month: 'Eylül', weekday: 'Pazar', time: '21:00', venue: 'Maximum Uniq Açıkhava', city: 'İstanbul', soldOut: true },
]

const ticketUrl = 'https://www.bubilet.com.tr/istanbul/etkinlik/crush'

function ConcertsSection() {
  return (
    <section className="concerts-section" id="concerts" aria-labelledby="concerts-title">
      <div className="concerts-inner">
        <p className="section-kicker">CRUSH — 06</p>
        <h2 id="concerts-title">Konserler</h2>
        <p className="concerts-intro">İlk sahne, ilk enerji. Yakında görüşürüz.</p>
        <div className="concert-list">
          {concerts.map((concert) => (
            <article className="concert-card" key={`${concert.day}-${concert.month}`}>
              <div className="concert-date"><b>{concert.day}</b><span>{concert.month}<small>{concert.weekday}</small></span></div>
              <div className="concert-info"><p>{concert.city} · {concert.time}</p><h3>{concert.venue}</h3></div>
              {concert.soldOut ? <span className="sold-out">Tükendi</span> : <a className="ticket-button" href={ticketUrl} target="_blank" rel="noreferrer">Bilet al <i>↗</i></a>}
            </article>
          ))}
        </div>
        <a className="concert-source" href={ticketUrl} target="_blank" rel="noreferrer">Tüm etkinlikleri Bubilet’te gör <span>↗</span></a>
      </div>
    </section>
  )
}

export default ConcertsSection
