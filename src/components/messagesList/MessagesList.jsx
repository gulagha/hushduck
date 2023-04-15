import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './messagesList.module.css';
import { MessageBubble } from '../message/MessageBubble';

export const MessagesList = ({ messages, selfId }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  let messagesList = messages.map((messageObject, index) => {
    const {
      message, userName, timestamp, senderId
    } = messageObject;
    
    return <MessageBubble
      key={index}
      message={message}
      userName={userName}
      timestamp={timestamp}
      selfId={1}
      senderId={senderId}
    />
    }
  );

  return (
    <div className={styles.messagesList}>
      {messagesList}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
      userName: PropTypes.string,
      timestamp: PropTypes.string,
      senderId: PropTypes.string 
    })),
};
