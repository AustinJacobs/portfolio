import React from 'react';
import { NavLink } from 'react-router-dom';
import Grid from '../components/styles/Grid';
import Flex from '../components/styles/Flex';
import { Link, Avatar } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';
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
import { SunIcon } from '../assets/SunIcon';
import { MoonIcon } from '../assets/MoonIcon';

function Navigation() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  const NavContainer = styled.div`
    ${compose(color, space, border, typography, layout, grid)}

    margin: 1em 0 1em 0;
  `;

  return (
    <NavContainer>
      <Grid gridTemplateColumns='50px 1fr 1fr 1fr 50px'>
        <Grid gridColumn='1'>
          <Flex justifySelf='center' alignSelf='center'>
            <Avatar text='AJ' size='md' />
          </Flex>
        </Grid>
        <Grid gridColumn='2'>
          <Flex justifySelf='center' alignSelf='center'>
            <Link block color='text' href='/'>
              Home
            </Link>
          </Flex>
        </Grid>
        <Grid gridColumn='3'>
          <Flex justifySelf='center' alignSelf='center'>
            <Link block color='text' href='/experience'>
              Experience
            </Link>
          </Flex>
        </Grid>
        <Grid gridColumn='4'>
          <Flex justifySelf='center' alignSelf='center'>
            <Link block color='text' href='/work'>
              Work
            </Link>
          </Flex>
        </Grid>
        <Grid gridColumn='5'>
          <Flex justifySelf='center' alignSelf='center'>
            <Switch
              bordered
              iconOn={<SunIcon filled />}
              iconOff={<MoonIcon filled />}
              size='sm'
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            />
          </Flex>
        </Grid>
      </Grid>
    </NavContainer>
  );
}

export default Navigation;
