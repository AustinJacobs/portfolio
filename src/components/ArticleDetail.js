import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_DETAILS } from '../GraphQL/Queries';
import { format } from 'date-fns';
import { RichText } from 'prismic-reactjs';
import React, { useEffect } from 'react';
import { htmlSerializer } from '../prismic-config';
import Heading from './styles/Heading';
import Text from './styles/Text';
import Box from './styles/Box';
import styled from 'styled-components';
import Flex from './styles/Flex';
import {
  compose,
  color,
  space,
  border,
  typography,
  layout,
  grid,
} from 'styled-system';
import { motion } from 'framer-motion';
import Ring from 'react-cssfx-loading/lib/Ring';
import logo from '../assets/bird_name.png';

const ArticleDetailBodyContainer = styled.div`
  ${compose(color, space, border, typography, layout, grid)}
  background-color: 'white';
  margin: 150px 1.5em 50px 1.5em;

  a {
    text-decoration: underline blue;
    color: 'red'
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 50%,
     blue 50%
    );
    background-position: -0% 0;
    background-size: 200% auto;
    transition: background-position 0.5s ease-out;
  }

  a:hover {
    background-position: -99.99% 0;
    text-decoration: underline orange;
  }
`;

const ArticleImage = styled.img`
  ${compose(color, space, border, typography, layout, grid)}
  width: 100%;
`;

function ArticleDetail() {
  useEffect(() => {
    const body = document.querySelector('#root');

    body.scrollIntoView();
  }, []);

  const { articleUid } = useParams();

  const { loading, error, data } = useQuery(GET_DETAILS(articleUid));

  if (loading)
    return (
      <Flex justifyContent='center' alignItems='center' height='100vh'>
        <Ring color='#ff7900' width='80px' height='80px' />
      </Flex>
    );
  if (error) return `Error! ${error.message}`;

  console.log(data.article.body);

  return (
    <React.Fragment>
      <Box>
        {/* <ArticleImage
          p={0}
          m={0}
          mt={5}
          src={logo}
          alt='Site logo with name.'
        /> */}
        <ArticleDetailBodyContainer px={['2em', null, null, '6em', null]}>
          <Heading
            level={1}
            fontWeight='normal'
            fontSize={['3xl', null, null, '5xl', null]}
            m='0'
            mt={4.5}>
            {data.article.title[0].text}
          </Heading>
          <Text color='red.600' mt={0} as='p'>
            Published on{' '}
            {format(new Date(data.article.published_at), 'MMM dd, yyyy')}
          </Text>
          <Box>
            {data.article.body
              .filter((index) => index.type === 'inline_text')
              .map((content, index) => {
                return (
                  <RichText
                    key={index}
                    render={content.primary.description}
                    htmlSerializer={htmlSerializer}
                  />
                );
              })}
          </Box>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ y: -2 }}
            style={{ background: 'transparent', border: 'none', padding: '0' }}>
            {/* <Button
              width='100px'
              height='40px'
              border='none'
              borderRadius='5px'
              bg='red.600'
              color='white'
              fontSize={'md'}
              onClick={() => history.goBack()}
              mb={5}>
              Back
            </Button> */}
          </motion.button>
        </ArticleDetailBodyContainer>
      </Box>
    </React.Fragment>
  );
}

export default ArticleDetail;
