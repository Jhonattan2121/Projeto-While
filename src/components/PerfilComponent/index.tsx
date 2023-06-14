import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { VscGithubInverted } from 'react-icons/vsc';
import background from '../../assets/background.png';
import back from '../../assets/back.png';
import Cara from '../../assets/carinha.svg';
import {
  ModalInterface,
  Sidebar,
  Container,
  SuccessModal,
} from './styled';

type PerfilComponentProps = {
  onSendMessage: (message: string) => void;
};

const PerfilComponent: React.FC<PerfilComponentProps> = ({ onSendMessage }) => {
  const [newMessage, setNewMessage] = useState<string>('');
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate('/');
  };

  const handleSendMessage = (): void => {
    if (newMessage.trim() === '') {
      return;
    }

    onSendMessage(newMessage);
    setNewMessage('');
    setShowSuccessModal(true);
  };

  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => {
        setShowSuccessModal(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showSuccessModal]);

  return (
    <>
      <Sidebar>
        <img src={background} alt="Background" className="background" />
      </Sidebar>

      <ModalInterface>
        <Container>
          <div className="modal">
            <button onClick={handleClick}>
              <img src={back} alt="Back" className="ImgBack" />
            </button>
            <div className="userImage">
              <img src={Cara} alt="User" style={{ width: '125px', height: '125px' }} />
            </div>
            <strong className="Name">Tiago Luchtenberg</strong>

            <p className="Name-p">
              <VscGithubInverted size={18} style={{ marginRight: '10px' }} />
              tiago_luch
            </p>

            <strong className="MessageLabel">Mensagem</strong>

            <input
              type="text"
              placeholder="Qual sua expectativa para o evento?"
              value={newMessage}
              onChange={(event) => setNewMessage(event.target.value)}
            />

            <button onClick={handleSendMessage}>
              <p className="Send-p">Enviar Mensagem</p>
            </button>
          </div>
        </Container>
      </ModalInterface>

      {showSuccessModal && (
        <SuccessModal>
          <p>Mensagem enviada com sucesso!</p>
        </SuccessModal>
      )}
    </>
  );
};

export default PerfilComponent;
