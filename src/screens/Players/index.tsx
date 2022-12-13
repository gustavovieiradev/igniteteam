import ButtonIcon from '@components/ButtonIcon';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import React from 'react';

import { Container } from './styles';

const Players: React.FC = () => {
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <ButtonIcon />
    </Container>
  );
};

export default Players;
