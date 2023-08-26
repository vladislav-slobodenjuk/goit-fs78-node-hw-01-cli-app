import {
  addContact,
  getContactById,
  listContacts,
  removeContact,
} from "./contacts.js";

const invokeAction = async ({ action, contacId, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.log(allContacts);

    case "get":
      const contactById = await getContactById(contacId);
      return console.log(contactById);

    case "add":
      const newContact = await addContact({ name, email, phone });

      return console.log(newContact);

    case "remove":
      const removedContact = await removeContact(contacId);
      return console.log(removedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "get", contacId: "05olLMgyVQdWRwgKfg5J6" });
// invokeAction({ action: "remove", contacId: "vza2RIzNGIwutCVCs4mCL" });
// invokeAction({
//   action: "add",
//   name: "Mango ",
//   email: "mango@gmail.com",
//   phone: "322-22-22",
// });
