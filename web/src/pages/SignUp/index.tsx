import React from 'react';

import { MdMailOutline, MdLockOutline, MdPersonOutline } from 'react-icons/md';

import Input from '../../components/Input';
import { ArrowIcon, Container, Form } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Form>
        <h1>Cadastro</h1>

        <Input text="Nome" name="name" icon={MdPersonOutline} />
        <Input
          text="E-mail"
          name="email"
          placeholder="email@exemplo.com"
          type="email"
          icon={MdMailOutline}
        />
        <Input
          text="Senha"
          name="password"
          type="password"
          icon={MdLockOutline}
        />

        <button type="submit">Finalizar</button>

        <a href="sla.com">
          <ArrowIcon />
          Voltar para login
        </a>
      </Form>
    </Container>
  );
};

export default SignUp;
