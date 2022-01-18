import styled from 'styled-components';

const IconsCol = ({ icon, title, content }) => {
  return (
    <Container>
      <Img>
        <img src={icon} alt={title} />
      </Img>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
};

export default IconsCol;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  padding-top: 200px;
  @media screen and (max-width: 1000px) {
    padding-top: 50px;
  }
`;
const Img = styled.div`
  width: 90px;
  height: 90px;
  border: 3px solid #00a667;
  border-radius: 90px;
  margin: 0 auto 40px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 50%;
  }
`;
const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333132;
  font-family: 'Montserrat';
  text-align: center;
  @media screen and (min-width: 1300px) {
    white-space: nowrap;
  }
`;
const Content = styled.p`
  line-height: 1.8;
  font-family: 'Montserrat';
  margin-bottom: 20px;
  font-size: 16px;
  text-align: center;
`;
