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

const ExperienceTopGrid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  margin: 50px 1em 0 1em;
  text-align: center;
  align-items: center;
`;

const ExperienceMainGrid = styled.div`
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

const SectionHeading = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  font-size: 3em;
  font-weight: bold;
  margin: 50px 0 0 0;

  @media only screen and (min-width: 992px) {
    font-size: 6em;
  }
`;

function Experience() {
  return (
    <div>
      <ExperienceTopGrid>
        <SectionHeading>
          Experience
        </SectionHeading>
      </ExperienceTopGrid>
      <ExperienceMainGrid></ExperienceMainGrid>
    </div>
  );
}

export default Experience;
