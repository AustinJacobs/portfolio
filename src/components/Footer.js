import React from 'react';
import Grid from '../components/styles/Grid';
import Flex from '../components/styles/Flex';
import { Link, Spacer, Text } from '@nextui-org/react';
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

function Footer() {
  const FooterContainer = styled.div`
    ${compose(color, space, border, typography, layout, grid)}
    display: grid;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 2em;
  `;

  const FooterInfoBox = styled.div`
    ${compose(color, space, border, typography, layout, grid)}

    grid-column: 1/5;
    text-align: center;
  `;

  const FooterDate = styled.div`
    ${compose(color, space, border, typography, layout, grid)}

    grid-column: 1/5;
    text-align: center;
  `;

  const current = new Date();
  const date = current.getFullYear();

  return (
    <FooterContainer>
      <Grid gridTemplateColumns='1fr 1fr 1fr 1fr'>
        <FooterInfoBox>
          <Grid gridTemplateColumns='1fr' gridTemplateRows='1fr'>
            <Grid>
              <Flex justifySelf='center' alignSelf='center'>
                <Text size='5em' weight='extrabold'>
                  Let's connect and get started.
                </Text>
              </Flex>
            </Grid>
          </Grid>
        </FooterInfoBox>
        <Spacer />
        <Grid gridColumn='1'>
          <Flex justifySelf='center' alignSelf='center'>
            <Link
              className='footer-a'
              href='https://www.linkedin.com/in/aust-t-jac/'>
              <Text h4>Linkedin</Text>
            </Link>
          </Flex>
        </Grid>

        <Grid gridColumn='2'>
          <Flex justifySelf='center' alignSelf='center'>
            <Link className='footer-a' href='https://github.com/AustinJacobs'>
              <Text h4>Github</Text>
            </Link>
          </Flex>
        </Grid>

        <Grid gridColumn='3'>
          <Flex justifySelf='center' alignSelf='center'>
            <Link
              className='footer-a'
              href='https://www.instagram.com/aust.t.jac/'>
              <Text h4>Instagram</Text>
            </Link>
          </Flex>
        </Grid>

        <Grid gridColumn='4'>
          <Flex justifySelf='center' alignSelf='center'>
            <Link className='footer-a' href='mailto:aust.t.jac@gmail.com'>
              <Text h4>Email</Text>
            </Link>
          </Flex>
        </Grid>
        <Spacer />
        <FooterDate>
          <Grid>
            <Flex justifySelf='center' alignSelf='center'>
              <Text size='1em'>Designed & Built by Austin Jacobs ©{date}</Text>
            </Flex>
          </Grid>
        </FooterDate>
      </Grid>
    </FooterContainer>
  );
}

export default Footer;
