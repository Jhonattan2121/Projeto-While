import styled from "styled-components";

export const MessageContent = styled.span`
  font-size: 20px;
  line-height: 28px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
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

export const MessageList = styled.ul`
      position: absolute;
    list-style: none;
    width: 520px;
    height: 472px;
    left: 23%;
    top: 173px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    left: 16px;
    top: 16px;
    padding: 16px;
    box-sizing: border-box;
  }
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

export const LogoImage = styled.img`
  position: absolute;
    width: 280px;
    height: 24px;
    left: 24%;
    top: 6%;

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 18px;
    left: 16px;
    top: 16px;
  }
`;
