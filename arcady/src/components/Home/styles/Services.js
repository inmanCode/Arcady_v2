import styled from 'styled-components'

export const Container = styled.div`
    background-color: white;
    background-image: url('https://www.arcady.nl/images/bg-topleft.png'),
        url('https://www.arcady.nl/images/bg-topright.png'),
        url('https://www.arcady.nl/images/bg-bottomleft.png'),
        url('https://www.arcady.nl/images/bg-bottomright.png');
    background-repeat: no-repeat;
    background-position: 0px -40px, 100% -40px, bottom left, bottom right;
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const IconsContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Button = styled.button`
  margin: 80px 0;
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
`;
export const TitlesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  @media screen and (max-width: 510px) {
    padding: 40px 0;
  }
`;
