const edu = [
  {
    icon: '🎓',
    institution: 'University of Ruhuna',
    degree: 'B.Sc. (Hons) in Computer Engineering',
    year: '3rd Year Undergraduate • Present',
    note: 'Department of Electrical and Information Engineering. Focus areas: Embedded Systems, Digital Design, Computer Architecture, Networking, and Software Engineering.',
    revealClass: 'from-left',
    delay: '0s',
  },
  {
    icon: '🏫',
    institution: 'Trinity College Kandy',
    degree: 'Primary & Secondary Education',
    year: 'Kandy, Sri Lanka',
    note: 'Completed primary and secondary education. Active participation in swimming (Faculty Vice Captain), batch representation, and academic societies.',
    revealClass: 'from-right',
    delay: '0.1s',
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="reveal from-up">
        <div className="section-label">Academic Background</div>
        <h2 className="section-title">Edu<span style={{ color:'var(--cyan)' }}>cation</span></h2>
        <p className="section-sub">Formal academic training that underpins every line of firmware I write.</p>
      </div>
      <div className="edu-grid">
        {edu.map((e) => (
          <div key={e.institution} className={`edu-card reveal ${e.revealClass}`} style={{ transitionDelay: e.delay }}>
            <div style={{ fontSize: '2rem', marginBottom: 14 }}>{e.icon}</div>
            <div className="edu-institution">{e.institution}</div>
            <div className="edu-degree">{e.degree}</div>
            <div className="edu-year">{e.year}</div>
            {e.note && (
              <div style={{ marginTop: 12, fontSize: '0.82rem', color: '#7878a0', lineHeight: 1.65 }}>
                {e.note}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
