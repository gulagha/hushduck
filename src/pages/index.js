import { useState } from 'react'
import Head from 'next/head'
import styles from './index.module.css';
import { MessageForm } from '@/components/messageForm/MessageForm'
import { MessagesList } from '@/components/messagesList/MessagesList'

export default function Home() {
  const [messages, setMessages] = useState([]);

  const onSend = (message) => {
    if(message.message) setMessages([...messages, message]);
  };

  return (
    <div className={styles.homeContainer}>
      <div />
      <div className={styles.chatContainer}>
        <img className={styles.logo} src='logo.png' />
        <div className={styles.chat}>
          <MessagesList selfId={1} messages={messages} />
          <MessageForm onSend={onSend} />
        </div>
      </div>
      <div />
    </div>
  )
}
