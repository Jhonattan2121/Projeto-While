import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
    width: 1440px;
    height: 820px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
  `


export const LoginBox = styled.div`
  position: absolute;
  height: 100vh;
    width: 100%;
   padding: 440px 80px 0;
  text-align: center;
  right: -553px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  
  
  transform: translateX(-50%);

  @media screen and (max-width: 768px) {
    padding: 200px 40px 0;
  }

  strong {
    font-size: 32px;
    line-height: 36px;
  }
`;

export const GirBanner = styled.div`
  
  position: absolute;
  width: 463px;
  height: 935px;
  left: 1200px;
  top: 0px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    left: 0;
    top: 0;
    background-size: cover;
  }
`;

export const Strong = styled.strong`
  font-size: 32px;
  line-height: 36px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`;
