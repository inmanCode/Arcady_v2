import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 200px 0;
  padding-bottom: 100px;
`;
export const InnerContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  p {
    margin-bottom: 40px;
  }
  button {
    height: 40px;
    line-height: 40px;
    font-family: 'Montserrat';
    font-size: 13px;
    padding: 0 20px;
    color: #fff;
    text-transform: uppercase;
    background-color: #00a667;
    border-radius: 20px;
    border: 0;
    outline: 0;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.2s ease;
    display: inline-block;
    white-space: nowrap;
    -webkit-appearance: none;
    font-weight: 700;
    &:hover {
      background-color: #008552;
    }
  }
`;
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  span {
    color: #00a667;
  }
`;
export const Images = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 40px;
  flex-wrap: wrap;
  img {
    width: 100px;
  }
`;
