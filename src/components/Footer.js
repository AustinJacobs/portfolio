import React from 'react';
import Grid from '../components/styles/Grid';
import Flex from '../components/styles/Flex';
import Box from '../components/styles/Box';
import { Link, Card, Spacer, Text } from '@nextui-org/react';
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
import { FaEnvelope, FaGithubAlt, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const FooterContainer = styled.div`
    ${compose(color, space, border, typography, layout, grid)}
    display: grid;
    justify-content: center;
    // position: fixed;
    // left: 0;
    // bottom: 0;
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
      <Grid gridTemplateColumns='80px 80px 80px 80px'>
        <FooterInfoBox>
          <Grid gridTemplateColumns='1fr' gridTemplateRows='1fr'>
            <Grid>
              <Flex justifySelf='center' alignSelf='center'>
                <Text size='1em' color='text'>
                  Do you have any questions or would you like to collaborate on
                  a project? Let's connect and get started.
                </Text>
              </Flex>
            </Grid>
          </Grid>
        </FooterInfoBox>
        <Spacer />
        <Grid gridColumn='1'>
          <Flex justifySelf='center' alignSelf='center'>
            <Link color='text' href='https://www.linkedin.com/in/aust-t-jac/'>
              <FaLinkedin size={40} />
            </Link>
          </Flex>
        </Grid>

        <Grid gridColumn='2'>
          <Flex justifySelf='center' alignSelf='center'>
            <Link color='text' href='https://github.com/AustinJacobs'>
              <FaGithubAlt size={40} />
            </Link>
          </Flex>
        </Grid>

        <Grid gridColumn='3'>
          <Flex justifySelf='center' alignSelf='center'>
            <Link color='text' href='https://www.instagram.com/aust.t.jac/'>
              <FaInstagram size={40} />
            </Link>
          </Flex>
        </Grid>

        <Grid gridColumn='4'>
          <Flex justifySelf='center' alignSelf='center'>
            <Link color='text' href='mailto:aust.t.jac@gmail.com'>
              <FaEnvelope size={40} />
            </Link>
          </Flex>
        </Grid>
        <Spacer/>
        <FooterDate>
          <Grid>
            <Flex justifySelf='center' alignSelf='center'>
              <Text size='1em' color='text'>
                Designed & Built by Austin Jacobs ©{date}
              </Text>
            </Flex>
          </Grid>
        </FooterDate>
      </Grid>
    </FooterContainer>
  );
}

export default Footer;
