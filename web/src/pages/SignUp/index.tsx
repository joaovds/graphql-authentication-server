import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';

import { MdMailOutline, MdLockOutline, MdPersonOutline } from 'react-icons/md';

import Input from '../../components/Input';
import { ArrowIcon, Container, Form } from './styles';

const SignUp: React.FC = () => {
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setInputData({ ...inputData, [name]: value });
    },
    [inputData],
  );

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Cadastro</h1>

        <Input
          text="Nome"
          name="name"
          onChange={handleInputChange}
          icon={MdPersonOutline}
        />
        <Input
          text="E-mail"
          name="email"
          placeholder="email@exemplo.com"
          type="email"
          onChange={handleInputChange}
          icon={MdMailOutline}
        />
        <Input
          text="Senha"
          name="password"
          type="password"
          onChange={handleInputChange}
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
