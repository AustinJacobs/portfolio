import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_POSTS } from '../GraphQL/Queries';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import Box from './styles/Box';
import Heading from './styles/Heading';
import Flex from './styles/Flex';
import styled from 'styled-components';
import { Card, Col, Row, Button, Text } from '@nextui-org/react';
import {
  compose,
  color,
  space,
  border,
  typography,
  layout,
  grid,
} from 'styled-system';
import logo from '../assets/bird_logo_color.png';
import { motion } from 'framer-motion';
import Ring from 'react-cssfx-loading/lib/Ring';

const BlogTopGrid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  margin: 50px 1em 0 1em;
  text-align: center;
  align-items: center;
`;

const BlogMainGrid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  margin: 50px 1.5em 50px 1.5em;
  justify-items: center;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin: 50px 2em 50px 2em;
    text-align: left;
  }

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

function ArticlesGrid() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading)
    return (
      <Flex justifyContent='center' alignItems='center' height='100vh'>
        <Ring color='#ff7900' width='80px' height='80px' />
      </Flex>
    );
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <BlogTopGrid>
        <SectionHeading>Blog</SectionHeading>
      </BlogTopGrid>
      <BlogMainGrid>
        {data.allArticles.edges.map((article) => (
          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ y: -3 }}
            style={{
              background: 'transparent',
              border: 'none',
            }}
            key={article.node._meta.id}>
            <Card
              css={{
                w: '350px',
                h: '400px',
                marginBottom: '1em',
                minWidth: '300px',
              }}>
              <Card.Header
                css={{
                  position: 'absolute',
                  zIndex: 1,
                  top: 0,
                }}>
                <Col>
                  <Text
                    size={12}
                    weight='bold'
                    transform='uppercase'
                    color='white'>
                    {article.node.category}
                  </Text>
                  <Text h2 color='white'>
                    {article.node.title[0].text}
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={article.node.feature_image.url}
                  width='100%'
                  height='100%'
                  objectFit='cover'
                  alt={article.node.feature_image.alt}
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
                    <Text color='#fff' size={12}>
                      Published
                    </Text>
                    <Text color='#fff' size={12}>
                      {format(
                        new Date(article.node.published_at),
                        'MMM dd, yyyy'
                      )}
                    </Text>
                  </Col>
                  <Col>
                    <Row justify='flex-end'>
                      <Link to={article.node._meta.uid}>
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
                            Read Post
                          </Text>
                        </Button>
                      </Link>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </motion.div>
        ))}
      </BlogMainGrid>
    </>
  );
}

export default ArticlesGrid;
