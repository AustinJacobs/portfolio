import React from 'react';
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
import { Text } from '@nextui-org/react';

function Work() {
  const WorkMainGrid = styled.div`
    ${compose(color, space, border, typography, layout, grid)}

    display: grid;
    grid-template-columns: 1fr;
    margin: 50px 1.5em 50px 1.5em;
    text-align: center;
    align-items: center;

    @media only screen and (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr;
      margin: 50px 100px 50px 100px;
      text-align: left;
    }
  `;

  return (
    <div>
      <WorkMainGrid></WorkMainGrid>
    </div>
  );
}

export default Work;
