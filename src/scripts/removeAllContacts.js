import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('Усі контакти успішно видалено.');
  } catch (error) {
    console.error('Помилка при видаленні контактів:', error.message);
  }
};

removeAllContacts();
