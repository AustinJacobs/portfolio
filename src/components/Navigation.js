import React from 'react';
import { NavLink } from 'react-router-dom';
import Grid from '../components/styles/Grid';
import Flex from '../components/styles/Flex';
import { Text } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';
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
import { SunIcon } from '../assets/SunIcon';
import { MoonIcon } from '../assets/MoonIcon';
import { Pivot as Hamburger } from 'hamburger-react';

function Navigation() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  const NavContainer = styled.div`
    ${compose(color, space, border, typography, layout, grid)}

    margin: 1em 0 1em 0;
  `;

  const NavOverlay = styled.div`
    ${compose(color, space, border, typography, layout, grid)}
  `;

  const NavOverlayGrid = styled.div`
    ${compose(color, space, border, typography, layout, grid)}

    display: grid;
    height: 85vh;
    width: 100vw;
    max-width: 100%;
  `;

  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <NavContainer>
      <Grid gridTemplateColumns='1fr 1fr 1fr 1fr 1fr'>
        <Grid gridColumn='1'>
          <Flex justifySelf='center' alignSelf='center'>
            <Switch
              css={{ p: 0 }}
              iconOn={<SunIcon filled />}
              iconOff={<MoonIcon filled />}
              size='md'
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            />
          </Flex>
        </Grid>
        <Grid gridColumn='3'>
          <Flex justifySelf='center' alignSelf='center'>
            <Text size='1.3em'>Austin Jacobs</Text>
          </Flex>
        </Grid>
        <Grid gridColumn='5'>
          <Flex justifySelf='center' alignSelf='center'>
            <Hamburger rounded toggled={navbarOpen} toggle={setNavbarOpen} />
          </Flex>
        </Grid>
      </Grid>
      <NavOverlay className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <NavOverlayGrid>
          <Grid gridColumn='1'>
            <Flex justifySelf='center' alignSelf='center'>
              <NavLink onClick={() => closeMenu()} color='text' to='/'>
                Home
              </NavLink>
            </Flex>
          </Grid>
          <Grid gridColumn='2'>
            <Flex justifySelf='center' alignSelf='center'>
              <NavLink
                onClick={() => closeMenu()}
                color='text'
                to='/experience'>
                Experience
              </NavLink>
            </Flex>
          </Grid>
          <Grid gridColumn='3'>
            <Flex justifySelf='center' alignSelf='center'>
              <NavLink onClick={() => closeMenu()} color='text' to='/work'>
                Work
              </NavLink>
            </Flex>
          </Grid>
        </NavOverlayGrid>
      </NavOverlay>
    </NavContainer>
  );
}

export default Navigation;
