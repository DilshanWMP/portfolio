export default function About() {
  return (
    <section id="about">
      <div className="reveal from-up">
        <div className="section-label">Who I Am</div>
        <h2 className="section-title">A Bit <span style={{ color:'var(--cyan)' }}>About</span> Me</h2>
        <p className="section-sub">
          Third-year Computer Engineering undergraduate passionate about turning silicon
          into intelligent systems — from bare-metal drivers to full IoT architectures.
        </p>
      </div>
      <div className="about-grid">
        <div className="reveal from-left" style={{ transitionDelay:'0.1s' }}>
          <div className="about-info-card">
            <ul className="about-info-list">
              <li><div className="info-icon">🎓</div><div><div className="info-label">Education</div><div className="info-val">B.Sc. (Hons) Computer Engineering</div><div style={{ fontSize:'0.8rem',color:'var(--muted)' }}>University of Ruhuna • 3rd Year</div></div></li>
              <li><div className="info-icon">📍</div><div><div className="info-label">Location</div><div className="info-val">Kandy, Sri Lanka</div></div></li>
              <li><div className="info-icon">📧</div><div><div className="info-label">Email</div><div className="info-val">praveenwmd@gmail.com</div></div></li>
              <li><div className="info-icon">📞</div><div><div className="info-label">Phone</div><div className="info-val">076 486 3455</div></div></li>
              <li>
                <div className="info-icon">🌐</div>
                <div>
                  <div className="info-label">Languages</div>
                  <div className="lang-pills">
                    <span className="lang-pill native">Sinhala — Native</span>
                    <span className="lang-pill prof">English — Professional</span>
                    <span className="lang-pill basic">Tamil — Basic</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="reveal from-right" style={{ transitionDelay:'0.15s' }}>
          <h3 style={{ fontFamily:'var(--font-head)',fontSize:'1.4rem',fontWeight:700,marginBottom:18 }}>Engineering hardware-first solutions</h3>
          <p style={{ fontSize:'0.92rem',lineHeight:1.8,color:'#8080a0',marginBottom:18 }}>
            I specialize in embedded firmware, real-time operating systems, and low-power IoT design.
            My projects range from custom I²C drivers on bare-metal AVR to multi-protocol security
            tools built on FreeRTOS-powered ESP32.
          </p>
          <p style={{ fontSize:'0.92rem',lineHeight:1.8,color:'#8080a0',marginBottom:28 }}>
            Outside the lab I serve as Field Representative for my batch, hold a position on the
            ComES executive board, and compete as Faculty Vice Captain in Swimming — because
            discipline in sport translates directly to discipline in engineering.
          </p>
          <div style={{ display:'flex',flexWrap:'wrap',gap:10 }}>
            {[
              ['Firmware Dev','rgba(79,70,229,0.14)','var(--indigo-l)','rgba(79,70,229,0.3)'],
              ['IoT Architect','rgba(6,182,212,0.12)','var(--cyan)','rgba(6,182,212,0.3)'],
              ['Real-Time Systems','rgba(236,72,153,0.12)','var(--pink)','rgba(236,72,153,0.3)'],
              ['Hardware Debug','rgba(245,158,11,0.12)','var(--amber)','rgba(245,158,11,0.3)'],
            ].map(([label,bg,color,border]) => (
              <span key={label} style={{ padding:'6px 14px',borderRadius:99,fontSize:'0.78rem',fontWeight:600,background:bg,color,border:`1px solid ${border}` }}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
