import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, data, { encoding: 'utf-8' });
  } catch (error) {
    console.error('Помилка при записі контактів:', error.message);
  }
};
