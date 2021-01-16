import React from 'react';
import Routes from './routes';

import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'John' }}>
      <Routes />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
