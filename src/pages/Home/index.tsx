
import {   LoginBox , GirBanner , Container  } from "./styles";

import ButtonComponents from '../../components/ButtonComponents';
import Girlbane from '../../assets/banner-girl.png';
import MessageListComponents from "../../components/MessageList";

export default function Home() {
  return (
    <Container>
      <LoginBox>
          <GirBanner className="girl">
            <img src={Girlbane} alt="" />
            <strong>Envie e compartilhe sua mensagem</strong>
          <ButtonComponents />
          </GirBanner>
        
     
      </LoginBox>
      
      <MessageListComponents  />
      
    </Container>
  )
}