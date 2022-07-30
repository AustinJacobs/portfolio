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
import { Card, Col, Row, Button, Text, Link } from '@nextui-org/react';
import { useQuery } from '@apollo/client';
import { GET_CARDS } from '../GraphQL/Queries';
import Flex from './styles/Flex';
import Ring from 'react-cssfx-loading/lib/Ring';
import { motion } from 'framer-motion';
import HorizontalRuleMedium from './styles/HorizontalRuleMedium';

function Work() {
  const WorkWrapper = styled.div`
    ${compose(color, space, border, typography, layout, grid)}

    display: grid;
    grid-template-columns: 1fr;
    margin: 100px 1em 1em 1em;

    @media only screen and (min-width: 668px) {
      margin: 0 4em 1em 4em;
    }

    @media only screen and (min-width: 968px) {
      margin: 0 4em 1em 4em;
    }

    @media only screen and (min-width: 1300px) {
      margin: 0 6em 1em 6em;
    }
  `;

  const WorkMainGrid = styled.div`
    ${compose(color, space, border, typography, layout, grid)}

    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    margin: 1em 1em 1em 1em;

    @media only screen and (min-width: 668px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 2em;
      margin: 1em 4em 0em 4em;
    }

    @media only screen and (min-width: 968px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 2em;
      margin: 1em 4em 0em 4em;
    }

    @media only screen and (min-width: 1300px) {
      grid-template-columns: repeat(4, 1fr);
      gap: 2em;
      margin: 1em 6em 0em 6em;
    }
  `;

  const PageHeader = styled.div`
    ${compose(color, space, border, typography, layout, grid)}

    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    margin: 8em 1em 6em 1em;
  `;

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

  const { loading, error, data } = useQuery(GET_CARDS);

  if (loading)
    return (
      <Flex justifyContent='center' alignItems='center' height='100vh'>
        <Ring color='#ff7900' width='80px' height='80px' />
      </Flex>
    );
  if (error) return `Error! ${error.message}`;

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
              Work
            </Text>
          ) : (
            <Text h1 css={{ fontSize: '60px', color: '#3F3D54' }}>
              Work
            </Text>
          )}
        </motion.div>
      </PageHeader>
      {!isMobile ? (
        <>
          <WorkWrapper>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true }}>
              <Text h1 css={{ fontSize: '50px', lineHeight: '1.1' }}>
                Hosted Projects
              </Text>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true }}>
              <HorizontalRuleMedium />
            </motion.div>
          </WorkWrapper>
          <WorkMainGrid>
            {data.allCards.edges.map((card) => (
              <div key={card.node._meta.id}>
                <motion.div
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1 } }}
                  viewport={{ once: true }}>
                  <Card
                    css={{
                      w: '100%',
                      h: '350px',
                      maxWidth: '350px',
                    }}>
                    <Card.Header
                      css={{
                        position: 'absolute',
                        zIndex: 1,
                        top: 0,
                      }}>
                      <Col>
                        <Text h2 color='white'>
                          {card.node.title[0].text}
                        </Text>
                        <Text
                          size={12}
                          weight='bold'
                          transform='uppercase'
                          color='white'>
                          {card.node.body[0].text}
                        </Text>
                      </Col>
                    </Card.Header>
                    <Card.Body css={{ p: 0 }}>
                      <Card.Image
                        src={card.node.feature_image.url}
                        width='100%'
                        height='100%'
                        objectFit='cover'
                        alt={card.node.feature_image.alt}
                      />
                    </Card.Body>
                    <Card.Footer
                      css={{
                        position: 'absolute',
                        bottom: 0,
                        zIndex: 1,
                      }}>
                      <Row>
                        <Col>
                          <Row justify='flex-end'>
                            <Link target='_blank' href={card.node.link[0].text}>
                              <Button
                                flat
                                auto
                                rounded
                                color='text'
                                css={{ backgroundColor: '#ffffff' }}>
                                <Text
                                  css={{ color: 'inherit' }}
                                  size={12}
                                  weight='bold'
                                  transform='uppercase'>
                                  Visit Live Site
                                </Text>
                              </Button>
                            </Link>
                          </Row>
                        </Col>
                      </Row>
                    </Card.Footer>
                  </Card>
                </motion.div>
              </div>
            ))}
          </WorkMainGrid>
        </>
      ) : (
        <>
          <WorkWrapper>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true }}>
              <Text h1 css={{ fontSize: '40px' }}>
                Hosted Projects
              </Text>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true }}>
              <HorizontalRuleMedium />
            </motion.div>
          </WorkWrapper>
          <WorkMainGrid>
            {data.allCards.edges.map((card) => (
              <div key={card.node._meta.id}>
                <motion.div
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1 } }}
                  viewport={{ once: true }}>
                  <Card
                    css={{
                      w: '100%',
                      h: '350px',
                      maxWidth: '350px',
                      marginBottom: '2em',
                    }}>
                    <Card.Header
                      css={{
                        position: 'absolute',
                        zIndex: 1,
                        top: 0,
                      }}>
                      <Col>
                        <Text h2 color='white'>
                          {card.node.title[0].text}
                        </Text>
                        <Text
                          size={12}
                          weight='bold'
                          transform='uppercase'
                          color='white'>
                          {card.node.body[0].text}
                        </Text>
                      </Col>
                    </Card.Header>
                    <Card.Body css={{ p: 0 }}>
                      <Card.Image
                        src={card.node.feature_image.url}
                        width='100%'
                        height='100%'
                        objectFit='cover'
                        alt={card.node.feature_image.alt}
                      />
                    </Card.Body>
                    <Card.Footer
                      css={{
                        position: 'absolute',
                        bottom: 0,
                        zIndex: 1,
                      }}>
                      <Row>
                        <Col>
                          <Row justify='flex-end'>
                            <Link target='_blank' href={card.node.link[0].text}>
                              <Button
                                flat
                                auto
                                rounded
                                color='text'
                                css={{ backgroundColor: '#ffffff' }}>
                                <Text
                                  css={{ color: 'inherit' }}
                                  size={12}
                                  weight='bold'
                                  transform='uppercase'>
                                  Visit Live Site
                                </Text>
                              </Button>
                            </Link>
                          </Row>
                        </Col>
                      </Row>
                    </Card.Footer>
                  </Card>
                </motion.div>
              </div>
            ))}
          </WorkMainGrid>
        </>
      )}
    </>
  );
}

export default Work;
