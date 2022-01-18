import styled, { keyframes } from 'styled-components'

const chevAnimation = keyframes`
  0%,20%,50%,80%,100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(10px);
  }
  60% {
    transform: translateY(3px);
  }
`;

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    box-shadow: inset 0 0 0 2000px rgb(51 49 50 / 30%);
    position: relative;
`;

export const VideoBackground = styled.video`
    position: fixed;
    min-height: 100vh;
    min-width: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    box-shadow: inset 0 0 0 2000px #3331324d;
`;

export const InnerContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    padding-top: 100px;
    color: #fff;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    `;

export const WhiteText = styled.div`
    color: white;
    font-size: 3em;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    line-height: 1.2;
    `
export const GreenText = styled.div`
    color: #00a667;
    font-family: "Montserrat", sans-serif;
    font-size: 2em;
    font-weight: 500;
    line-height: 1.2;
`
export const Icon = styled.a`
    position: absolute;
    height:100%;
    left: 50%;
    top: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${chevAnimation} infinite 2s;
    cursor: pointer;
`;