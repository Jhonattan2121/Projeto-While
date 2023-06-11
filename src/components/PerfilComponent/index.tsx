import background from '../../assets/background.png'
import back from '../../assets/back.png' 
import { useNavigate } from 'react-router-dom';
import { BackgroundRight, Button, Container, MessageLabel, ModalInterface, TextInput } from './styled'
import { VscGithubInverted } from 'react-icons/vsc'
import imgFoto from '../../assets/Ellipse 4.svg';
export const PerfilComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <>
    <BackgroundRight>
      <img src={background} alt="" className="background" />
    </BackgroundRight>

    <ModalInterface>
        
    <button className="ImgBackButton" onClick={handleClick}>
          <img src={back} alt="" className="ImgBack" style={{width: '45px' , height: '45px'}} />
    </button>

        <div className='userImage'>
        <img src={imgFoto} alt="" style={{width: '125px' , height: '125px'}} />
        </div>
      <strong className='Name'>Tiago Luchtenberg</strong>
     
      <p className='Name-p'><VscGithubInverted  size={18}  /> tiago_luch</p>

      <Container>
      <MessageLabel><strong>Messagem</strong></MessageLabel>
      <TextInput type="text" placeholder="Qual sua expectativa para o evento?" />
      <Button><p>Enviar Mensagem</p></Button>
    </Container>
    </ModalInterface>
  </>
)
}
