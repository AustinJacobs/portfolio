import styled from 'styled-components';
import {
  compose,
  color,
  shadow,
  space,
  border,
  typography,
  layout,
} from 'styled-system';

const Text = styled.p`
  ${compose(color, shadow, space, border, typography, layout)}
  margin: 0;
  padding: 0;
`;

export default Text;