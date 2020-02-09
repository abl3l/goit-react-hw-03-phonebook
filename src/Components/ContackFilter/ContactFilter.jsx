import React from 'react';
import styles from './ContactFilter.module.css';

const ContactFilter = ({ value, onChangeFilter }) => (
  <form className={styles.form}>
    <label>
      Find contacts by name{' '}
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />{' '}
    </label>{' '}
  </form>
);

export default ContactFilter;
