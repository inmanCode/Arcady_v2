import { Container, Title, Content } from './styles/Tech';
import Typewriter from 'typewriter-effect';
import { render } from 'storyblok-rich-text-react-renderer';

const TechSection = ({ blok }) => {
  console.log('tech', blok);
  return (
    <Container id='readmore'>
      {blok?.grid
        .filter((item) => item.component === 'Title')
        .map((item, i) => (
          <Title key={i}>
            {item.title}
            <span>
              <Typewriter
                options={{
                  strings: [
                    'azur.',
                    '.Net core.',
                    'webpack.',
                    'git.',
                    'react.',
                    'typescript.',
                    'docker.',
                    'agil.',
                    'software.',
                    'angular.',
                    "API's.",
                    'Dev Ops.',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </Title>
        ))}
      <Content>
        {blok?.grid
          .filter((item) => item.component === 'rich_text')
          .map((item, i) => (
            <p key={i}>{render(item.rich_text.content[0].content[0].text)}</p>
          ))}
      </Content>
    </Container>
  );
};

export default TechSection;
