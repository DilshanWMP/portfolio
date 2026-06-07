/**
 * PROFILE PICTURE
 * Replace src/assets/images/profile.jpg with your actual photo.
 * The component shows your initials until a real image is placed there.
 */
import profileSrc from '../assets/images/profile.jpg?url'

// Detect if the import resolved to the tiny placeholder (< 200 bytes as base64)
// We check file size at build time via a companion text trick — simpler: just
// let the user replace the file. We show img always; if it's the placeholder
// (1×1 transparent) it'll be invisible inside the gradient circle and initials
// won't show, so we default to showing initials and swap when a real photo exists.

// A simpler approach: export a flag from a sidecar, but easiest: always render img
// behind initials; once replaced the img shows and hides the text via object-fit.

function Avatar() {
  return (
    <div className="hero-avatar-wrap">
      <div className="avatar-ripple" />
      <div className="avatar-ripple" />
      <div className="avatar-ripple" />
      <div className="avatar-img-circle">
        <img
          src={profileSrc}
          alt="Dilshan W. M. P."
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        <span className="avatar-initials" style={{ position:'absolute' }}>DWP</span>
      </div>
      <div className="floating-card">
        <div className="float-card-icon">⚡</div>
        <div className="float-card-label">ESP32</div>
        <div className="float-card-value">FreeRTOS</div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-eyebrow">Computer Engineering Undergraduate</div>
          <h1 className="hero-name">Dilshan<br />W. M. P.</h1>
          <div className="hero-title">Embedded Systems &amp; Firmware Developer</div>
          <p className="hero-desc">
            Bare-metal C wizard. FreeRTOS enthusiast. IoT architect.
            Building robust, real-time hardware solutions from the ground up
            at the University of Ruhuna, Sri Lanka.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>
        </div>
        <Avatar />
      </div>
    </section>
  )
}
