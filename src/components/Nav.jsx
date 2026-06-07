import { useState } from 'react'

const links = ['about','skills','projects','education','leadership','contact']

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav>
      <div className="nav-logo">DILSHAN WMP</div>
      <ul className={`nav-links${open ? ' open' : ''}`} id="navLinks">
        {links.map(l => (
          <li key={l}>
            <a href={`#${l}`} onClick={() => setOpen(false)}>
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <button className="nav-hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}
