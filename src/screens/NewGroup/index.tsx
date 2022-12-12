import { Button } from '@components/Button';
import { Highlight } from '@components/Highlight';
import React from 'react';

import { Container, Content, Icon } from './styles';

const NewGroup: React.FC = () => {
  return (
    <Container>
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar pessoas"
        />
        <Button title="Criar" />
      </Content>
    </Container>
  );
};

export default NewGroup;
