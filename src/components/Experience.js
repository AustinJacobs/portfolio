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
import { Image, Text, Tooltip } from '@nextui-org/react';
import HorizontalRuleMedium from './styles/HorizontalRuleMedium';

const ExperienceMainGrid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  margin: 150px 1.5em 0px 1.5em;
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
  padding-left: 0.5em;
`;

const CodeExperienceContainer = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  text-align: left;
`;

const CodeExperienceIconsGrid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-self: center;
  margin: 8px 0 50px 0;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
  }

  @media only screen and (min-width: 1300px) {
    grid-template-columns: repeat(8, 1fr);
    gap: 40px;
  }
`;

const DesignExperienceContainer = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  text-align: left;
`;

const DesignExperienceIconsGrid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-self: center;
  margin: 8px 0 50px 0;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
  }

  @media only screen and (min-width: 1300px) {
    grid-template-columns: repeat(8, 1fr);
    gap: 40px;
  }
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
        <CodeExperienceContainer>
          <Text h2>Development Languages & Tools</Text>
          <HorizontalRuleMedium />
          <CodeExperienceIconsGrid>
            <Tooltip
              hideArrow
              rounded
              content={'HTML 5'}
              css={{ backgroundColor: '#3f3d54', color: 'white' }}>
              <Image
                width='100px'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                alt='HTML5 Logo'
              />
            </Tooltip>
            <Tooltip
              hideArrow
              rounded
              content={'CSS3'}
              css={{ backgroundColor: '#3f3d54', color: 'white' }}>
              <Image
                width='100px'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
                alt='CSS3 Logo'
              />
            </Tooltip>
            <Tooltip
              hideArrow
              rounded
              content={'Vanilla JavaScript'}
              css={{ backgroundColor: '#3f3d54', color: 'white' }}>
              <Image
                width='100px'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                alt='JS Logo'
              />
            </Tooltip>
            <Tooltip
              hideArrow
              rounded
              content={'React.js'}
              css={{ backgroundColor: '#3f3d54', color: 'white' }}>
              <Image
                width='100px'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                alt='React.js Logo'
              />
            </Tooltip>
            <Tooltip
              hideArrow
              rounded
              content={'Next.js'}
              css={{ backgroundColor: '#3f3d54', color: 'white' }}>
              <Image
                width='100px'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
                alt='Next.js Logo'
              />
            </Tooltip>
            <Tooltip
              hideArrow
              rounded
              content={'MySQL'}
              css={{ backgroundColor: '#3f3d54', color: 'white' }}>
              <Image
                width='100px'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
                alt='MySQL Logo'
              />
            </Tooltip>
            <Tooltip
              hideArrow
              rounded
              content={'GraphQL'}
              css={{ backgroundColor: '#3f3d54', color: 'white' }}>
              <Image
                width='100px'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
                alt='GraphQL Logo'
              />
            </Tooltip>
            <Tooltip
              hideArrow
              rounded
              content={'Firebase'}
              css={{ backgroundColor: '#3f3d54', color: 'white' }}>
              <Image
                width='100px'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
                alt='Firebase Logo'
              />
            </Tooltip>
            <Tooltip
              hideArrow
              rounded
              content={'PHP'}
              css={{ backgroundColor: '#3f3d54', color: 'white' }}>
              <Image
                width='100px'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
                alt='PHP Logo'
              />
            </Tooltip>
            <Tooltip
              hideArrow
              rounded
              content={'Docker'}
              css={{ backgroundColor: '#3f3d54', color: 'white' }}>
              <Image
                width='100px'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
                alt='Docker Logo'
              />
            </Tooltip>
            <Tooltip
              hideArrow
              rounded
              content={'Git'}
              css={{ backgroundColor: '#3f3d54', color: 'white' }}>
              <Image
                width='100px'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
                alt='Git Logo'
              />
            </Tooltip>
            <Tooltip
              hideArrow
              rounded
              content={'GitHub'}
              css={{ backgroundColor: '#3f3d54', color: 'white' }}>
              <Image
                width='100px'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
                alt='GitHub Logo'
              />
            </Tooltip>
            <Tooltip
              hideArrow
              rounded
              content={'Node.js'}
              css={{ backgroundColor: '#3f3d54', color: 'white' }}>
              <Image
                width='100px'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                alt='Node.js Logo'
              />
            </Tooltip>
            <Tooltip
              hideArrow
              rounded
              content={'NPM'}
              css={{ backgroundColor: '#3f3d54', color: 'white' }}>
              <Image
                width='100px'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'
                alt='NPM Logo'
              />
            </Tooltip>
            <Tooltip
              hideArrow
              rounded
              content={'Yarn'}
              css={{ backgroundColor: '#3f3d54', color: 'white' }}>
              <Image
                width='100px'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg'
                alt='Yarn Logo'
              />
            </Tooltip>
            <Tooltip
              hideArrow
              rounded
              content={'SASS'}
              css={{ backgroundColor: '#3f3d54', color: 'white' }}>
              <Image
                width='100px'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
                alt='SASS Logo'
              />
            </Tooltip>
          </CodeExperienceIconsGrid>
        </CodeExperienceContainer>
        <DesignExperienceContainer>
          <Text h2>Design Tools</Text>
          <HorizontalRuleMedium />
          <DesignExperienceIconsGrid>
            <Tooltip
              hideArrow
              rounded
              content={'Adobe Illustrator'}
              css={{ backgroundColor: '#3f3d54', color: 'white' }}>
              <Image
                width='100px'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg'
                alt='Illustrator Logo'
              />
            </Tooltip>
            <Tooltip
              hideArrow
              rounded
              content={'Adobe Photoshop'}
              css={{ backgroundColor: '#3f3d54', color: 'white' }}>
              <Image
                width='100px'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg'
                alt='Photoshop Logo'
              />
            </Tooltip>
            <Tooltip
              hideArrow
              rounded
              content={'Figma'}
              css={{ backgroundColor: '#3f3d54', color: 'white' }}>
              <Image
                width='100px'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
                alt='Figma Logo'
              />
            </Tooltip>
          </DesignExperienceIconsGrid>
        </DesignExperienceContainer>
      </ExperienceMainGrid>
    </>
  );
}

export default Experience;
