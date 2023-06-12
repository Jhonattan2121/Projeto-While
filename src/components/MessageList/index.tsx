import React from 'react';
import { MessageList, MessageItem, MessageContent, MessageUser, LogoImage } from "./styles";
import mockedMessages from '../../mock'; 
import logoImg from '../../assets/Logo DoWhile - 2021.svg';

export const MessageListComponents = () => (
  <>
    <LogoImage src={logoImg} alt="" />
    
    <MessageList>
      {mockedMessages.map((message) => ( 
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

export default MessageListComponents;
