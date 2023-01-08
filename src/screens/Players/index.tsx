import { Button } from '@components/Button';
import ButtonIcon from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import Input from '@components/Input';
import { ListEmpty } from '@components/ListEmpty';
import { PlayCard } from '@components/PlayCard';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppError } from '@utils/AppError';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, FlatList, TextInput } from 'react-native';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles';
import { playersGetByGroupAndTeam } from '@storage/player/playersGetByGroupAndTeam';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';
import { groupRemoveByName } from '@storage/group/groupRemoveByName';

type RouteParams = {
  group: string;
};

const Players: React.FC = () => {
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const newPlayerNameInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();
  const route = useRoute();
  const { group } = route.params as RouteParams;

  async function handleAddPlayer() {
    try {
      if (newPlayerName.trim().length === 0) {
        throw new AppError('Informe o nome da pessoa para adicionar');
      }

      const newPlayer = {
        name: newPlayerName,
        team,
      };

      await playerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur();

      setNewPlayerName('');
      await fetchPlayersByTeam();
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert('Nova pessoa', err.message);
      } else {
        Alert.alert(
          'Novo pessoa',
          'Não foi possível adicionar uma nova pessoa'
        );
      }
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (err) {
      console.log(err);
      Alert.alert(
        'Pessoas',
        'Não foi possível carregar as pessoas do time selecionado'
      );
    }
  }

  async function handlePlayerRemove(playerName: string) {
    try {
      console.log(playerName);
      await playerRemoveByGroup(playerName, group);
      await fetchPlayersByTeam();
    } catch (err) {
      console.log(err);
      Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa');
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group);
      navigation.navigate('groups');
    } catch (err) {
      console.log(err);
      Alert.alert('Remover grupo', 'Não foi possível remover o grupo');
    }
  }

  async function handleGroupRemove() {
    Alert.alert('Remover', 'Deseja remover o grupo?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => groupRemove() },
    ]);
  }

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="adicione a galera e separe os times" />
      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayCard
            name={item.name}
            onRemove={() => handlePlayerRemove(item.name)}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button
        title="Remove turma"
        type="SECONDARY"
        onPress={handleGroupRemove}
      />
    </Container>
  );
};

export default Players;
