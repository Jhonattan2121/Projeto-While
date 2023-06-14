import styled from 'styled-components';

export const ModalInterface = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  .modal {
    display: flex;
    position: fixed;
    width: 453px;
    height: 578px;
    right: 67px;
    top: 121px;
  background: #1B1B1F;
}

.ImgBack {
  position: absolute;
  left: 6.1%;
  right: 38.68%;
  top: 4.68%;
  bottom: 78.41%;
  width: 45px;
  height: 45px;
  
  border: 4px solid transparent;
}

.userImage {
    position: absolute;
    padding: 2px;
    background: linear-gradient(100deg, #ff008e 0.48%, #ffcd1e 100%);
    border-radius: 50%;
    line-height: 0;
    top: 76px;
    left: 163px;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 4px solid #121214;
    }
  }

  .Send-p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 32px;
    gap: 10px;
    color: #FFFFFF;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    position: absolute;
    width: 195px;
    height: 40px;
    right: 38px;
    top: 505px;
    background: #FF008E;
  }

.Name {
  position: absolute;
  right: 119px;
  top: 212px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
}

.Name-p {
  position: absolute;
  width: 95px;
  left: 187px;
  top: 250px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #C4C4CC;
}

.MessageLabel {
  position: absolute;
  width: 405px;
  height: 64px;
   background: #29292E;;
  right: 25px;
  top: 278px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 60px;
  padding-left: 20px;
  color: #E1E1E6;

}

input {
  position: absolute;
  width: 405px;
  height: 220px;
  right: 25px;
  top: 338px;
  background: #202024;
  color: #8D8D99;
  font-size: 22px; 
  padding-bottom: 160px;
  padding-left: 10px;
  ::placeholder {
    color: #8D8D99;
    font-family: Roboto;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 0em;
    padding-left: 10px;
    position: absolute;
    width: 256px;
    height: 24px;
    top: 20px;
  }
}

.SendMessageButton {
  align-self: flex-end;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

`

export const Sidebar = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  
  overflow: hidden;
  

  .background {
    position: fixed;
    height: 100vh;
    width: 620px;
    border-radius: 0;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    right: -123px;
    top: 0;
  }
`;

export const SuccessModal = styled.div`
  position: fixed;
  top: 5%;
  left: 85%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background: #1B873F;
  color: #fff;
`;


 