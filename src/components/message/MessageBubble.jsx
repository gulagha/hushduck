import React from 'react';
import PropTypes from 'prop-types';
import styles from './messageBubble.module.css';
import classnames from 'classnames'

export const MessageBubble = ({ userName, message, timestamp, isNameShown, isOwnMessage }) => {
  const bubbleClassName = classnames(styles.message, {
    [styles.ownMessage]: isOwnMessage,
  });

  return(<div className={bubbleClassName}>
    {
      isNameShown && !isOwnMessage
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
        {timestamp}
      </div>
    </div>)
}

MessageBubble.propTypes = {
  message: PropTypes.string,
  userName: PropTypes.string,
  timestamp: PropTypes.string,
  isNameShown: PropTypes.bool,
  isOwnMessage: PropTypes.bool
};