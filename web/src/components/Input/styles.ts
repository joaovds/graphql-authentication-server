import styled from 'styled-components';

export const Container = styled.div`
  min-width: 310px;
  width: 100%;
  padding: 12px 15px;
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

  & + div {
    margin-top: 20px;
  }

  input {
    flex: 1;
    width: 100%;
    font: 18px Roboto normal;
    color: var(--text-color);
    background: transparent;
    border: none;

    &::placeholder {
      color: #555555;
    }
  }
`;
