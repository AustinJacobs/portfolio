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

const Grid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}
  display: grid;
`;

export default Grid;
