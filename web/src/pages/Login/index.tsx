import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
  useState,
} from 'react';

import { MdMailOutline, MdLockOutline } from 'react-icons/md';
import Input from '../../components/Input';
import { Container, Form, ArrowIcon } from './styles';

import { AuthContext } from '../../context/AuthContext';

const Login: React.FC = () => {
  const [inputData, setInputData] = useState({
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

  const { login } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const { email, password } = inputData;

      login({
        email,
        password,
      });
    },
    [login, inputData],
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>

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
