export default function Button({ btnText, handleClick }) {
  return (
    <button className="btn" onClick={handleClick}>{btnText}</button>
  )
}