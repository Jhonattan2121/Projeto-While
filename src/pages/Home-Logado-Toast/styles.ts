import styled from 'styled-components';

export const Strong = styled.strong`
   font-size: 32px;
  line-height: 36px;
`;


export const LogoImage = styled.img`
  position: absolute;
width: 280px;
height: 24px;
left: 190px;
top: 32px;
 
`;

export const MessageList = styled.ul`
  position: absolute;
  list-style: none;
  position: absolute;
  width: 520px;
  height: 472px;
  left: 380px;
  top: 202px;
`;

export const MessageItem = styled.li`
  max-width: 440px;
  
  padding: 24px;
  border-radius: 20px;

  &:nth-child(2) {
    margin-left: 80px;
  }
`;

export const MessageContent = styled.span`
  font-size: 20px;
  line-height: 28px;
`;

export const MessageUser = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  .userImage {
    padding: 2px;
    background: linear-gradient(100deg, #ff008e 0.48%, #ffcd1e 100%);
    border-radius: 50%;
    line-height: 0;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 4px solid #121214;
    }
  }

  span {
    font-size: 16px;
    margin-left: 12px;
  }
`;



