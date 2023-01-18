import styled from "styled-components";

export const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, .6);
`

export const Content = styled.div`
background: var(--primary-color);
padding: 1rem;
border-radius: .5rem;
margin-top: -15vh;
max-width: calc(100% - var(--margin-h) * 2);
`

export const ButtonClose = styled.div`
cursor: pointer;
position: absolute;
top: 1rem;
right: 1rem;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50px;
font-size: .6rem;
font-weight: bold;
color: #aaaab0;
width: 1.3rem;
height: 1.3rem;
border: 1px solid rgba(255, 255, 255, .1);
background: #4a4a50;
transition: .2s linear;

  &:hover {
    background: #7a7a80;
    color: #efefff;
  }
`
