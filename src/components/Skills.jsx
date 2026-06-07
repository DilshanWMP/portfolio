const categories = [
  {
    title: '⚡ Embedded & IoT', delay: '0.05s',
    fill: 'fill-amber',
    skills: [
      { name: 'Bare-metal C/C++', pct: 95 },
      { name: 'AVR / ATmega', pct: 90 },
      { name: 'ESP32 / FreeRTOS', pct: 88 },
      { name: 'PWM & Hardware ISR', pct: 85 },
    ],
  },
  {
    title: '📡 Protocols & Sensors', delay: '0.1s',
    fill: 'fill-cyan',
    skills: [
      { name: 'I²C / TWI', pct: 90 },
      { name: 'Sub-1GHz RF (CC1101)', pct: 80 },
      { name: 'NFC / RFID (PN532)', pct: 82 },
      { name: 'Ultrasonic HC-SR04', pct: 88 },
    ],
  },
  {
    title: '💻 Programming Languages', delay: '0.15s',
    fill: 'fill-indigo',
    skills: [
      { name: 'C / C++', pct: 93 },
      { name: 'Python', pct: 80 },
      { name: 'Java', pct: 78 },
      { name: 'C# / JavaScript / SQL', pct: 72 },
    ],
  },
  {
    title: '☁️ Cloud & DevOps', delay: '0.2s',
    fill: 'fill-pink',
    skills: [
      { name: 'AWS (EC2)', pct: 70 },
      { name: 'Docker & Terraform', pct: 68 },
      { name: 'Jenkins CI/CD', pct: 65 },
      { name: 'Linux (Ubuntu/Kali)', pct: 82 },
    ],
  },
  {
    title: '🔧 Backend & APIs', delay: '0.25s',
    fill: 'fill-cyan',
    skills: [
      { name: 'FastAPI', pct: 78 },
      { name: 'Spring Boot', pct: 72 },
      { name: 'Node.js', pct: 70 },
      { name: 'ASP.NET Core', pct: 68 },
    ],
  },
  {
    title: '🗄️ Databases', delay: '0.3s',
    fill: 'fill-amber',
    skills: [
      { name: 'PostgreSQL', pct: 75 },
      { name: 'SQLite', pct: 80 },
      { name: 'MongoDB', pct: 68 },
      { name: 'Firebase', pct: 65 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="reveal from-up">
        <div className="section-label">What I Know</div>
        <h2 className="section-title">Technical <span style={{ color:'var(--pink)' }}>Skills</span></h2>
        <p className="section-sub">
          From microcontroller peripherals to cloud DevOps pipelines — a full-stack
          engineering toolkit with an embedded-first mindset.
        </p>
      </div>
      <div className="skills-categories">
        {categories.map((cat) => (
          <div key={cat.title} className="skill-card reveal from-up" style={{ transitionDelay: cat.delay }}>
            <div className="skill-card-title">{cat.title}</div>
            {cat.skills.map((s) => (
              <div key={s.name} className="skill-item">
                <div className="skill-name-row">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-pct">{s.pct}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className={`skill-bar-fill ${cat.fill}`} data-width={s.pct} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
