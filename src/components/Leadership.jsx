const roles = [
  { icon:'🧑‍💼', title:'Field Representative — Batch of 2022', sub:'Faculty of Engineering, University of Ruhuna • Elected student representative for the entire batch', delay:'0s' },
  { icon:'🖥️', title:'Executive Committee Member — ComES', sub:'Computer Engineering Students\' Society • Event coordination, technical workshops, and industry outreach', delay:'0.1s' },
  { icon:'🏊', title:'Faculty Vice Captain — Swimming', sub:'15th Sri Lanka University Games (SLUG 2025) • Competitive athlete representing the Faculty of Engineering', delay:'0.2s' },
]

export default function Leadership() {
  return (
    <section id="leadership">
      <div className="reveal from-up">
        <div className="section-label">Beyond Code</div>
        <h2 className="section-title">Leadership &amp; <span style={{ color:'var(--amber)' }}>Activities</span></h2>
        <p className="section-sub">Engineering discipline extends well beyond the lab.</p>
      </div>
      <div className="lead-list">
        {roles.map((r) => (
          <div key={r.title} className="lead-item reveal from-left" style={{ transitionDelay: r.delay }}>
            <div className="lead-icon">{r.icon}</div>
            <div>
              <div className="lead-title">{r.title}</div>
              <div className="lead-sub">{r.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
