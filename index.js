import { getContactById, listContacts, removeContact } from "./contacts.js";

const invokeAction = async ({ action, contacId }) => {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.log(allContacts);

    case "get":
      const contactById = await getContactById(contacId);
      return console.log(contactById);

    case "add":
      return;

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
