import styled from "styled-components"
import Button from "../../Button"

export const UserContainer = styled.li`
cursor: pointer;
display: flex;
padding: .5rem;
gap: .6rem;
border-radius: .3rem;
background: var(--secondary-color);
box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .1);
transition: .2s linear;

  &:hover {
      background: rgba(255, 255, 255, .2);
  }
`

export const Avatar = styled.img`
width: 4rem;
height: 4rem;
border-radius: .2rem;
`

export const Info = styled.div`
display: flex;
flex-direction: column;
height: 100%;
gap: .5rem;
justify-content: space-between;
overflow: hidden;
`

export const Title = styled.h2`
font-size: 1rem;
text-transform: capitalize;
`

export const Actions = styled.div`
display: flex;
/* flex-wrap: wrap; */
gap: .5rem;
`

export const ActionButton = styled(Button)`
`