import React, { useState, useEffect } from 'react';
import media from '../assets/media.jpg';
import calculator from '../assets/calculator.jpg';
import tracker from '../assets/tracker.jpg';
import { Text, Image } from '@nextui-org/react';
import styled from 'styled-components';
import {
  compose,
  color,
  space,
  border,
  typography,
  layout,
  grid,
} from 'styled-system';
import programmer from '../assets/undraw_programming_re_kg9v.svg';
import hello from '../assets/undraw_hello_re_3evm.svg';
import HorizontalRule from './styles/HorizontalRule';

const HomeTopGrid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  margin: 150px 1em 0 1em;
  text-align: center;
  align-items: center;

  @media only screen and (min-width: 992px) {
    height: 100vh;
    grid-template-columns: 1fr 1fr;
    margin: 0 100px 0 100px;
    text-align: left;
  }
`;

const HomeAboutGrid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  margin: 100px 1em 0 1em;
  text-align: center;

  @media only screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    margin: 0 100px 0 100px;
    text-align: left;
  }
`;

const TopImageContainer = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  @media only screen and (min-width: 992px) {
    margin: 0;
  }
`;

const TitleContainer = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

`;

const AboutImageContainer = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  @media only screen and (min-width: 992px) {
    margin: 0;
    grid-column: 1/2;
    grid-row: 1/2;
  }
`;

const AboutTextContainer = styled.div`
  ${compose(color, space, border, typography, layout, grid)}
  @media only screen and (min-width: 992px) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`;


function Home() {
  // React hooks used to check the window size.
  const [isMobile, setIsMobile] = useState(false);
  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    handleResize();
  });

  return (
    <div>
      <HomeTopGrid>
        <TitleContainer>
          <Text size='3em' weight='normal'>
            Hello,
          </Text>
          <Text size='4em' weight='extrabold'>
            I am Austin Jacobs.
          </Text>
          <Text size='2em' weight='normal'>
            Frontend Web Developer
          </Text>
          <HorizontalRule />
          <Text size='1em' weight='normal'>
            I am a university student studying Web Design and Development. Right
            now I am an intern at Leisure Time Inc. At the moment I am focusing on
            website design and development in React.js and Next.js.
          </Text>
          {/* {isMobile ? <HorizontalRule /> : ''} */}
        </TitleContainer>
        <TopImageContainer>
          <Image
            className='programmer-img'
            src={programmer}
            alt='Programmer Illustration'
          />
        </TopImageContainer>
      </HomeTopGrid>
      <HomeAboutGrid>
        <AboutTextContainer>
          <Text size='4em' weight='extrabold'>
            About Me
          </Text>
          <HorizontalRule />
          <Text size='1em' weight='normal'>
            I am a university student studying Web Design and Development. Right
            now I am intern at Leisure Time Inc. At the moment I am focusing on
            website design and development in React.js and Next.js.
          </Text>
          {/* {isMobile ? <HorizontalRule /> : ''} */}
        </AboutTextContainer>
        <AboutImageContainer>
          <Image className='hello-img' src={hello} alt='Hello Illustration' />
        </AboutImageContainer>
      </HomeAboutGrid>
    </div>
  );
}

export default Home;
