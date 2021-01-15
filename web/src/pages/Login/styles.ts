import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  position: absolute;
  top: 40px;

  width: 100%;

  a {
    float: right;
    margin-right: 100px;

    font: 16px roboto normal 500;
    color: var(--primary-color);
    text-decoration: none;

    padding: 12px 20px;
    border: 2px solid var(--primary-color);
    border-radius: 10px;

    transition: 0.3s;

    &:hover {
      border-color: var(--text-color);
      background: var(--primary-color);
      color: var(--text-color);
    }
  }
`;

export const Form = styled.form`
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

  > button {
    min-width: 310px;
    width: 100%;
    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    background: transparent;
    border: 2px solid var(--primary-color);
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: var(--primary-color);

    border: 2px solid var(--primary-color);
    border-radius: 50px 4px;

    margin-top: 50px;

    transition: 0.3s;

    &:hover {
      background: var(--primary-color);
      border-color: var(--text-color);
      color: var(--text-color);
    }
  }
`;
