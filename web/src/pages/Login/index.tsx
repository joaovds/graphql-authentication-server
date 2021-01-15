import React from 'react';

import { MdMailOutline, MdLockOutline } from 'react-icons/md';

import Input from '../../components/Input';
import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <a href="sla.com">Cadastrar-se</a>

      <form>
        <h1>Login</h1>

        <Input
          name="email"
          placeholder="email@exemplo.com"
          icon={MdMailOutline}
        />
        <Input name="password" type="password" icon={MdLockOutline} />

        <button type="button">Entrar</button>
      </form>
    </Container>
  );
};

export default Login;
