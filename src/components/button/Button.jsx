import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';
import classnames from 'classnames'

export const Button = ({ children, onClick, primary }) => {
  const className = classnames(styles.button, {
    [styles.primaryButton]: primary,
  });

  return <button className={className} onClick={onClick}>{children}</button>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  onClick: PropTypes.func
};