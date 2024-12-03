import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
//import Notification from "./components/Notification/Notification";

//import { useState, useEffect } from "react";

import "./App.css";

let obj = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [value, setValue] = useState("");
  const [contacts, setContacts] = useState(obj);

  function handleChange(e) {
    setValue(e.target.value);
  }

  const addContact = (contact) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox value={value} onChange={handleChange} />
        <ContactList contacts={filterContacts} />
      </div>
    </>
  );
};

export default App;
