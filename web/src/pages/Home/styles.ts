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
    align-self: flex-end;
    margin: 0 100px 30px 0;

    color: var(--primary-color);
    text-decoration: none;
    padding: 8px 12px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;

    border: 2px solid var(--primary-color);
    border-radius: 8px;

    transition: 0.3s;

    &:hover {
      background: var(--primary-color);
      color: var(--text-color);
      border-color: var(--text-color);
    }

    @media (max-width: 775px) {
      align-self: center;
      margin-right: 0;
    }
  }

  > h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 75px;
    text-align: center;

    color: var(--primary-color);
    margin-bottom: 30px;

    @media (max-width: 500px) {
      font-size: 48px;
    }
  }

  > img {
    width: 60vw;

    @media (max-width: 500px) {
      width: 80vw;
    }
  }
`;
