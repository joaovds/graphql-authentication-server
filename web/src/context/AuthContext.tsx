import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface LoginCredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  name: string;
  login(credentials: LoginCredentials): Promise<void>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const login = useCallback(async ({ email, password }) => {
    const { data } = await api({
      method: 'post',
      data: {
        query: `
          mutation ($email: String!, $password: String!) {
            login(
              email: $email,
              password: $password
            ) {
              token
              user {
                name
              }
            }
          }
        `,
        variables: {
          email,
          password,
        },
      },
    });
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'John', login }}>
      {children}
    </AuthContext.Provider>
  );
};
