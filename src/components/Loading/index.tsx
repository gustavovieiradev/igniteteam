import React from 'react';

import { Container, LoadIndicator } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <LoadIndicator />
    </Container>
  )
}

export { Loading };