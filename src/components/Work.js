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
import { Grid } from '@nextui-org/react';

function Work() {
  const WorkMainGrid = styled.div`
    ${compose(color, space, border, typography, layout, grid)}


  `;

  return (
    <div>
      <WorkMainGrid></WorkMainGrid>
    </div>
  );
}

export default Work;
