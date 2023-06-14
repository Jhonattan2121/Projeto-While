import React, { useState } from 'react';
import { MessageContent, MessageItem, MessageList, MessageUser, LogoImage, Container } from './styles';
import Cara from '../../assets/carinha.svg';
import logoImg from '../../assets/Logo DoWhile - 2021.svg';
import PerfilComponent from '../../components/PerfilComponent';

interface Message {
  id: string;
  text: string;
  user: {
    avatar_url: string;
    name: string;
  };
}

export default function Toast() {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (message: string) => {
    const newMessageObject: Message = {
      id: Math.random().toString(36).substring(2, 7),
      text: message,
      user: {
        avatar_url: `${Cara}`,
        name: 'Tiago Luchtenberg',
      },
    };

    const updatedMessages = [...messages, newMessageObject].slice(-3);
    setMessages(updatedMessages);
  };

  return (
    <Container>
      <LogoImage src={logoImg} alt="" />

      <MessageList>
        {messages.map((message) => (
          <MessageItem key={message.id}>
            <MessageContent>
              <div>{message.text}</div>
              <MessageUser>
                <div className="userImage">
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </div>
                <span>{message.user.name}</span>
              </MessageUser>
            </MessageContent>
          </MessageItem>
        ))}
      </MessageList>

      <PerfilComponent onSendMessage={addMessage} />
    </Container>
  );
}
