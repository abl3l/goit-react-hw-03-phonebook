import React, { Component } from 'react';
import shortid from 'shortid';
import PhoneBook from './Phonebook/Phonebook.jsx';
import ContactList from './ContactList/ContactList.jsx';
import ContactFilter from './ContackFilter/ContactFilter.jsx';

const filterContacts = (contacts, filter) => {
  return contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  componentDidMount() {
    const fromLS = localStorage.getItem('contacts');

    if (fromLS) {
      const contacts = JSON.parse(fromLS);

      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = contact => {
    const { contacts } = this.state;
    const sameContact = contacts.find(el => el.name === contact.name);

    if (!sameContact) {
      const ContactToAdd = {
        id: shortid.generate(),
        ...contact,
      };
      this.setState(state => ({
        contacts: [...state.contacts, ContactToAdd],
      }));
    } else alert(`${contact.name} contact is allready exist`);
  };

  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContacts(contacts, filter);

    return (
      <section>
        <h1>Phonebook</h1>
        <PhoneBook onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <ContactFilter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          items={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </section>
    );
  }
}
