import {
  Container,
  VideoBackground,
  InnerContainer,
  WhiteText,
  GreenText,
  Icon,
  MetaMaskContainer,
  RevealMask,
  RevealText,
  RevealTextInline,
  Mask,
  Btn,
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
              <MetaMaskContainer key={i}>
                <RevealMask i={i === 0 ? 0.5 : i == 1 ? 0.8 : 1.1}>
                  <RevealText>
                    {render(text.content[0].text)}
                    <RevealTextInline i={i === 0 ? 1.3 : i == 1 ? 1.8 : 2.1}>
                      {render(text.content[0].text)}
                    </RevealTextInline>
                  </RevealText>
                </RevealMask>
              </MetaMaskContainer>
            ))
          )}

        {blok?.grid
          .filter((item) => item.component === 'HBG_RT')
          .map((item, i) =>
            item.HBG_RT?.content.map((text, i) => (
              <MetaMaskContainer key={i}>
                <GreenText key={i} i={i}>
                  {render(text.content[0].text)}
                  <Mask i={i} />
                </GreenText>
              </MetaMaskContainer>
            ))
          )}
        {blok?.grid
          .filter((item) => item.component === 'HBB')
          .map((item, i) => {
            return (
              <MetaMaskContainer key={i}>
                <Link href='#readmore' key={i} passHref>
                  <Btn>{item.HBB.content[0].content[0].text}</Btn>
                </Link>
              </MetaMaskContainer>
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
