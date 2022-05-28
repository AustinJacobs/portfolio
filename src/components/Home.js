import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import media from '../assets/media.jpg';
import calculator from '../assets/calculator.jpg';
import tracker from '../assets/tracker.jpg';
import { Text } from '@nextui-org/react';
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

const CarouselContainer = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  height: 300px;
  display: flex;
`;

function Home() {
  return (
    <div>
      <CarouselContainer>
        <Carousel
          className='carousel'
          autoPlay
          infiniteLoop
          interval={5000}
          showArrows={false}
          axis='vertical'
          renderIndicator={false}
          showStatus={false}>
          <div>
            <Text h2>Building custom websites</Text>
          </div>
          <div>
            <Text h2>Designing modern and intuitive websites</Text>
          </div>
          <div>
            <Text h2>Helping your business or idea stand out</Text>
          </div>
        </Carousel>
      </CarouselContainer>
    </div>
  );
}

export default Home;
