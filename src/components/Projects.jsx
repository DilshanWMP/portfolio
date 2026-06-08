import { useState, useEffect } from 'react'

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
// AI Project Gallery Images
import aiImg1 from '../assets/images/AI project/image 1.png?url'
import aiImg2 from '../assets/images/AI project/image 2.png?url'
import aiImg3 from '../assets/images/AI project/image 3.png?url'
import aiImg4 from '../assets/images/AI project/image 4.png?url'
import aiImg5 from '../assets/images/AI project/image 5.png?url'
import aiImg6 from '../assets/images/AI project/image 6.png?url'
import aiImg7 from '../assets/images/AI project/image 7.png?url'
import aiImg8 from '../assets/images/AI project/image 8.png?url'
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
    gallery: [aiImg1, aiImg2, aiImg3, aiImg4, aiImg5, aiImg6, aiImg7, aiImg8],
    details: {
      overview: 'Artificial Intelligence can often feel like a black box to the general public. To bridge this gap, I collaborated with a development team to build a suite of interactive applications designed to demystify complex AI mechanisms. Presented at the ReXtro Exhibition, this project provides an intuitive, visual breakdown of how Large Language Models (LLMs) and text-to-image models actually work under the hood.',
      keyComponents: [
        {
          title: 'WordWeaver (LLM Simulator)',
          desc: 'An interactive educational tool that visualizes the mechanics of AI text generation. WordWeaver breaks down the token prediction process step-by-step, allowing users to see exactly how AI models formulate sentences and predict subsequent words.'
        },
        {
          title: 'PixelPainter',
          desc: 'A real-time visualizer for text-to-image generation. This application demonstrates the mechanics of Stable Diffusion by actively showing the denoising process, pulling back the curtain on how an AI transforms a simple text prompt into a cohesive piece of digital art.'
        }
      ],
      architecture: [
        { label: 'Frontend', value: 'React (Vite) – Built a highly dynamic and responsive user interface to handle real-time visual updates and provide a rich user experience.' },
        { label: 'Backend', value: 'Python (FastAPI) – Engineered a robust, high-performance backend to manage the computationally heavy AI processing and serve data seamlessly to the client.' }
      ],
      links: [
        { label: 'Source Code (GitHub)', url: 'https://lnkd.in/gK5sd_KW' }
      ],
      acknowledgements: {
        supervisors: 'Dr. (Eng.) Thilina Weerasinghe & Dr. (Eng.) Geeth Priyankara',
        team: 'Praveen Dilshan, Hasmitha Gunarathne, Udari Edirinayake, Manodya Wijerathna'
      }
    }
  },
  {
    badge: 'badge-security', badgeLabel: 'Security/ESP-32',
    title: 'Multi-Protocol IoT Security Tool',
    desc: 'Handheld penetration testing device auditing wireless vulnerabilities. Implements Sub-1GHz RF (CC1101) and NFC/RFID (PN532) to test signal replay and cloning attacks. Async web server for remote control.',
    tags: ['C++', 'FreeRTOS', 'ESP32', 'CC1101', 'PN532'],
    image: 'project-security',
    emoji: '🔐',
    delay: '0.05s',
    details: {
      overview: 'Wireless protocols are the backbone of modern smart environments, but they are often vulnerable to simple exploits. This handheld security auditing tool runs on an ESP32 microcontroller, interfacing with custom transceiver modules to analyze and debug physical security systems. Designed for penetration testing and vulnerability assessment of RFID/NFC barriers and Sub-1GHz wireless controls.',
      keyComponents: [
        {
          title: 'Sub-1GHz Jammer & Replayer',
          desc: 'Built using the CC1101 transceiver, capable of capturing, analyzing, and replaying remote control signals (e.g., gate openers, keyless entry systems) operating under 315/433 MHz.'
        },
        {
          title: 'RFID/NFC Audit System',
          desc: 'Utilizes the PN532 module to read, emulate, and clone cards (e.g., Mifare Classic 1K), facilitating the identification of weak key structures and protocol vulnerabilities.'
        }
      ],
      architecture: [
        { label: 'Firmware', value: 'C++ / FreeRTOS – Multi-threaded task scheduling ensures real-time signal polling, hardware interrupts, and low-latency packet processing.' },
        { label: 'Hardware Integration', value: 'ESP32 + CC1101 (SPI) + PN532 (I²C) with an OLED display and battery-powered portable enclosure.' }
      ],
      links: [],
      acknowledgements: {}
    }
  },
  {
    badge: 'badge-embedded', badgeLabel: 'Embedded',
    title: 'IoT Fish Tank Feeder & Monitor',
    desc: 'Bare-metal AVR firmware managing pet feeding schedules with custom I²C drivers for a 16×2 LCD, Timer1 PWM servo actuation, and ultrasonic distance sensing with software timing.',
    tags: ['C (AVR)', 'ATmega', 'I²C/TWI', 'PWM', 'HC-SR04'],
    image: 'project-fish',
    emoji: '🐟',
    delay: '0.1s',
    details: {
      overview: 'Creating automation on bare-metal systems requires precise register control and timing. This project implements a fully independent automated feeder and monitoring system for aquariums, engineered directly on AVR microcontrollers without operating system layers, ensuring ultra-reliable scheduling and low power usage.',
      keyComponents: [
        {
          title: 'Hardware Scheduling Engine',
          desc: 'Timer/Counter interrupts manage absolute feeding timing cycles without blocking execution.'
        },
        {
          title: 'Multi-sensor Integration',
          desc: 'Ultrasonic sensor for real-time feed-level measurement, custom I²C communication layer for an LCD status console, and servo actuation.'
        }
      ],
      architecture: [
        { label: 'Microcontroller', value: 'Microchip ATmega328P (Bare-metal C).' },
        { label: 'Peripherals', value: 'Custom bit-banged I²C/TWI drivers, Timer1 PWM configuration, software distance measurement routines.' }
      ],
      links: [],
      acknowledgements: {}
    }
  },
  {
    badge: 'badge-iot', badgeLabel: 'IoT',
    title: 'Smart HealthID — RFID Medical Records',
    desc: 'Decentralized EHR system enabling secure offline patient data retrieval via RFID smart cards. Compressed JSON on-card storage; local Wi-Fi access point with RESTful API for instant record lookup.',
    tags: ['RFID', 'RESTful API', 'JSON', 'WiFi AP'],
    image: 'project-rfid',
    emoji: '🪪',
    delay: '0.15s',
    details: {
      overview: 'Accessing medical records in remote or disaster-stricken areas is a critical challenge. Smart HealthID solves this by storing compressed medical records directly on RFID/NFC smart cards. It runs local Wi-Fi access points that allow practitioners to retrieve records using simple web interfaces without internet access.',
      keyComponents: [
        {
          title: 'Compressed Storage',
          desc: 'A customized dictionary compression scheme allowing structured patient data and blood groups to fit within the memory limits of standard RFID cards.'
        },
        {
          title: 'Local REST Server',
          desc: 'A lightweight local web server serving records instantly to connected smart tablets/PCs via API.'
        }
      ],
      architecture: [
        { label: 'Hardware', value: 'ESP8266/ESP32, RC522 RFID Reader, custom client interface.' },
        { label: 'Protocol', value: 'Local Wi-Fi Access Point, REST APIs, JSON compression.' }
      ],
      links: [],
      acknowledgements: {}
    }
  },
  {
    badge: 'badge-security', badgeLabel: 'Cybersecurity',
    title: 'Network Vulnerability Demo',
    desc: 'Live cybersecurity simulation educating attendees on public network risks. Custom Reverse TCP payloads via msfvenom deployed through Kali Linux and the Metasploit Framework.',
    tags: ['Kali Linux', 'Metasploit', 'msfvenom', 'Networking'],
    emoji: '🛡️',
    delay: '0.2s',
    details: {
      overview: 'Security awareness is the first line of defense. This demonstration showcases the mechanics of active network intrusion simulations on insecure public Wi-Fi access points to educate IT professionals on the importance of payload detection, secure protocols, and firewall rules.',
      keyComponents: [
        {
          title: 'Intrusion Simulation',
          desc: 'Shows the deployment of custom payloads and session handling in isolated VM environments.'
        },
        {
          title: 'Packet Analysis',
          desc: 'Demonstrates unencrypted packet sniffing to visualize how usernames/passwords can be intercepted in plain text.'
        }
      ],
      architecture: [
        { label: 'Platform & Tools', value: 'Kali Linux, Metasploit Framework, msfvenom, Wireshark, isolated hypervisors.' }
      ],
      links: [],
      acknowledgements: {}
    }
  },
  {
    badge: 'badge-java', badgeLabel: 'Java',
    title: 'LAN-Based Polling & Voting System',
    desc: 'Secure networked polling application using Java multi-threading for concurrent client handling. High-availability socket communication across multiple Linux VM hosts with low-latency guarantees.',
    tags: ['Java', 'Multi-threading', 'Socket IO', 'Linux VM'],
    emoji: '🗳️',
    delay: '0.25s',
    details: {
      overview: 'Distributed systems require robust synchronization and fault tolerance. This project is a multi-client polling network engineered in Java, designed to handle concurrent connections over local area networks with strict data consistency and low latencies.',
      keyComponents: [
        {
          title: 'Multi-threaded Server',
          desc: 'Concurrently handles hundreds of socket connections utilizing Java thread pools and synchronized database access locks.'
        },
        {
          title: 'Admin Console',
          desc: 'Visual dashboard showing live tallying of votes and connection metrics.'
        }
      ],
      architecture: [
        { label: 'Language & Networking', value: 'Java SE, custom Socket IO protocols, multi-threading APIs.' },
        { label: 'Deployment', value: 'Multiple Linux VM hosts with simulated network partitions.' }
      ],
      links: [],
      acknowledgements: {}
    }
  },
  {
    badge: 'badge-medical', badgeLabel: 'Medical',
    title: 'Endoscopy Media Management Software',
    desc: 'Windows desktop application (.NET 9.0 / WPF) for biomedical clients capturing live video feeds via OpenCV. SQLite persistence layer maps captured media to patient profiles with full CRUD.',
    tags: ['C#', 'WPF', 'OpenCV', 'SQLite', '.NET 9.0'],
    image: 'project-medical',
    emoji: '🩺',
    delay: '0.3s',
    details: {
      overview: 'Surgical teams need clean, high-performance tools to capture and label diagnostic media. This application enables medical professionals to interface with endoscopic cameras, record HD streams, capture still frames, and manage patient profiles with SQLite persistence.',
      keyComponents: [
        {
          title: 'DirectVideo Feed',
          desc: 'Low-latency video capture library wrapping OpenCV for WPF.'
        },
        {
          title: 'Patient Database',
          desc: 'Relational schema mapping video/photo timestamps to encrypted patient records.'
        }
      ],
      architecture: [
        { label: 'Framework', value: 'C# .NET 9.0, WPF (Windows Presentation Foundation) with MVVM pattern.' },
        { label: 'Database & Libraries', value: 'OpenCV (EmguCV), SQLite DB for patient data management.' }
      ],
      links: [],
      acknowledgements: {}
    }
  },
  {
    badge: 'badge-fullstack', badgeLabel: 'Cloud',
    title: 'Cloud-Native DevOps Task Manager',
    desc: 'Full-stack MERN task manager demonstrating cloud-native deployment. Automated CI/CD via Jenkins, GitHub Webhooks, and Terraform for AWS EC2 provisioning — patterns applicable to scalable IoT backends.',
    tags: ['MERN', 'Jenkins', 'Terraform', 'AWS EC2'],
    image: 'project-devops',
    emoji: '☁️',
    delay: '0.35s',
    details: {
      overview: 'Modern application scaling depends on infrastructure as code and automated deployment pipelines. This project demonstrating DevOps best practices automates provisioning environments and scales a full-stack MERN (MongoDB, Express, React, Node) application.',
      keyComponents: [
        {
          title: 'CI/CD Pipeline',
          desc: 'Automated builds, unit tests, and Docker image pushes triggered via GitHub webhooks on Jenkins.'
        },
        {
          title: 'Infrastructure Code',
          desc: 'Terraform scripts configuring virtual private clouds, security groups, and EC2 instances dynamically.'
        }
      ],
      architecture: [
        { label: 'Technologies', value: 'AWS, Docker, Jenkins, Terraform, MongoDB, Express, React, Node.' }
      ],
      links: [],
      acknowledgements: {}
    }
  }
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

