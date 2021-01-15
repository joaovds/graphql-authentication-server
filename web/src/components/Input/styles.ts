import styled, { css } from 'styled-components';

interface InputBodyProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div`
  min-width: 310px;
  width: 100%;

  & + div {
    margin-top: 20px;
  }

  > span {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const InputBody = styled.div<InputBodyProps>`
  width: 100%;
  padding: 12px 15px;
  margin-top: 4px;
  border-radius: 15px;

  display: flex;
  justify-content: initial;
  align-items: center;
  flex-shrink: 1;

  background: var(--in-background);
  border: 2px solid var(--in-background);
  color: var(--text-color);

  > svg {
    fill: #555555;
    margin-right: 10px;
  }

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--primary-color);
      > svg {
        fill: var(--primary-color);
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      > svg {
        fill: var(--primary-color);
      }
    `}

  input {
    flex: 1;
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: var(--text-color);

    background: transparent;
    border: none;

    &::placeholder {
      color: #555555;
    }
  }
`;
