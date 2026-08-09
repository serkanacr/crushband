function VideosSection() {
  return (
    <section className="videos-section" id="videos" aria-labelledby="videos-title">
      <div className="videos-inner">
        <p className="section-kicker">CRUSH — 04</p>
        <h2 id="videos-title">Klipler</h2>
        <div className="video-feature">
          <div className="video-frame">
            <iframe
              src="https://www.youtube-nocookie.com/embed/aKGCXYX7jN8"
              title="CRUSH! resmi müzik videosu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="video-caption"><span lang="en">OFFICIAL MUSIC VIDEO</span><h3>CRUSH!</h3><p>İlk müzik videosu</p></div>
        </div>
      </div>
    </section>
  )
}

export default VideosSection
