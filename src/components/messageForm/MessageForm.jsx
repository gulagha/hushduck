import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './messageForm.module.css';
import { MessageInput } from '../messageInput/MessageInput';
import { Button } from '../button/Button';

export const MessageForm = ({ onChange, onSend, disabled, placeholder }) => {
  const [msg, setMsg] = useState();
  const onInputChange = (event) => {
    console.log('input change', event.target.value);
    if (onChange) onChange(event.target.value);
    setMsg(event.target.value);
  };
  
  const onPressSend = () => {
    onSend({ message: msg, senderId: 1, timestamp: new Date().getTime() });
    setMsg('');
  };
  
  const onPressEnter = (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      e.preventDefault();
      onSend({ message: msg, senderId: 1, timestamp: new Date().getTime() });
      setMsg('');
    }
  };

  return <div className={styles.form}>
    <MessageInput value={msg} onKeyDown={onPressEnter} disabled={disabled} onChange={onInputChange} placeholder="I'm stuck because ..." />
    <Button disabled={disabled} onClick={onPressSend} primary>Send</Button>
  </div>
}

MessageForm.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};