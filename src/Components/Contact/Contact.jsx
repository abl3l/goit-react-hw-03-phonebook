import React from 'react';
import T from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ name, number, onDeleteContact }) => (
  <div className={styles.contact}>
    <p className={styles.name}> {name} </p>{' '}
    <p className={styles.number}> {number} </p>{' '}
    <button type="button" onClick={onDeleteContact} className={styles.btn}>
      {' '}
      Delete{' '}
    </button>{' '}
  </div>
);

Contact.propTypes = {
  name: T.string.isRequired,
  number: T.string.isRequired,
  onDeleteContact: T.func.isRequired,
};

export default Contact;
