import React from 'react';
import T from 'prop-types';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ items, onDeleteContact }) =>
  items.length > 0 && (
    <ul className={styles.contact_list}>
      {' '}
      {items.map(el => (
        <li key={el.id}>
          <Contact {...el} onDeleteContact={() => onDeleteContact(el.id)} />{' '}
        </li>
      ))}{' '}
    </ul>
  );

ContactList.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: T.func.isRequired,
};

export default ContactList;
