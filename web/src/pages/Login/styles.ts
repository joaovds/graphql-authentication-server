import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > a {
    position: absolute;
    top: 30px;
    right: 100px;

    font: 16px roboto normal 500;
    color: var(--primary-color);
    text-decoration: none;

    padding: 12px 20px;
    border: 2px solid var(--primary-color);
    border-radius: 10px;

    &:hover {
      border-color: var(--text-color);
      background: var(--primary-color);
      color: var(--text-color);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h1 {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 42px;
      line-height: 49px;

      margin-bottom: 30px;
    }
  }
`;
