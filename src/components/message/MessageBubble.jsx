import React from 'react';
import PropTypes from 'prop-types';
import styles from './messageBubble.module.css';
import classnames from 'classnames'

export const MessageBubble = ({ userName, message, timestamp, senderId, selfId}) => {
  const isOwnMessage = senderId == selfId;
  const time = `${new Date(timestamp).getHours()}:${new Date(timestamp).getMinutes()}`;
  const bubbleClassName = classnames(styles.message, {
    [styles.ownMessage]: isOwnMessage,
  });


  return(<div className={bubbleClassName}>
    {
      !isOwnMessage
        ? (
          <div className={styles.userName}>
            {userName}
          </div>
        )
        : null
    }
      <div className={styles.messageContent}>
        {message}
      </div>
      <div className={styles.timestamp}>
        {time}
      </div>
    </div>)
}

MessageBubble.propTypes = {
  message: PropTypes.string,
  userName: PropTypes.string,
  timestamp: PropTypes.string,
  senderId: PropTypes.string,
  selfId: PropTypes.string
};