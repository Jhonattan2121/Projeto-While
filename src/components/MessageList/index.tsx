import React from 'react';
import { MessageList, MessageItem, MessageContent, MessageUser, LogoImage } from './styles';
import mockedMessages from '../../mock';
import logoImg from '../../assets/Logo DoWhile - 2021.svg';

type User = {
  avatar_url: string;
  name: string;
};

type Message = {
  id: number; // Corrigido para ser um número
  text: string;
  user: User;
};

const MessageListComponents: React.FC = () => {
  return (
    <>
      <LogoImage src={logoImg} alt="Logo" />

      <MessageList>
        {mockedMessages.map((message: Message) => (
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
    </>
  );
};

export default MessageListComponents;
