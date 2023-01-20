import React, { Component } from 'react';

import Phonebook from './phonebook/Phonebook';
import PhonebookList from './phonebookList/PhonebookList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onSubmit = data => {
    const contact = { ...data };
    this.state.contacts.find(
      el => el.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
    )
      ? alert(`${contact.name} is already in contacts`)
      : this.setState(prev => ({
          contacts: [contact, ...prev.contacts],
        }));
  };
  cahngeFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };
  onDelete = e => {
    const { id } = e.target;
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };
  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
    return (
      <>
        <Phonebook onSubmit={this.onSubmit}></Phonebook>

        <PhonebookList
          contacts={visibleContacts}
          value={this.state.filter}
          onChange={this.cahngeFilter}
          onClick={this.onDelete}
        ></PhonebookList>
      </>
    );
  }
}

export default App;
