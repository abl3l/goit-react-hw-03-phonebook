import React, { Component } from 'react';
import styles from './Phonebook.module.css';

export default class PhoneBook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    if (!name || !number) return alert('Заполните все поля');

    this.props.onAddContact({ ...this.state });
    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label} htmlFor="name">
          Name
          <input
            className={styles.input}
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          ></input>
        </label>
        <br />
        <label className={styles.label} htmlFor="number">
          Number
          <input
            className={styles.input}
            name="number"
            type="number"
            value={number}
            onChange={this.handleChange}
          ></input>
        </label>
        <button
          className={styles.btn}
          type="submit"
          onSubmit={this.handleSubmit}
        >
          Add Contact
        </button>
      </form>
    );
  }
}
