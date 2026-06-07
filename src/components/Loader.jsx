export default function Loader({ hidden }) {
  return (
    <div id="loader" className={hidden ? 'hidden' : ''}>
      <div className="loader-logo">DWP</div>
      <div className="loader-bar-wrap"><div className="loader-bar" /></div>
      <div className="loader-text">Initialising systems…</div>
    </div>
  )
}
