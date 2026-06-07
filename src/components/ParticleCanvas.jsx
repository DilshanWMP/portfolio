import { useEffect, useRef } from 'react'

const COLORS = ['#4f46e5','#ec4899','#06b6d4','#f59e0b']

export default function ParticleCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let W, H, particles = [], raf

    function resize() {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function Particle() {
      this.x  = Math.random() * W; this.y  = Math.random() * H
      this.vx = (Math.random() - 0.5) * 0.6; this.vy = (Math.random() - 0.5) * 0.6
      this.r  = Math.random() * 2 + 1
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
    }
    Particle.prototype.update = function() {
      this.x += this.vx; this.y += this.vy
      if (this.x < 0 || this.x > W) this.vx *= -1
      if (this.y < 0 || this.y > H) this.vy *= -1
    }

    const N = Math.min(90, Math.floor(window.innerWidth * window.innerHeight / 14000))
    for (let i = 0; i < N; i++) particles.push(new Particle())

    function draw() {
      ctx.clearRect(0, 0, W, H)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]; p.update()
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color + '99'; ctx.fill()
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x, dy = p.y - q.y
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < 130) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y)
            const alpha = (1 - dist/130) * 0.25
            ctx.strokeStyle = p.color + Math.round(alpha*255).toString(16).padStart(2,'0')
            ctx.lineWidth = 1; ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf) }
  }, [])

  return <canvas id="particle-canvas" ref={ref} />
}
