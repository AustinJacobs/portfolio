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

const HorizontalRule = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  width: 100px;
  height: 4px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ff7900;
  border: 0 none;
  margin-top: 1.5em;
  margin-bottom: 1.5em;

  @media only screen and (min-width: 992px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export default HorizontalRule;
