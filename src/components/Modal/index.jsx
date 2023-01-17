import "./styles.css"

export default function Modal({ children, closeModal }) {
  const handleCloseModal = e => {
    const { dataset } = e.target
    const key = Object.keys(dataset)[0]
    if (key === "modal") closeModal()
  }

  return (
    <div className="c-modal" data-modal onClick={handleCloseModal}>
      <button className="c-modal__close" data-modal onClick={handleCloseModal}>X</button>
      <div className="c-modal__content">
        {children}
      </div>
    </div>
  )
}