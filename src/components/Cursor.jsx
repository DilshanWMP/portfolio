import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot  = useRef(null)
  const ring = useRef(null)
  let mx = 0, my = 0, rx = 0, ry = 0

  useEffect(() => {
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      dot.current.style.left = mx + 'px'
      dot.current.style.top  = my + 'px'
    }
    document.addEventListener('mousemove', onMove)
    let raf
    const anim = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.current.style.left = rx + 'px'
      ring.current.style.top  = ry + 'px'
      raf = requestAnimationFrame(anim)
    }
    raf = requestAnimationFrame(anim)
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <div id="cursor-dot" ref={dot} />
      <div id="cursor-ring" ref={ring} />
    </>
  )
}
