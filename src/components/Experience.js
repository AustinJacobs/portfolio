import React, { useState, useEffect } from 'react';
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
import { Image, Text, Tooltip, Spacer } from '@nextui-org/react';
import HorizontalRuleMedium from './styles/HorizontalRuleMedium';
import { motion } from 'framer-motion';

const ExperienceMainGrid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  margin: 100px 1.5em 0px 1.5em;
  justify-items: left;

  @media only screen and (min-width: 768px) {
    margin: 0 4em 0 4em;
  }

  @media only screen and (min-width: 1300px) {
    margin: 0 6em 0 6em;
  }
`;

const WrittenExperienceContainer = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  text-align: left;
  margin-bottom: 2em;
`;

const ExperienceDisplay = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  margin: 0 0 50px 0;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 15% 65%;
  }

  @media only screen and (min-width: 1300px) {
    grid-template-columns: 15% 65%;
    text-align: left;
  }
`;

const ExperienceDate = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  grid-column: 1/2;
  grid-row: 1/2;
  text-align: left;
  margin-right: 20px;
`;

const ExperienceText = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  grid-column: 1/2;
  grid-row: 2/3;
  text-align: left;

  @media only screen and (min-width: 768px) {
    grid-column: 2/3;
    grid-row: 1/2;
    text-align: left;
  }
`;

const CodeExperienceContainer = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  text-align: left;
  margin-bottom: 2em;
`;

const CodeExperienceIconsGrid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-self: left;
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
  margin: 8px 0 0px 0;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
  }

  @media only screen and (min-width: 1300px) {
    grid-template-columns: repeat(8, 1fr);
    gap: 40px;
  }
`;

const PageHeader = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  margin: 8em 1em 6em 1em;
`;

function Experience() {
  // React hooks used to check the window size.
  const [isMobile, setIsMobile] = useState(false);
  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    handleResize();
  });

  return (
    <>
      <PageHeader>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}>
          {!isMobile ? (
            <Text
              h1
              css={{ fontSize: '90px', lineHeight: '1.1', color: '#3F3D54' }}>
              Experience
            </Text>
          ) : (
            <Text h1 css={{ fontSize: '60px', color: '#3F3D54' }}>
              Experience
            </Text>
          )}
        </motion.div>
      </PageHeader>
      <ExperienceMainGrid>
        <WrittenExperienceContainer>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            {!isMobile ? (
              <Text h1 css={{ fontSize: '50px', lineHeight: '1.1' }}>
                Work Experience
              </Text>
            ) : (
              <Text h1 css={{ fontSize: '40px' }}>
                Work Experience
              </Text>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <HorizontalRuleMedium />
          </motion.div>
          <ExperienceDisplay>
            <ExperienceDate>
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: true }}>
                <Text css={{ color: '#FF7900' }}>Apr. 2022 - Present</Text>
              </motion.div>
            </ExperienceDate>
            <ExperienceText>
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: true }}>
                <Text h4 css={{ color: '#3F3D54' }}>
                  Leisure Time Inc.
                </Text>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: true }}>
                <Text>
                  I am a Full Stack Web Developer at Leisure Time Inc. Some of
                  my responsibilities include writing new code to produce major
                  updates and features for four websites. I help maintain an
                  online shop that sells thousands of products each month and
                  serves customers all over the United States.
                </Text>
                <Spacer x={1} />
                <Text>
                  Another vital role that I play is designing new webpages and
                  features using UX/UI design standards that make our sites easy
                  for customers to use. Working alongside a dedicated graphic
                  designer, I help design the look and feel of many parts of our
                  websites.
                </Text>
              </motion.div>
            </ExperienceText>
          </ExperienceDisplay>
          {/* <ExperienceDisplay>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true }}>
              <ButtonDisplay>
                <Link>
                  <Button
                    auto
                    onClick={openPDF}
                    icon={<DocumentIcon width={40} />}
                    css={{
                      color: '#ffffff',
                      backgroundColor: '#3F3D54',
                    }}>
                    View Resume
                  </Button>
                </Link>
              </ButtonDisplay>
            </motion.div>
          </ExperienceDisplay> */}
        </WrittenExperienceContainer>
        <WrittenExperienceContainer>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            {!isMobile ? (
              <Text h1 css={{ fontSize: '50px', lineHeight: '1.1' }}>
                Education Experience
              </Text>
            ) : (
              <Text h1 css={{ fontSize: '40px' }}>
                Education Experience
              </Text>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <HorizontalRuleMedium />
          </motion.div>
          <ExperienceDisplay>
            <ExperienceDate>
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: true }}>
                <Text css={{ color: '#FF7900' }}>Sept. 2019 - April 2023</Text>
              </motion.div>
            </ExperienceDate>
            <ExperienceText>
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: true }}>
                <Text h4 css={{ color: '#3F3D54' }}>
                  Brigham Young University of Idaho
                </Text>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: true }}>
                <Text>
                  I graduated from Brigham Young University of Idaho with a degree in Computer Science. I majored specifically in Web Design & Development. 
                </Text>
                <Spacer x={2} />
                <Text>
                  At the beginning of my degree, I was asked to choose which
                  aspect of development I wanted to focus on most. I chose to
                  put most of my attention towards learning the
                  development/programming side of developing web apps. However,
                  I have plenty of experience designing websites and web
                  applications that are founded on sound design principles.
                </Text>
              </motion.div>
            </ExperienceText>
          </ExperienceDisplay>
        </WrittenExperienceContainer>
        <CodeExperienceContainer>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            {!isMobile ? (
              <Text h1 css={{ fontSize: '50px', lineHeight: '1.1' }}>
                Development Languages & Tools
              </Text>
            ) : (
              <Text h1 css={{ fontSize: '40px' }}>
                Development Languages & Tools
              </Text>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <HorizontalRuleMedium />
          </motion.div>
          <CodeExperienceIconsGrid>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}>
              <Tooltip
                hideArrow
                rounded
                content={'Angular'}
                css={{ backgroundColor: '#3f3d54', color: 'white' }}>
                <Image
                  width='100px'
                  src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
                  alt='Angular Logo'
                />
              </Tooltip>
            </motion.div>
          </CodeExperienceIconsGrid>
        </CodeExperienceContainer>
        <DesignExperienceContainer>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            {!isMobile ? (
              <Text h1 css={{ fontSize: '50px', lineHeight: '1.1' }}>
                Design Tools
              </Text>
            ) : (
              <Text h1 css={{ fontSize: '40px' }}>
                Design Tools
              </Text>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <HorizontalRuleMedium />
          </motion.div>
          <DesignExperienceIconsGrid>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}>
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
            </motion.div>
          </DesignExperienceIconsGrid>
        </DesignExperienceContainer>
      </ExperienceMainGrid>
    </>
  );
}

export default Experience;
