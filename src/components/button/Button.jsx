import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';
import classnames from 'classnames'

export const Button = ({ children, onClick, primary }) => {
  const className = classnames(styles.primaryButton, {
    [styles.primaryButton]: primary,
  });

  return <button className={styles.primaryButton} onClick={onClick}>{children}</button>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};