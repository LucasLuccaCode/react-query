import { ModalContainer, Content, ButtonClose } from "./styles.js"

export default function Modal({ children, closeModal }) {

  const handleCloseModal = e => {
    const { dataset } = e.target
    const key = Object.keys(dataset)[0]
    if (key === "modal") closeModal()
  }

  return (
    <ModalContainer data-modal onClick={handleCloseModal}>
      <ButtonClose className="c-modal__close" data-modal onClick={handleCloseModal}>
        X
      </ButtonClose>

      <Content className="c-modal__content">
        {children}
      </Content>
    </ModalContainer>
  )
}