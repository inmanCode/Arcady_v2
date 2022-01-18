import styled from 'styled-components';

const TitleCol = ({ title, image, button }) => {
  return (
    <Container image={image}>
      <div>{title}</div>
      <button>{button}</button>
    </Container>
  );
};

export default TitleCol;
const Container = styled.div`
  background-image: url('${({ image }) => image}');
  height: 350px;
  width: 550px;
  background-size: 160%;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 10px 20px;
  cursor: pointer;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: inset 0 0 0 2000px rgb(51 49 50 / 90%),
      0 10px 30px 0 rgb(0 0 0 / 30%);
    background-size: 180%;
    transform: translateY(-10px);
  }
  transition: all 0.2s ease-in;

  div {
    color: #fff;
    text-align: center;
    text-decoration: none;
    display: block;
    padding-bottom: 50px;
    font-size: 2rem;
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
  @media screen and (max-width: 1200px) {
    height: 250px;
    width: 450px;
  }
  @media screen and (max-width: 510px) {
    height: 250px;
    width: 250px;
    padding: 0;
  }
`;
