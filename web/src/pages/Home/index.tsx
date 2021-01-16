import React from 'react';

import { Container } from './styles';
import ImageHome from '../../assets/imageHome.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <a href="sla.com">Logout</a>

      <h1>Você fez Login! ihee</h1>

      <img src={ImageHome} alt="imagem da home" />
    </Container>
  );
};

export default Home;
