import React from 'react';
import { NavLink } from 'react-router-dom';
import Grid from '../components/styles/Grid';
import Flex from '../components/styles/Flex';
import Box from '../components/styles/Box';
import { Text, Link, Avatar } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';

function Navigation() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    // <div className='navigation'>
    //   <nav className='navbar navbar-expand navbar-dark bg-dark'>
    //     <div className='container'>
    //       <NavLink className='navbar-brand' to='/'>
    //         React Multi-Page Website
    //       </NavLink>
    //       <div>
    //         <ul className='navbar-nav ml-auto'>
    //           <li className='nav-item'>
    //             <NavLink className='nav-link' to='/'>
    //               Home
    //               <span className='sr-only'>(current)</span>
    //             </NavLink>
    //           </li>
    //           <li className='nav-item'>
    //             <NavLink className='nav-link' to='/about'>
    //               About
    //             </NavLink>
    //           </li>
    //           <li className='nav-item'>
    //             <NavLink className='nav-link' to='/contact'>
    //               Contact
    //             </NavLink>
    //           </li>
    //           <li className='nav-item'>
    //             <NavLink className='nav-link' to='/blog'>
    //               Blog
    //             </NavLink>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <React.Fragment>
        <Grid m='1em' gridTemplateColumns='50px 20px 1fr 1fr 1fr 1fr'>
          <Grid gridColumn='1'>
            <Flex justifySelf='center' alignSelf='center'>
              <Avatar text='AJ' size='md' />
            </Flex>
          </Grid>
          <Grid gridColumn='3'>
            <Flex justifySelf='center' alignSelf='center'>
              <Link block color='text' href='/'>
                Home
              </Link>
            </Flex>
          </Grid>
          <Grid gridColumn='4'>
            <Flex justifySelf='center' alignSelf='center'>
              <Link block color='text' href='/about'>
                About
              </Link>
            </Flex>
          </Grid>
          <Grid gridColumn='5'>
            <Flex justifySelf='center' alignSelf='center'>
              <Link block color='text' href='/experience'>
                Experience
              </Link>
            </Flex>
          </Grid>
          <Grid gridColumn='6'>
            <Flex justifySelf='center' alignSelf='center'>
              <Link block color='text' href='/work'>
                Work
              </Link>
            </Flex>
          </Grid>
          <Grid gridColumn='6'>
            <Flex justifySelf='right' alignSelf='center'>
              <Switch
                size='sm'
                checked={isDark}
                onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
              />
            </Flex>
          </Grid>
        </Grid>
    </React.Fragment>
  );
}

export default Navigation;
