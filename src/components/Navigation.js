import React from 'react';
import { NavLink } from 'react-router-dom';
import Grid from '../components/styles/Grid';
import Flex from '../components/styles/Flex';
import { Text, Image } from '@nextui-org/react';
import styled from 'styled-components';
import { useState } from 'react';
import {
  compose,
  color,
  space,
  border,
  typography,
  layout,
  grid,
} from 'styled-system';
import { Pivot as Hamburger } from 'hamburger-react';
import logo from '../assets/bird-logo-color_adobe_express.svg';
import { motion } from 'framer-motion';

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
  },
};

function Navigation() {
  const NavContainer = styled.div`
    ${compose(color, space, border, typography, layout, grid)}

    margin: 1em 0 1em 0;

    @media only screen and (min-width: 768px) {
      margin-left: 2em;
    }
  `;

  const NavOverlay = styled.div`
    ${compose(color, space, border, typography, layout, grid)}
  `;

  const NavOverlayGrid = styled.div`
    ${compose(color, space, border, typography, layout, grid)}

    display: grid;
    height: 90vh;
    width: 100vw;
    max-width: 100%;

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;

    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }
  `;

  const [isOpen, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <NavContainer>
      <Grid gridTemplateColumns='20px 50px auto 50px 20px'>
        <Grid gridColumn='2'>
          <Flex justifySelf='center' alignSelf='center'>
            <NavLink to='/'>
              <Image
                className='logo'
                width={50}
                src={logo}
                alt='Logo Image'
              />
              {/* <div className='container logo'>
                <motion.svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 100 100'
                  className='item'>
                  <motion.path
                    d='M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z'
                    variants={icon}
                    initial='hidden'
                    animate='visible'
                    transition={{
                      default: { duration: 2, ease: 'easeInOut' },
                      fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                    }}
                  />
                </motion.svg>
              </div> */}
            </NavLink>
          </Flex>
        </Grid>
        <Grid gridColumn='4' className='hamburger'>
          <Flex justifySelf='center' alignSelf='center'>
            <Hamburger size={48} toggled={isOpen} toggle={setOpen} />
          </Flex>
        </Grid>
      </Grid>
      <NavOverlay className={`menuNav ${isOpen ? ' showMenu' : ''}`}>
        <NavOverlayGrid marginTop='50px'>
          <Grid>
            <Flex justifySelf='center' alignSelf='center'>
              <NavLink className='nav-a' onClick={() => closeMenu()} to='/'>
                <Text h1>Home</Text>
              </NavLink>
            </Flex>
          </Grid>
          <Grid>
            <Flex justifySelf='center' alignSelf='center'>
              <NavLink
                className='nav-a'
                onClick={() => closeMenu()}
                to='/experience'>
                <Text h1>Experience</Text>
              </NavLink>
            </Flex>
          </Grid>
          <Grid>
            <Flex justifySelf='center' alignSelf='center'>
              <NavLink className='nav-a' onClick={() => closeMenu()} to='/work'>
                <Text h1>Work</Text>
              </NavLink>
            </Flex>
          </Grid>
        </NavOverlayGrid>
      </NavOverlay>
    </NavContainer>
  );
}

export default Navigation;
