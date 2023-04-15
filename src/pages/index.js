import { useState } from 'react'
import Head from 'next/head'
import styles from './index.module.css';
import { MessageForm } from '@/components/messageForm/MessageForm'
import { MessagesList } from '@/components/messagesList/MessagesList'
import { IntroMessage } from '@/components/introMessage/IntroMessage';

export default function Home() {
  const [messages, setMessages] = useState([]);

  const onSend = (message) => {
    if(message.message) setMessages([...messages, message]);
  };

  const renderMessages = () => {
    if(messages.length === 0) return <IntroMessage />
    return <MessagesList selfId={1} messages={messages} /> 
  }

  return (
    <div className={styles.homeContainer}>
      <div />
      <div className={styles.chatContainer}>
        <img className={styles.logo} src='logo.png' />
        <div className={styles.chat}>
          {renderMessages()}
          <MessageForm onSend={onSend} />
        </div>
      </div>
      <div />
    </div>
  )
}
