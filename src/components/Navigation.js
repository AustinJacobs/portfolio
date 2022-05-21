import React from 'react';
import { NavLink } from 'react-router-dom';
import Grid from '../components/styles/Grid';
import Box from '../components/styles/Box';
import { Text } from '@nextui-org/react';
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
      NAVIGATION
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
    </React.Fragment>
  );
}

export default Navigation;
