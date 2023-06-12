import React, { useState } from 'react';
import { MessageContent, MessageItem, MessageList, MessageUser, LogoImage } from './styles';

import logoImg from '../../assets/Logo DoWhile - 2021.svg';
import { PerfilComponent } from '../../components/PerfilComponent';
import mockedMessages from '../../mock'; 

export default function Toast() {
  const [messages, setMessages] = useState(mockedMessages);

  const addMessage = (newMessage: string) => {
    const newMessageObject = {
      id: messages.length + 1,
      text: newMessage,
      user: {
        avatar_url: messages[0].user.avatar_url,
        name: messages[0].user.name,
      },
    };

    const updatedMessages = [...messages, newMessageObject];

    if (updatedMessages.length > 3) {
      updatedMessages.shift();
    }

    setMessages(updatedMessages);
  };

  return (
    <>
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

    </>
  );
}
