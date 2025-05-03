import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(`Кількість контактів: ${contacts.length}`);
  } catch (error) {
    console.error('Помилка при підрахунку контактів:', error.message);
  }
};

console.log(await countContacts());
