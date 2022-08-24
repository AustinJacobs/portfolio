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

function ArticleDetail() {
  const ArticleDetailBodyContainer = styled.div`
  ${compose(color, space, border, typography, layout, grid)}
  background-color: 'white';
  margin: 20px 1.5em 50px 1.5em;

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
    height: 500px;
    object-fit: cover;
  `;

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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}>
      <Box>
        <ArticleImage
          p={0}
          m={0}
          mt='80px'
          px='2.5em'
          src={data.article.feature_image.url}
          alt='Feature Image'
        />
        <ArticleDetailBodyContainer px={['2em', null, null, '6em', null]}>
          <Heading
            level={1}
            fontWeight='bold'
            fontSize={['3xl', null, null, '5xl', null]}
            m='0'>
            {data.article.title[0].text}
          </Heading>
          <Box mb={4}>
            <Text color='#FF7900' mt={0} as='p'>
              Published on{' '}
              {format(new Date(data.article.published_at), 'MMM dd, yyyy')}
            </Text>
          </Box>
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
        </ArticleDetailBodyContainer>
      </Box>
    </motion.div>
  );
}

export default ArticleDetail;
