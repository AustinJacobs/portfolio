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
import { Card, Col, Row, Button, Text, Link } from '@nextui-org/react';
import { useQuery } from '@apollo/client';
import { GET_CARDS } from '../GraphQL/Queries';
import Flex from './styles/Flex';
import Ring from 'react-cssfx-loading/lib/Ring';

function Work() {
  const WorkMainGrid = styled.div`
    ${compose(color, space, border, typography, layout, grid)}

    display: grid;
    grid-template-columns: 1fr;
    margin: 150px 1em 1em 1em;
  `;

  const { loading, error, data } = useQuery(GET_CARDS);

  if (loading)
    return (
      <Flex justifyContent='center' alignItems='center' height='100vh'>
        <Ring color='#ff7900' width='80px' height='80px' />
      </Flex>
    );
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <WorkMainGrid>
        {data.allCards.edges.map((card) => (
          <div key={card.node._meta.id}>
            <Card
              css={{
                w: '100%',
                h: '350px',
                maxWidth: '350px',
                marginTop: '10px;',
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
          </div>
        ))}
      </WorkMainGrid>
    </div>
  );
}

export default Work;
