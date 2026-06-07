const links = [
  { icon:'✉️', label:'praveenwmd@gmail.com', href:'mailto:praveenwmd@gmail.com' },
  { icon:'📞', label:'076 486 3455', href:'tel:+94764863455' },
  { icon:'🐙', label:'github.com/DilshanWMP', href:'https://github.com/DilshanWMP', external:true },
  { icon:'💼', label:'linkedin.com/in/praveen-dilshan', href:'https://linkedin.com/in/praveen-dilshan', external:true },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-ripples">
        <div className="contact-ripple" /><div className="contact-ripple" /><div className="contact-ripple" />
      </div>
      <div className="contact-inner">
        <div className="reveal from-up">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let's <span style={{ color:'var(--pink)' }}>Connect</span></h2>
          <p className="section-sub" style={{ marginBottom:0 }}>
            Looking for an Embedded Systems internship. Open to hardware-focused
            roles, IoT projects, or firmware collaboration. Drop a message!
          </p>
        </div>
        <div className="contact-links reveal from-up" style={{ transitionDelay:'0.15s' }}>
          {links.map((l) => (
            <a key={l.label} className="contact-link" href={l.href}
               {...(l.external ? { target:'_blank', rel:'noopener noreferrer' } : {})}>
              <span className="cl-icon">{l.icon}</span>
              <span>{l.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
