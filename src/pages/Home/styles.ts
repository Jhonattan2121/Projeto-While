import styled from 'styled-components';

import Girlbane from '../../assets/banner-girl.png';

export const LoginBox = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;

  padding: 380px 80px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  strong {
    font-size: 32px;
    line-height: 36px;
  }
 
`;

export const GirBanner = styled.div`
    background: #17171a url(${Girlbane}) no-repeat center top ;
    

      position: absolute;
      width: 463px;
      height: 935px;
      left: 1200px;
      top: 0px;
      
  

`

export const Strong = styled.strong`
   font-size: 32px;
  line-height: 36px;
`;














