import { shade } from 'polished';
import { MdArrowBack } from 'react-icons/md';
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

  > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: flex-start;
    margin-top: 30px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;

    text-decoration: none;
    color: var(--primary-color);

    &:hover {
      color: ${shade(0.4, '#F9A826')};
    }
  }
`;

export const ArrowIcon = styled(MdArrowBack)`
  width: 20px;
  height: 20px;
  margin-left: 4px;
`;
