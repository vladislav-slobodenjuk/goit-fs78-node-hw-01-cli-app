import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");

export const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
};

export const getContactById = async (contacId) => {
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === contacId);
  return result || null;
};

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
};

export const removeContact = async (contacId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === contacId);
  if (idx === -1) return null;

  const [result] = contacts.splice(idx, 1);
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
};
