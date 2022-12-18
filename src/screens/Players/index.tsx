import ButtonIcon from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import Input from '@components/Input';
import { PlayCard } from '@components/PlayCard';
import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

const Players: React.FC = () => {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState(['Gustavo', 'Joao', 'Maria']);
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <PlayCard name={item} onRemove={() => {}} />}
      />
    </Container>
  );
};

export default Players;
