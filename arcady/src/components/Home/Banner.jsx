import {
  Container,
  VideoBackground,
  InnerContainer,
  WhiteText,
  GreenText,
  Icon,
} from './styles/index';
import Button from '../../../styles/globalComponents/Button';
import Link from 'next/link';
import { sbEditable } from '@storyblok/storyblok-editable';
import { render } from 'storyblok-rich-text-react-renderer';
import { GoChevronDown } from 'react-icons/go';

const Banner = ({ blok }) => {
  return (
    <Container>
      {blok?.grid
        .filter((item) => item.component === 'BackgroundVideo')
        .map((item, i) => (
          <VideoBackground
            playsInline
            autoPlay
            muted
            loop
            key={i}
            {...sbEditable(item)}
          >
            <source type='video/mp4' src={item.grid.filename} />
          </VideoBackground>
        ))}
      <InnerContainer>
        {blok?.grid
          .filter((item) => item.component === 'HBW_RT')
          .map((item, i) =>
            item.HBW_RT?.content.map((text, i) => (
              <WhiteText key={i}>{render(text.content[0].text)}</WhiteText>
            ))
          )}
        {blok?.grid
          .filter((item) => item.component === 'HBG_RT')
          .map((item, i) =>
            item.HBG_RT?.content.map((text, i) => (
              <GreenText key={i}>{render(text.content[0].text)}</GreenText>
            ))
          )}
        {blok?.grid
          .filter((item) => item.component === 'HBB')
          .map((item, i) => {
            return (
              <Link href='#readmore' key={i} passHref>
                <Button>{item.HBB.content[0].content[0].text}</Button>
              </Link>
            );
          })}
        <Icon href='#readmore'>
          <GoChevronDown size='5em' color='#00a667' />
        </Icon>
      </InnerContainer>
    </Container>
  );
};

export default Banner;
