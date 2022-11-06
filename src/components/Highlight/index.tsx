import React from 'react';

import { Container, SubTitle, Title } from './styles';

type Props = {
  title: string;
  subtitle: string;
};

const Highlight: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
};

export { Highlight };
