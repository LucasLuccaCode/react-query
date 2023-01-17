import styled, { keyframes } from "styled-components";

export const LoadingContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding: 1rem 0;

`

const SpinningAnimation = keyframes`
to {
  transform: rotate(360deg);
}
`

export const Spinning = styled.div`
width: 1.2rem;
height: 1.2rem;
border-radius: 50px;
border: .15rem solid rgba(255, 255, 255, .2);
border-top: .15rem solid var(--details-color);
animation: ${SpinningAnimation} 1s linear infinite;
`
