export default function Button({ btnText, handleClick }) {
  return (
    <button onClick={handleClick}>{btnText}</button>
  )
}