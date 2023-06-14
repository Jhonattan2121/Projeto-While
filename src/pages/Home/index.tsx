import React from 'react';
import { LoginBox, GirBanner, Container } from './styles';
import ButtonComponents from '../../components/ButtonComponents';
import Girlbane from '../../assets/banner-girl.png';
import MessageListComponents from '../../components/MessageList';

const Home: React.FC = () => {
  return (
    <Container>
      <LoginBox>
        <GirBanner>
          <img src={Girlbane} alt="" />
          <strong>Envie e compartilhe sua mensagem</strong>
          <ButtonComponents />
        </GirBanner>
      </LoginBox>
      <MessageListComponents />
    </Container>
  );
};

export default Home;
