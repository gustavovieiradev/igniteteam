import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';
import { groupGetAll } from './groupGetAll';

export async function groupCreate(newGroup: string) {
  try {
    if (newGroup.length === 0) {
      throw new AppError('Informe o nome da turma');
    }

    const storageGroups = await groupGetAll();

    const groupAlreadyExists = storageGroups.includes(newGroup);

    if (groupAlreadyExists) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.');
    }

    const storage = JSON.stringify([...storageGroups, newGroup]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (e) {
    throw e;
  }
}
