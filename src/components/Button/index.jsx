export default function Button({ btnText, handleClick, type = "click" }) {
  return (
    <button type={type} className="btn" onClick={handleClick}>{btnText}</button>
  )
}