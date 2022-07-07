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
import { Image, Text } from '@nextui-org/react';
import study from '../assets/undraw_exams_re_4ios.svg';
import HorizontalRuleMedium from './styles/HorizontalRuleMedium';

const ExperienceMainGrid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  margin: 150px 1.5em 50px 1.5em;
  text-align: center;
  align-items: center;
  justify-items: left;

  @media only screen and (min-width: 768px) {
    margin: 150px 4em 0 4em;
  }

  @media only screen and (min-width: 1300px) {
    margin: 150px 8em 0 8em;
  }
`;

const WrittenExperienceContainer = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  text-align: left;
`;

const ExperienceDisplay = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 120px auto;
  margin: 0 0 50px 0;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 300px 1fr;
  }

  @media only screen and (min-width: 1300px) {
    grid-template-columns: 300px 1fr;
    text-align: left;
  }
`;

const ExperienceDate = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  grid-column: 1/2;
  grid-row: 1/2;
  text-align: left;
`;

const ExperienceText = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  grid-column: 2/3;
  grid-row: 1/2;
  text-align: left;
  padding-left: .5em;
`;

function Experience() {
  return (
    <>
      <ExperienceMainGrid>
        <WrittenExperienceContainer>
          <Text h2>Education & Work Experience</Text>
          <HorizontalRuleMedium />
          <ExperienceDisplay>
            <ExperienceDate>
              <Text css={{ color: '#FF7900' }}>Apr. 2022 - Present</Text>
            </ExperienceDate>
            <ExperienceText>
              <Text h4 css={{ color: '#3F3D54' }}>
                Leisure Time Inc.
              </Text>
              <Text>
                I am a Full Stack Web Developer intern for Leisure Time Inc. I
                work on maintaining four websites and I help develop major
                features for web applications that make the buying process
                better for our customers.
              </Text>
            </ExperienceText>
          </ExperienceDisplay>
          <ExperienceDisplay>
            <ExperienceDate>
              <Text css={{ color: '#FF7900' }}>Sept. 2019 - Present</Text>
            </ExperienceDate>
            <ExperienceText>
              <Text h4 css={{ color: '#3F3D54' }}>
                Brigham Young University of Idaho
              </Text>
              <Text>
                I am a university student at Brigham Young University of Idaho
                where I study Computer Science. I will graduate in April 2023
                with a Bachelors Degree in Web Design & Development.
              </Text>
            </ExperienceText>
          </ExperienceDisplay>
        </WrittenExperienceContainer>
      </ExperienceMainGrid>
      {/* <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
        alt='CSS3 Logo'></Image> */}
    </>
  );
}

export default Experience;
