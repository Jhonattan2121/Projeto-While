import background from '../../assets/background.png';
import back from '../../assets/back.png';
import { useNavigate } from 'react-router-dom';
import { BackgroundRight, Button, Container, MessageLabel, ModalInterface, TextInput } from './styled';
import { VscGithubInverted } from 'react-icons/vsc';
import imgFoto from '../../assets/Ellipse 4.svg';
import { useState } from 'react';

type PerfilComponentProps = {
  onSendMessage: (message: string) => void;
};

export const PerfilComponent = ({ onSendMessage }: PerfilComponentProps) => {
  const [newMessage, setNewMessage] = useState('');

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      return;
    }

    onSendMessage(newMessage);
    setNewMessage('');
  };

  return (
    <>
      <BackgroundRight>
        <img src={background} alt="" className="background" />
      </BackgroundRight>

      <ModalInterface>
        <button className="ImgBackButton" onClick={handleClick}>
          <img src={back} alt="" className="ImgBack" style={{ width: '45px', height: '45px' }} />
        </button>
        <div className="userImage">
          <img src={imgFoto} alt="" style={{ width: '125px', height: '125px' }} />
        </div>
        <strong className="Name">Tiago Luchtenberg</strong>

        <p className="Name-p">
          <VscGithubInverted size={18} /> tiago_luch
        </p>

        <Container>
          <MessageLabel>
            <strong>Mensagem</strong>
          </MessageLabel>
          <TextInput
            type="text"
            placeholder="Qual sua expectativa para o evento?"
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
          />

          <Button onClick={handleSendMessage}>
            <p>Enviar Mensagem</p>
          </Button>
        </Container>
      </ModalInterface>
    </>
  );
};
