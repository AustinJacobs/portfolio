import React, { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import Grid from '../components/styles/Grid';
import Flex from '../components/styles/Flex';
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
import { Pivot as Hamburger } from 'hamburger-react';
import logo from '../assets/bird_logo_color.png';
import { DocumentIcon } from './DocumentIcon';
import { HamburgerMinus } from 'react-animated-burgers';

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
    height: 80vh;
    width: 100vw;
    max-width: 100%;
    margin-top: 150px;

    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;

    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
    }
  `;

  const FixedButtonDisplay = styled.div`
    ${compose(color, space, border, typography, layout, grid)}

    position: fixed;
    top: 33px;
    right: 130px;
  `;

  const openPDF = () => {
    window.open(
      'https://drive.google.com/file/d/10pnBr2oqo6Do4yiNAsVJ434myx_eMZjR/view?usp=sharing',
      '_blank',
      'noopener,noreferrer'
    );
  };

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

  const [isActive, setIsActive] = useState(false);

  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    []
  );

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <NavContainer>
      <Flex>
        <NavLink onClick={isActive ? () => closeMenu() : null} to='/'>
          <Image className='logo' width={45} src={logo} alt='Logo Image' />
        </NavLink>
      </Flex>

      <Flex>
        <HamburgerMinus
          buttonWidth={43}
          barColor='#3f3d54'
          {...{ isActive, toggleButton }}
        />
      </Flex>

      <NavOverlay className={`menuNav ${isActive ? ' showMenu' : ''}`}>
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
          {!isMobile ? (
            <FixedButtonDisplay>
              <Link>
                <Button
                  auto
                  onClick={openPDF}
                  icon={<DocumentIcon width={40} />}
                  css={{
                    color: '#ffffff',
                    backgroundColor: '#3F3D54',
                  }}>
                  View Resume
                </Button>
              </Link>
            </FixedButtonDisplay>
          ) : (
            ''
          )}
        </NavOverlayGrid>
      </NavOverlay>
    </NavContainer>
  );
}

export default Navigation;
