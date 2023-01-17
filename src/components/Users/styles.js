import styled from "styled-components"

export const UsersContainer = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, auto));
gap: .7rem;
margin-top: 1rem;
`

export const Buttons = styled.div`
margin-top: 1rem;
display: flex;
justify-content: center;
gap: 1rem;
`

export const ViewMore = styled.button`
display: block;
margin: 0 auto;
margin-top: 1rem;
width: 30%;
`

export const Message = styled.p`
text-align: center;
margin: 0 auto;
margin-top: 1rem;
width: max-content;
border-radius: .2rem;
padding: .5rem;
font-size: .8rem;
background: var(--secondary-color);
`