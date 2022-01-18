import { Container, InnerContainer, Title, Images } from './styles/Clients';

const ClientsSection = ({ blok }) => {
  return (
    <Container>
      <InnerContainer>
        <Title>
          Onze klanten.<span> Ook koplopers.</span>
        </Title>
        <p>
          Onze klanten durven te kiezen voor hun ambities. En voor Arcady. Dat
          maakt ons trots. Supertrots.
        </p>
        <Images>
          <img src='https://www.arcady.nl/media/1074/logo-ing.png' alt='' />
          <img src='https://www.arcady.nl/media/1076/logo-engie.png' alt='' />
          <img src='https://www.arcady.nl/media/1073/logo-pwc.png' alt='' />
          <img src='https://www.arcady.nl/media/1078/logo-abn.png' alt='' />
          <img src='https://www.arcady.nl/media/1075/logo-tln.png' alt='' />
        </Images>
        <button>BEKIJK CASES</button>
      </InnerContainer>
    </Container>
  );
};

export default ClientsSection;
