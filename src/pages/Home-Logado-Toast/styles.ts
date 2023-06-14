import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 1440px;
  height: 820px;
    margin: 0 auto;
    display: contents;
    
    align-items: center;
    justify-content: center;

  `

export const Strong = styled.strong`
  font-size: 32px;
  line-height: 36px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const LogoImage = styled.img`
  position: absolute;
  width: 280px;
  height: 24px;
  left: 30%;
  transform: translateX(-50%);
  top: 32px;

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 18px;
    top: 16px;
  }
`;

export const MessageList = styled.ul`
  position: absolute;
    list-style: none;
    width: 520px;
    height: 472px;
    left: 34%;
    transform: translateX(-50%);
    top: 165px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 16px;
    box-sizing: border-box;
    top: 120px;
  }
`;

export const MessageItem = styled.li`
  max-width: 440px;
  padding: 24px;
  border-radius: 20px;

  &:nth-child(2) {
    margin-left: 80px;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 16px;
    border-radius: 10px;

    &:nth-child(2) {
      margin-left: 0;
    }
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

  @media screen and (max-width: 768px) {
    margin-top: 8px;

    .userImage {
      padding: 1px;
    }

    img {
      width: 24px;
      height: 24px;
      border-width: 2px;
    }

    span {
      font-size: 14px;
      margin-left: 8px;
    }
  }
`;

export const InputContainer = styled.div``;

export const InputText = styled.text``;

export const SendButton = styled.div``;
