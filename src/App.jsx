import { useEffect, useRef, useState } from 'react'
import Nav from './components/Nav'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import ParticleCanvas from './components/ParticleCanvas'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Leadership from './components/Leadership'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [scrollTop, setScrollTop] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrollTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.12 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [loaded])

  // Skill bars
  useEffect(() => {
    const bars = document.querySelectorAll('.skill-bar-fill')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.width + '%'
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.3 })
    bars.forEach(b => obs.observe(b))
    return () => obs.disconnect()
  }, [loaded])

  return (
    <>
      <Cursor />
      <Loader hidden={loaded} />
      <ParticleCanvas />
      <div className="wrapper">
        <Nav />
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Leadership />
        <Certifications />
        <Contact />
        <Footer />
      </div>
      <button
        id="scroll-top"
        className={scrollTop ? 'visible' : ''}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >↑</button>
    </>
  )
}
