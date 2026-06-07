/**
 * HOW TO ADD MEDIA TO PROJECTS:
 * 1. Drop your image into:  src/assets/images/project-<slug>.jpg  (or .png / .webp)
 * 2. Drop your video into:  src/assets/videos/project-<slug>.mp4
 * 3. In the project object below set  image: 'project-<slug>'  OR  video: 'project-<slug>'
 *
 * Images/videos are lazy-loaded. If no file exists the emoji placeholder is shown.
 */

// Static imports — add one line per file you place in the assets folders.
// Images
import imgFish   from '../assets/images/project-fish.jpeg?url'
import imgAI      from '../assets/images/project-AI.jpg?url'
import imgSecurity from '../assets/images/project-security.jpg?url'
import imgRfid    from '../assets/images/project-rfid.jpg?url'
import imgWater   from '../assets/images/project-water.jpg?url'
import imgMedical from '../assets/images/project-medical.jpg?url'
import imgLibrary from '../assets/images/project-library.jpg?url'
import imgClinic  from '../assets/images/project-clinic.jpg?url'
import imgDevops  from '../assets/images/image.png?url'
// Videos
import vidRobot   from '../assets/videos/project-robot.mp4?url'

const IMAGE_MAP = {
  'project-fish':   imgFish,
  'project-AI':    imgAI,
  'project-security': imgSecurity,
  'project-rfid':     imgRfid,
  'project-water':    imgWater,
  'project-medical':  imgMedical,
  'project-library':  imgLibrary,
  'project-clinic':   imgClinic,
  'project-devops':   imgDevops,
}
const VIDEO_MAP = {
  'project-robot': vidRobot,
}

const projects = [
  {
    badge: 'badge-ai', badgeLabel: 'AI / Education',
    title: 'Generative AI Exhibition Models',
    desc: 'Interactive educational exhibits — "WordWeaver" and "PixelPainter" — visualising complex AI mechanisms for non-technical audiences. FastAPI async backend with 3D frontend graphics.',
    tags: ['FastAPI', 'Python', 'Generative AI', '3D Graphics'],
    image: 'project-AI',
    emoji: '🎨',
    delay: '0.4s',
  },
  {
    badge: 'badge-security', badgeLabel: 'Security/ESP-32',
    title: 'Multi-Protocol IoT Security Tool',
    desc: 'Handheld penetration testing device auditing wireless vulnerabilities. Implements Sub-1GHz RF (CC1101) and NFC/RFID (PN532) to test signal replay and cloning attacks. Async web server for remote control.',
    tags: ['C++', 'FreeRTOS', 'ESP32', 'CC1101', 'PN532'],
    image: 'project-security',
    emoji: '🔐',
    delay: '0.05s',
  },
  {
    badge: 'badge-embedded', badgeLabel: 'Embedded',
    title: 'IoT Fish Tank Feeder & Monitor',
    desc: 'Bare-metal AVR firmware managing pet feeding schedules with custom I²C drivers for a 16×2 LCD, Timer1 PWM servo actuation, and ultrasonic distance sensing with software timing.',
    tags: ['C (AVR)', 'ATmega', 'I²C/TWI', 'PWM', 'HC-SR04'],
    image: 'project-fish',
    video: 'project-fish',
    emoji: '🐟',
    delay: '0.1s',
  },
  {
    badge: 'badge-iot', badgeLabel: 'IoT',
    title: 'Smart HealthID — RFID Medical Records',
    desc: 'Decentralized EHR system enabling secure offline patient data retrieval via RFID smart cards. Compressed JSON on-card storage; local Wi-Fi access point with RESTful API for instant record lookup.',
    tags: ['RFID', 'RESTful API', 'JSON', 'WiFi AP'],
    image: 'project-rfid',
    emoji: '🪪',
    delay: '0.15s',
  },
  {
    badge: 'badge-security', badgeLabel: 'Cybersecurity',
    title: 'Network Vulnerability Demo',
    desc: 'Live cybersecurity simulation educating attendees on public network risks. Custom Reverse TCP payloads via msfvenom deployed through Kali Linux and the Metasploit Framework.',
    tags: ['Kali Linux', 'Metasploit', 'msfvenom', 'Networking'],
    emoji: '🛡️',
    delay: '0.2s',
  },
  {
    badge: 'badge-java', badgeLabel: 'Java',
    title: 'LAN-Based Polling & Voting System',
    desc: 'Secure networked polling application using Java multi-threading for concurrent client handling. High-availability socket communication across multiple Linux VM hosts with low-latency guarantees.',
    tags: ['Java', 'Multi-threading', 'Socket IO', 'Linux VM'],
    emoji: '🗳️',
    delay: '0.25s',
  },
  {
    badge: 'badge-medical', badgeLabel: 'Medical',
    title: 'Endoscopy Media Management Software',
    desc: 'Windows desktop application (.NET 9.0 / WPF) for biomedical clients capturing live video feeds via OpenCV. SQLite persistence layer maps captured media to patient profiles with full CRUD.',
    tags: ['C#', 'WPF', 'OpenCV', 'SQLite', '.NET 9.0'],
    image: 'project-medical',
    emoji: '🩺',
    delay: '0.3s',
  },
  {
    badge: 'badge-fullstack', badgeLabel: 'Cloud',
    title: 'Cloud-Native DevOps Task Manager',
    desc: 'Full-stack MERN task manager demonstrating cloud-native deployment. Automated CI/CD via Jenkins, GitHub Webhooks, and Terraform for AWS EC2 provisioning — patterns applicable to scalable IoT backends.',
    tags: ['MERN', 'Jenkins', 'Terraform', 'AWS EC2'],
    image: 'project-devops',
    emoji: '☁️',
    delay: '0.35s',
  },
  
]

function ProjectMedia({ project }) {
  const videoSrc = VIDEO_MAP[project.video]
  const imageSrc = IMAGE_MAP[project.image]

  if (videoSrc) {
    return (
      <div className="project-media">
        <video src={videoSrc} autoPlay muted loop playsInline />
      </div>
    )
  }
  if (imageSrc) {
    return (
      <div className="project-media">
        <img src={imageSrc} alt={project.title} loading="lazy" />
      </div>
    )
  }
  return (
    <div className="project-media">
      <div className="project-media-placeholder">{project.emoji}</div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="reveal from-up">
        <div className="section-label">What I Build</div>
        <h2 className="section-title">Featured <span style={{ color:'var(--cyan)' }}>Projects</span></h2>
        <p className="section-sub">
          Hardware-first projects spanning embedded firmware, IoT systems, AI inference,
          and full-stack web — always built from the ground up.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card reveal from-up" style={{ transitionDelay: p.delay }}>
            <ProjectMedia project={p} />
            <div className="project-body">
              <span className={`project-badge ${p.badge}`}>{p.badgeLabel}</span>
              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
