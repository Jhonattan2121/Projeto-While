import { MessageContent, MessageItem, MessageList,  MessageUser , LogoImage } from "./styles";
import imgFoto from '../../assets/Ellipse 4.svg'
import logoImg from '../../assets/Logo DoWhile - 2021.svg';
import { PerfilComponent } from "../../components/PerfilComponent";


const messages = [
  {
    id: 1,
    text: 'Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥',
    user: {
      avatar_url: `${imgFoto}`,
      name: 'Dianne Russell'
    }
  },
  {
    id: 2,
    text: 'Esse vai ser simplesmente fantástico! Bora aprender tudo em relação a montagem de APIs GraphQL. Sem contar com as palestras e painéis.',
    user: {
      avatar_url: `${imgFoto}`,
      name: 'Guy Hawkins'
    }
  },
  {
    id: 3,
    text: 'Sem dúvida as palestras vão ser úteis para a minha carreira e para a de muitos 😍 #gorocket',
    user: {
      avatar_url: `${imgFoto}`,
      name: 'Eleanor Pena'
    }
  }
];
export default function  toast() {
  return (
    <>
       <LogoImage src={logoImg} alt="" />
    
      <MessageList>
        {messages.map((message) => (
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

          <PerfilComponent />
    </>
  )
}