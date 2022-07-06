import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { GET_POSTS } from '../GraphQL/Queries';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
// import Box from './styles/Box';
// import Heading from './styles/Heading';
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
import Ring from 'react-cssfx-loading/lib/Ring';
import HorizontalRuleSmall from './styles/HorizontalRuleSmall';

const BlogMainGrid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-column: 2/3;
  grid-row: 1;
  grid-template-columns: 1fr;
  margin: 150px 1.5em 50px 1.5em;
  justify-items: center;
  gap: 1em;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    text-align: left;
    margin: 0 1em 0 1em;
  }

  @media only screen and (min-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
    text-align: left;
  }
`;

const FixedSideBar = styled.div`
  ${compose(color, space, border, typography, layout, grid)}
  background-color: white;
  color: #ff7900;
  width: 100%;
  height: 200px;
  position: -webkit-sticky;
  position: sticky;
  top: 250px;
  grid-column: 1/2;
  padding: 0 1em 0 1em;
`;

const SideBarLinks = styled.div`
  ${compose(color, space, border, typography, layout, grid)}
  display: grid;
  grid-template-rows: repeat(5, 1fr);
`;

const ArticleAndSidebarGrid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 20% auto;
  margin: 150px 1.5em 50px 1.5em;
`;

function ArticlesGrid() {
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
      {!isMobile ? (
        <ArticleAndSidebarGrid>
          <FixedSideBar>
            <Text h3 css={{ color: '#ff7900' }}>
              Recent Posts
            </Text>
            <HorizontalRuleSmall />
            <SideBarLinks>
              {data.allArticles.edges
                .map((article) => (
                  <div key={article.node._meta.id}>
                    <Link to={article.node._meta.uid}>
                      <Text css={{ color: '#3D3D55' }}>
                        {article.node.title[0].text}
                      </Text>
                    </Link>
                  </div>
                ))
                .slice(0, 5)}
            </SideBarLinks>
          </FixedSideBar>
          <BlogMainGrid>
            {data.allArticles.edges.map((article) => (
              <div key={article.node._meta.id}>
                <Card
                  css={{
                    w: '100%',
                    h: '350px',
                    maxWidth: '350px',
                    marginTop: '10px;'
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
              </div>
            ))}
          </BlogMainGrid>
        </ArticleAndSidebarGrid>
      ) : (
        <BlogMainGrid>
          {data.allArticles.edges.map((article) => (
            <div key={article.node._meta.id}>
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
            </div>
          ))}
        </BlogMainGrid>
      )}
    </>
  );
}

export default ArticlesGrid;
