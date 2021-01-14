import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --primary-color: #F9A826;
  --background-color: #121212;
  --text-color: #F9F9F9;
}

* {
  margin: 0;
  padding: 0%;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: var(--background-color);
  -webkit-font-smoothing: antialiased;
  color: var(--text-color);
}

body, input, button {
  font-family: Roboto, Arial, sans-serif;
}

button {
  cursor: pointer;
}
`;
