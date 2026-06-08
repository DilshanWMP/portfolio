import { useState, useEffect } from 'react'

// Local PDF imports via Vite ?url suffix
import slugCertPdf from '../assets/Certificates/SLUG2025-1.pdf?url'
import netwizCertPdf from '../assets/Certificates/NetWiz.pdf?url'

// SVG Brand Logos
const ForageLogo = () => (
  <div className="cert-logo-container forage-bg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  </div>
)

const Ieeelogo = () => (
  <div className="cert-logo-container ieee-bg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
    </svg>
  </div>
)

const Slusalogo = () => (
  <div className="cert-logo-container slusa-bg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="6" r="2" fill="currentColor" stroke="none" />
      <path d="M4 11l3-2 4 2 4-2 3 2" />
      <path d="M2 16c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
      <path d="M2 20c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
    </svg>
  </div>
)

const ComSocLogo = () => (
  <div className="cert-logo-container comsoc-bg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 4h16v12H4V4z" />
    </svg>
  </div>
)

const certificationsData = [
  {
    title: 'Commonwealth Bank - Software Engineering Job Simulation',
    issuer: 'Forage',
    date: 'Issued Apr 2026',
    credentialId: 'bRxNe7vxQDGpEhkte',
    credentialUrl: 'https://www.theforage.com/completion-certificates/2sNmYuurxgpFYawco/xv8eSGu7nksKNiCQj_2sNmYuurxgpFYawco_69b3037de6cb0e8876f9f6a1_1776243727203_completion_certificate.pdf',
    pdfUrl: 'https://www.theforage.com/completion-certificates/2sNmYuurxgpFYawco/xv8eSGu7nksKNiCQj_2sNmYuurxgpFYawco_69b3037de6cb0e8876f9f6a1_1776243727203_completion_certificate.pdf',
    logo: <Forageage />
  },
  {
    title: 'IEEEXtreme 19.0 Programming Competition',
    issuer: 'IEEE',
    date: 'Issued Oct 2025',
    credentialId: '4019EvXFV3mHWk',
    credentialUrl: 'https://certificate.ieeextreme.org/generate-email-certificate/4019EvXFV3mHWk',
    pdfUrl: 'https://certificate.ieeextreme.org/generate-email-certificate/4019EvXFV3mHWk',
    logo: <Ieeelogo />
  },
  {
    title: 'Participation - 15th Sri Lanka University Games (Swimming)',
    issuer: 'Sri Lanka Universities Sports Association (SLUSA)',
    date: 'Issued Sep 2025',
    pdfUrl: slugCertPdf,
    skills: 'Swimming',
    logo: <Slusalogo />
  },
  {
    title: 'NetWiz 1.0 – Networking Workshop',
    issuer: 'IEEE Computer Society University of Ruhuna',
    date: 'Issued Apr 2025',
    skills: 'Networking',
    pdfUrl: netwizCertPdf,
    description: 'Successfully completed the NetWiz 1.0 Networking Fundamentals Workshop Series organized by the ComSoc Chapter - IEEE Student Branch, University of Ruhuna. Gained practical knowledge on networking concepts, tools, and real-world applications.',
    logo: <ComSocLogo />
  }
]

// Separate helper mapping so we don't reference undefined component names
function Forageage() {
  return <ForageLogo />
}

function PdfModal({ pdfUrl, title, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="pdf-modal-overlay" onClick={onClose}>
      <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="pdf-modal-header">
          <h3 className="pdf-modal-title">{title}</h3>
          <button className="pdf-modal-close" onClick={onClose} aria-label="Close document">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="pdf-modal-body">
          <iframe 
            src={pdfUrl} 
            title={title} 
            width="100%" 
            height="100%" 
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  )
}

export default function Certifications() {
  const [activePdf, setActivePdf] = useState(null)

  return (
    <section id="certifications">
      <div className="reveal from-up">
        <div className="section-label">Achievements</div>
        <h2 className="section-title">Licenses &amp; <span style={{ color: 'var(--cyan)' }}>Certifications</span></h2>
        <p className="section-sub">
          Professional development, technical simulation training, and workshop validation series.
        </p>
      </div>

      <div className="certs-list reveal from-up" style={{ transitionDelay: '0.1s' }}>
        {certificationsData.map((cert, index) => (
          <div key={index} className="cert-item">
            {cert.logo}
            <div className="cert-info">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">{cert.date}</p>
              {cert.credentialId && (
                <p className="cert-credential-id">Credential ID {cert.credentialId}</p>
              )}
              {cert.description && (
                <p className="cert-description">{cert.description}</p>
              )}
              {cert.skills && (
                <div className="cert-skills">
                  <strong>Skills:</strong> {cert.skills}
                </div>
              )}
              <div className="cert-actions">
                {cert.credentialUrl && (
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="cert-action-btn show-cred-btn">
                    Show credential
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                )}
                {cert.pdfUrl && (
                  <button 
                    onClick={() => setActivePdf({ url: cert.pdfUrl, title: cert.title })} 
                    className="cert-action-btn view-cert-btn"
                  >
                    View Certificate
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {activePdf && (
        <PdfModal 
          pdfUrl={activePdf.url} 
          title={activePdf.title} 
          onClose={() => setActivePdf(null)} 
        />
      )}
    </section>
  )
}
