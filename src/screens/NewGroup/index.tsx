import { Button } from '@components/Button';
import { Highlight } from '@components/Highlight';
import Input from '@components/Input';
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
        <Input />
        <Button title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
};

export default NewGroup;
