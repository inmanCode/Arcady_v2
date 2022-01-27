import styled, { keyframes, css } from 'styled-components'

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
const matrixA = keyframes`
    from{
      transform: matrix(1, 0, 0, 1, 0, 100);
    }
    to {
      transform: matrix(1, 0, 0, 1, 0, 0);
    }
`
const BtnA = keyframes`
    0%{
      transform: matrix(1, 0, 0, 1, 0, 100);
    }
    50% {
      transform: matrix(1, 0, 0, 1, 0, -10);
    }
    100% {
      transform: matrix(1, 0, 0, 1, 0, 0);
    }
`
const clipPathA = keyframes`
    from{
      clip-path: polygon(0% 100%, 0% 100%, 0% 0%, 0% 0%);
    }
    to {
      clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%);
      }
`
const clipPathBgA = keyframes`
    from{
      clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%);
    }
    to {
      clip-path: polygon(100% 100%, 100% 100%, 100% 0%, 100% 0%);
      }
`
const VisbilityA = keyframes`
    from{
      visibility: hidden;
        }
    to {
      visibility: visible
            }
`
const Matrixanimation = props =>
     css`
       ${matrixA} .3s forwards ${props.i}s ;
`
const animation = props =>
     css`
       ${clipPathA} .5s forwards ${props.i}s ;
`
const OverLayanimation = props =>
     css`
       ${clipPathBgA} .3s forwards 2.6s ;
`
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
    position: relative;
    width:fit-content;
    visibility: hidden;
    animation: ${VisbilityA} .3s forwards 2.1s;
`
export const Icon = styled.a`
    position: absolute;
    left: 50%;
    top: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${chevAnimation} infinite 2s;
    cursor: pointer;
`;


export const MetaMaskContainer = styled.div`
    overflow: hidden;
    `
export const RevealMask = styled.div`
    transform: matrix(1, 0, 0, 1, 0, 1000);
    animation: ${Matrixanimation};
  `
export const RevealText = styled.div`
    position: relative;
    color: #8f8f8f;
    font-size: 3em;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    line-height: 1.2;
`
export const RevealTextInline = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    line-height: 1.2;
    clip-path: polygon(0% 100%, 0% 100%, 0% 0%, 0% 0%);
    animation: ${animation};
`
export const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  width:100%;
  height:100%;
  clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%);
  animation: ${OverLayanimation};
`
export const Btn = styled.div`
    height: 40px;
    line-height: 40px;
    font-family: "Montserrat";
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0 40px;
    color: #fff;
    text-transform: uppercase;
    background-color: #00a667;
    border-radius: 20px;
    border: 0;
    outline: 0;
    cursor: pointer;
    text-decoration: none;
    transition: background-color .2s ease;
    display: inline-block;
    white-space: nowrap;
    -webkit-appearance: none;
    align-self: flex-start;
    margin-top: 40px;
    transform: matrix(1, 0, 0, 1, 0, 100);
    animation: ${BtnA} 1s forwards 2.8s;
`