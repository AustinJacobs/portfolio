import React, { useState, useEffect, useCallback } from 'react';
import { Text, Image, Button, Link } from '@nextui-org/react';
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
import { motion } from 'framer-motion';

function Home() {

const ButtonContainer = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  justify-items: center;

  @media only screen and (min-width: 992px) {
    justify-items: left;
  }
`;

const HomeTopGrid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  margin: 150px 1.5em 0 1.5em;
  text-align: center;
  align-items: center;

  @media only screen and (min-width: 992px) {
    height: 100vh;
    grid-template-columns: 1fr 55%;
    margin: 0 100px 0 100px;
    text-align: left;
  }
`;

const HomeAboutGrid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  margin: 100px 1.5em 0 1.5em;
  text-align: center;

  @media only screen and (min-width: 992px) {
    grid-template-columns: 55% 1fr;
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <Text
              css={{ color: '#FF7900', lineHeight: '1.15' }}
              size='3em'
              weight='normal'>
              Hello,
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <Text
              css={{ color: '#3f3d54', lineHeight: '1.15' }}
              size='4em'
              weight='extrabold'>
              I am Austin Jacobs.
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <Text
              size='2em'
              weight='normal'
              css={{ lineHeight: '1', marginTop: '10px' }}>
              Full Stack Web Developer
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <HorizontalRule />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <ButtonContainer>
              <Link href='/work'>
                <Button
                  size='md'
                  css={{
                    color: '#ffffff',
                    backgroundColor: '#3f3d54',
                    zIndex: '1',
                  }}>
                  View Work
                </Button>
              </Link>
            </ButtonContainer>
          </motion.div>
        </TitleContainer>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}>
          <TopImageContainer>
            <Image
              className='programmer-img'
              src={programmer}
              alt='Programmer Illustration'
            />
          </TopImageContainer>
        </motion.div>
      </HomeTopGrid>
      <HomeAboutGrid>
        <AboutTextContainer>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <Text
              css={{ color: '#3f3d54', lineHeight: '1.15' }}
              size='4em'
              weight='extrabold'>
              About Me
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <HorizontalRule />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <Text size='1em' weight='normal' css={{ textRendering: 'auto' }}>
              I began programming just about 4 years ago after I decided that I
              no longer wanted to become an architect. I first learned
              JavaScript and simple HTML. This was enough to spark my interest
              in building websites.
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <Text
              size='1em'
              weight='normal'
              css={{ textRendering: 'auto', marginTop: '1em' }}>
              I am a husband and (Paw)ther. In my free time I participate in
              archery competitions, and many other outdoor activities.
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <Text
              size='1em'
              weight='normal'
              css={{ textRendering: 'auto', marginTop: '1em' }}>
              When it comes to learning code, I am most efficient at teaching
              myself. However, I am currently a university student studying Web
              Design & Development. I will graduate in the spring of 2023. I
              currently intern for{' '}
              <a href='https://leisuretimeinc.com/about-us'>
                <Text span css={{ color: '#FF7900' }}>
                  Leisure Time Inc.
                </Text>
              </a>
            </Text>
          </motion.div>
        </AboutTextContainer>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}>
          <AboutImageContainer>
            <Image className='hello-img' src={hello} alt='Hello Illustration' />
          </AboutImageContainer>
        </motion.div>
      </HomeAboutGrid>
    </div>
  );
}

export default Home;
