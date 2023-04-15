import React from 'react';
import PropTypes from 'prop-types';
import styles from './introMessage.module.css';
import Image from 'next/image'

export const IntroMessage = () => {
  return (
    <div className={styles.introMessage}>
      <div className={styles.moto}> 
        <div> Unlocking Insights </div>
        <div> Through Self-Dialogue </div>
      </div>
      <div className={styles.step}> 
        <span className={styles.bold}> 
          🎯 Identify the challenge
        </span>
        <span className={styles.normal}> 
          Identify a topic or challenge you&apos;d like to explore during your self-dialogue session.
        </span>
      </div>
      <div className={styles.step}> 
        <span className={styles.bold}> 
          💬 Start the Conversation
        </span>
        <span className={styles.normal}> 
          Begin your self-dialogue by typing a message from one perspective
        </span>
      </div>
      <div className={styles.step}> 
        <span className={styles.bold}> 
          🧘🏻 Engage in Self-Dialogue: 
        </span>
        <span className={styles.normal}> 
          Continue the conversation by responding to your own messages, exploring your thoughts and feelings in depth.
        </span>
      </div>
    </div>
  );
}

IntroMessage.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  onClick: PropTypes.func
};