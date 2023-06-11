import React from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import {  GithubButton, ButtonDiv } from './styles';


export default function ButtonComponents() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/toast');
  };
  return (
    <ButtonDiv>
      <GithubButton onClick={handleClick}>
        <VscGithubInverted size={24} />
        Entrar com GitHub
      </GithubButton>
    </ButtonDiv>
  );

}