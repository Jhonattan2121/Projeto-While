import styled from "styled-components";

export const ModalInterface = styled.div`
  position: absolute;
  width: 453px;
  height: 578px;
  left: 1180px;
  top: 121px;

  background: #1B1B1F;

  margin-top: 16px;
  display: flex;
  align-items: center;

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

  .ImgBackButton {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}

.ImgBack {
  position: absolute;
  left: 6.1%;
  right: 38.68%;
  top: 4.68%;
  bottom: 78.41%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 4px solid transparent;
}

.Name {
  position: absolute;
  width: 204px;
  height: 30px;
  left: 120px;
  top: 216px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  /* identical to box height, or 125% */


  /* gray3 */

  color: #E1E1E6;
}

.Name-p {
  position: absolute;
  width: 95px;
  left: 187px;
  top: 253px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  /* identical to box height, or 100% */


  /* gray2 */

  color: #C4C4CC;
}

.Github-Name {
  position: absolute;
left: 0%;
right: 0%;
top: 1.04%;
bottom: 1.04%;


}
`


export const BackgroundRight = styled.div`
 
  right: 0;
  top: 0;
  overflow: hidden;

  .background {
    position: absolute;
    width: 473px;
    height: 936px;
    left: 1401px;
    top: 0;
    border-radius: 0;
  }

  
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TextInput = styled.input`
  position: absolute;
  width: 405px;
    height: 195px;
    left: 25px;
    top: 363px;
  background: #202024;
  font-family: 'Roboto', sans-serif;
  border: none;
  color: #8D8D99;
  padding-bottom: 180px;

  ::placeholder {
    color: #8D8D99;
  }
`;

export const MessageLabel = styled.strong`
   position: absolute;
  left: 60.76%;
  right: 32.22%;
  top: 103.85%;
  bottom: 45.73%;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  top: 324px;
  left: 25px;

  strong {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    padding: 13px 153px;
    
    background: #29292E;
}
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 64px;
  gap: 10px;
  position: absolute;
  width: 195px;
  height: 40px;
  left: 215px;
  top: 498px;
  background: #FF008E;
  
  p {
    position: absolute;
    color: #FFFFFF;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    text-transform: uppercase;
  }
`;
