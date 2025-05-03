import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('Немає контактів для видалення.');
      return;
    }
    const removedContact = contacts.pop();
    await writeContacts(contacts);
    console.log(
      'Видалено останній контакт:',
      removedContact,
      `Загальна кількість контактів залишилася: ${contacts.length}`,
    );
  } catch (error) {
    console.error('Помилка при видаленні останнього контакту:', error.message);
  }
};

removeLastContact();
