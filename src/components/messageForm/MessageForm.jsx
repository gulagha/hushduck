import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './messageForm.module.css';
import { MessageInput } from '../messageInput/MessageInput';
import { Button } from '../button/Button';

export const MessageForm = ({ onChange, onSend, disabled, placeholder }) => {
  const [msg, setMsg] = useState();
  const onInputChange = (text) => {
    if (onChange) onChange(text);
    setMsg(text);
  };
  
  const onPressSend = () => {
    onPressSend({ message: msg, timestamp: new Date().getTime() });
    setMsg('');
  };
  
  const onPressEnter = (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      e.preventDefault();
      onSend();
    }
  };

  return <div className={styles.form}>
    <MessageInput onKeyDown={onPressEnter} disabled={disabled} onChange={onInputChange} placeholder="Reasons why I can't focus" />
    <Button disabled={disabled} onClick={onPressSend} primary>Send</Button>
  </div>
}

MessageForm.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};