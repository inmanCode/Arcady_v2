import styled from 'styled-components'

export const Container = styled.div`
    background: #fff;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 1000px) {
        font-size: 2em;
    }
`
export const Title = styled.h1`
    color: #00a667;
    font-size: 5rem;
    padding: 20px 0;
    padding-top: 40px;
    display: flex;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    width: 40%;
    margin: 0 auto;
    white-space: nowrap;
    @media screen and (max-width: 1200px) {
        flex-direction: column;
    }
    @media screen and (max-width: 1000px) {
        font-size: 2rem;
    }
    span {
        color: #333132;
        font-family: 'Montserrat', sans-serif;
        text-transform: capitalize;
        margin-left: 5px;
        font-size: 5rem;
        @media screen and (max-width: 1000px) {
        font-size: 2rem;
        }
    }
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 50%;
    margin: 0 auto;
    font-size: 23px;
    line-height: 1.8;
    color: #333132;
    font-family: 'Montserrat', sans-serif;
    p {
    padding: 20px 0;
    }
    @media screen and (max-width: 1000px) {
    font-size: 16px;
    }
`;
