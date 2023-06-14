import React, { ReactElement } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import { GithubButton, ButtonDiv } from './styles';

export default function ButtonComponents(): ReactElement {
  const navigate = useNavigate();

  const handleClick = (): void => {
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
