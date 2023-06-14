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



  strong {
    font-size: 32px;
    line-height: 36px;
  }
`;

export const GirBanner = styled.div`
  position: fixed;
  height: 100vh;
    width: 446px;
    border-radius: 0px;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    right: -166px;
    top: 0px;
`;

export const Strong = styled.strong`
  font-size: 32px;
  line-height: 36px;

  
`;
