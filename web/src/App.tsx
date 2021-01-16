import React from 'react';
import Routes from './routes';

import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
