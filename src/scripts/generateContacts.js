import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const CONTACTS_TO_CREATE = 5;

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const newContacts = Array.from({ length: CONTACTS_TO_CREATE }, () =>
      createFakeContact(),
    );
    const updatedContacts = [...contacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(
      `Додано ${CONTACTS_TO_CREATE} нових контактів. Загальна кількість контактів: ${updatedContacts.length} `,
    );
  } catch (error) {
    console.error('Помилка при генерації контактів:', error.message);
  }
};

generateContacts(5);
