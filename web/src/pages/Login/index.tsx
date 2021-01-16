import React from 'react';

import { MdMailOutline, MdLockOutline } from 'react-icons/md';

import Input from '../../components/Input';
import { Container, Form, ArrowIcon } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Form>
        <h1>Login</h1>

        <Input
          text="E-mail"
          name="email"
          placeholder="email@exemplo.com"
          icon={MdMailOutline}
        />
        <Input
          text="Senha"
          name="password"
          type="password"
          icon={MdLockOutline}
        />

        <button type="submit">Entrar</button>

        <a href="sla.com">
          Criar conta
          <ArrowIcon />
        </a>
      </Form>
    </Container>
  );
};

export default Login;
