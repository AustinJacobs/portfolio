import React from 'react';
import { Card, Text } from '@nextui-org/react';

function Home() {
  return (
    <div>
        <Text
          h1
          size={60}
          css={{
            textGradient: '45deg, $blue500 -20%, $pink500 50%',
          }}
          weight='bold'>
          Let's
        </Text>
        <Text
          h1
          size={60}
          css={{
            textGradient: '45deg, $purple500 -20%, $pink500 100%',
          }}
          weight='bold'>
          Make the Web
        </Text>
        <Text
          h1
          size={60}
          css={{
            textGradient: '45deg, $yellow500 -20%, $red500 100%',
          }}
          weight='bold'>
          Prettier
        </Text>
    </div>
  );
}

export default Home;
