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

    grid-template-columns: 1fr 1fr 1fr;

    @media only screen and (max-width: 650px) {
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
      <Grid gridTemplateColumns='1fr 1fr 1fr 1fr 1fr'>
        <Grid gridColumn='1'>
          <Flex justifySelf='center' alignSelf='center'>
            <Switch
              css={{ p: 0 }}
              iconOn={<SunIcon filled />}
              iconOff={<MoonIcon filled />}
              size='lg'
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            />
          </Flex>
        </Grid>
        <Grid gridColumn='3'>
          <Flex justifySelf='center' alignSelf='center'>
            <Text h2>AJ</Text>
          </Flex>
        </Grid>
        <Grid gridColumn='5'>
          <Flex justifySelf='center' alignSelf='center'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </Flex>
        </Grid>
      </Grid>
      <NavOverlay className={`menuNav ${isOpen ? ' showMenu' : ''}`}>
        <NavOverlayGrid>
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
