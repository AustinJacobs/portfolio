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
import logo from '../assets/bird_logo_color.png';
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

    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;

    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
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
              <Image className='logo' width={50} src={logo} alt='Logo Image' />
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
          <Grid>
            <Flex justifySelf='center' alignSelf='center'>
              <NavLink className='nav-a' onClick={() => closeMenu()} to='/blog'>
                <Text h1>Blog</Text>
              </NavLink>
            </Flex>
          </Grid>
        </NavOverlayGrid>
      </NavOverlay>
    </NavContainer>
  );
}

export default Navigation;