function ProjectModal({ project, onClose }) {
  const videoSrc = VIDEO_MAP[project.video]
  const imageSrc = IMAGE_MAP[project.image]
  const details = project.details || { overview: project.desc }
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => {
    if (!project.gallery) return
    setCurrentSlide((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    if (!project.gallery) return
    setCurrentSlide((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1))
  }

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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="modal-media-header">
          {project.gallery && project.gallery.length > 0 ? (
            <div className="modal-gallery-slider">
              <div className="modal-slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex', width: '100%', height: '100%', transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' }}>
                {project.gallery.map((imgSrc, i) => (
                  <div key={i} className="modal-slider-slide" style={{ flex: '0 0 100%', width: '100%', height: '100%' }}>
                    <img src={imgSrc} alt={`${project.title} - Slide ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                ))}
              </div>
              
              {project.gallery.length > 1 && (
                <>
                  <button className="modal-slider-prev" onClick={(e) => { e.stopPropagation(); prevSlide(); }} aria-label="Previous image">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button className="modal-slider-next" onClick={(e) => { e.stopPropagation(); nextSlide(); }} aria-label="Next image">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                  
                  <div className="modal-slider-dots">
                    {project.gallery.map((_, i) => (
                      <button 
                        key={i} 
                        className={`modal-slider-dot ${currentSlide === i ? 'active' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : videoSrc ? (
            <video src={videoSrc} autoPlay muted loop playsInline controls />
          ) : imageSrc ? (
            <img src={imageSrc} alt={project.title} />
          ) : (
            <div className="modal-media-placeholder">{project.emoji}</div>
          )}
        </div>

        <div className="modal-header-info">
          <span className={`project-badge ${project.badge}`}>{project.badgeLabel}</span>
          <h2 className="modal-title">{project.title}</h2>
        </div>

        <div className="modal-body-layout">
          <section className="modal-sec">
            <h3 className="modal-sec-title">Project Overview</h3>
            <p className="modal-text">{details.overview}</p>
          </section>

          {details.keyComponents && details.keyComponents.length > 0 && (
            <section className="modal-sec">
              <h3 className="modal-sec-title">Key Components</h3>
              <div className="modal-components-list">
                {details.keyComponents.map((comp, i) => (
                  <div key={i} className="modal-component-card">
                    <h4 className="modal-component-title">{comp.title}</h4>
                    <p className="modal-text">{comp.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="modal-sec">
            <h3 className="modal-sec-title">Technologies</h3>
            <div className="project-tags">
              {project.tags.map(t => (
                <span key={t} className="project-tag">{t}</span>
              ))}
            </div>
          </section>

          {details.architecture && details.architecture.length > 0 && (
            <section className="modal-sec">
              <h3 className="modal-sec-title">Technical Architecture</h3>
              <div className="modal-architecture-list">
                {details.architecture.map((arch, i) => (
                  <div key={i} className="modal-arch-item">
                    <div className="modal-arch-label">{arch.label}</div>
                    <div className="modal-arch-val">{arch.value}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {details.acknowledgements && (details.acknowledgements.supervisors || details.acknowledgements.team) && (
            <section className="modal-sec">
              <h3 className="modal-sec-title">Acknowledgements</h3>
              <div className="modal-ack-list">
                {details.acknowledgements.supervisors && (
                  <div className="modal-ack-item">
                    <div className="modal-ack-label">Supervisors</div>
                    <div className="modal-ack-val">{details.acknowledgements.supervisors}</div>
                  </div>
                )}
                {details.acknowledgements.team && (
                  <div className="modal-ack-item">
                    <div className="modal-ack-label">Development Team</div>
                    <div className="modal-ack-val">{details.acknowledgements.team}</div>
                  </div>
                )}
              </div>
            </section>
          )}

          {details.links && details.links.length > 0 && (
            <section className="modal-sec">
              <h3 className="modal-sec-title">Links</h3>
              <div className="modal-links-list">
                {details.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="modal-link-btn">
                    {link.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

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
          <div 
            key={p.title} 
            className="project-card reveal from-up" 
            style={{ transitionDelay: p.delay, cursor: 'pointer' }}
            onClick={() => setSelectedProject(p)}
          >
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

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}

