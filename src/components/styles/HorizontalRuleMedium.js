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

const HorizontalRuleSmall = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  width: 100px;
  height: 4px;
  background-color: #ff7900;
  border: 0 none;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 3px;
  align-self: center;
`;

export default HorizontalRuleSmall;
