import React from 'react';
import PropTypes from 'prop-types';
import styles from './messageInput.module.css';
import classnames from 'classnames'

export const MessageInput = ({ onChange, onKeyDown, onClick, disabled, placeholder }) => {
  const className = classnames(styles.input, {
    [styles.disabled]: disabled,
  });

  return <input onChange={onChange} onKeyDown={onKeyDown} disabled={disabled} placeholder={placeholder} className={className} onClick={onClick} />
}

MessageInput.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};