import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Контактів поки що немає.');
      return;
    }
    console.log('Список контактів:');
    console.log(contacts);
    console.table(contacts);
  } catch (error) {
    console.error('Помилка при отриманні контактів:', error.message);
  }
};

console.log(await getAllContacts());
