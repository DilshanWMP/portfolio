const items = [
  { icon:'⚡', label:'FreeRTOS',   color:'#f59e0b' },
  { icon:'🔩', label:'AVR / ATmega', color:'#06b6d4' },
  { icon:'📡', label:'ESP32',      color:'#4f46e5' },
  { icon:'🔐', label:'I²C / TWI',  color:'#ec4899' },
  { icon:'☁️', label:'AWS EC2',    color:'#f59e0b' },
  { icon:'🐳', label:'Docker',     color:'#06b6d4' },
  { icon:'🔄', label:'Jenkins',    color:'#ec4899' },
  { icon:'📶', label:'Sub-1GHz RF',color:'#4f46e5' },
  { icon:'🧬', label:'OpenCV',     color:'#06b6d4' },
  { icon:'🗄️', label:'PostgreSQL', color:'#4f46e5' },
  { icon:'⚙️', label:'Git / GitHub',color:'#ec4899' },
  { icon:'🌐', label:'FastAPI',    color:'#f59e0b' },
  { icon:'🏗️', label:'Terraform',  color:'#06b6d4' },
  { icon:'🛠️', label:'Kali Linux', color:'#ec4899' },
  { icon:'📟', label:'RFID/NFC',   color:'#4f46e5' },
]

const all = [...items, ...items]

export default function Marquee() {
  return (
    <div id="marquee-section">
      <p className="marquee-label">Technologies &amp; Tools</p>
      <div className="marquee-track">
        {all.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
            <span style={{ color: item.color, fontWeight: 600 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
