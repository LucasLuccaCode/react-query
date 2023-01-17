import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 1rem;
margin: 0 auto;
margin-top: 2rem;
`

export const FormControl = styled.div`
display: flex;
flex-direction: column;
gap: .5rem;
`

export const Input = styled.input`
border: 0;
outline: 0;
background: transparent;
border-radius: .3rem;
font-size: .7rem;
color: #cfcfdf;
border: 2px solid var(--details-color);
padding: .4rem .5rem;

  &:focus {
    background: var(--details-color);
    color: var(--secondary-color);
  }
`