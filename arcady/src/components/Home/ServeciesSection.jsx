import {
  Container,
  IconsContainer,
  Button,
  TitlesContainer,
} from './styles/Services';
import IconsCol from './components/IconsCol';
import TitleCol from './components/TitleCol';

const ServeciesSection = ({ blok }) => {
  console.log('cses', blok);

  return (
    <Container>
      <Container>
        <IconsContainer>
          {blok?.grid
            .filter((item) => item.component === 'ServiceColumns')
            .map((item) =>
              item.grid.map((item, i) => {
                const icon = item.grid
                  .filter((item) => item.component === 'Image')
                  .map((item, i) => item.Image.filename);
                const content = item.grid
                  .filter((item) => item.component === 'Content')
                  .map((item, i) => item.content);
                const title = item.grid
                  .filter((item) => item.component === 'Title')
                  .map((item, i) => item.title);
                return (
                  <IconsCol
                    key={i}
                    icon={icon}
                    content={content}
                    title={title}
                  />
                );
              })
            )}
        </IconsContainer>
        <Button>Lees verder</Button>
        <TitlesContainer>
          {blok?.grid
            .filter((item) => item.component === 'BlogColumns')
            .map((item) =>
              item.grid.map((item, i) => {
                const img = item?.grid
                  .filter((item) => item?.component === 'Image')
                  .map((item, i) => item.Image.filename);
                const btn = item.grid
                  .filter((item) => item.component === 'rich_text')
                  .map((item, i) => item.rich_text.content[0].content[0].text);
                const title = item.grid
                  .filter((item) => item.component === 'Title')
                  .map((item, i) => item.title);
                return (
                  <TitleCol key={i} title={title} image={img} button={btn} />
                );
              })
            )}
        </TitlesContainer>
      </Container>
    </Container>
  );
};

export default ServeciesSection;
