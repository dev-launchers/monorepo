import styled from 'styled-components';

export const Option = styled.label`
  font-family: ${({ theme }) => theme.fonts.normal};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  width: fit-content;
  background: #fff;
  z-index: 1;

  &:hover {
    box-shadow: 1px 1px 4px #7f7e7f;
  }
`;

export const Input = styled.input`
  height: 24px;
  width: 24px;

  -webkit-appearance: none;
  appearance: none;

  border-radius: 3px;
  border: 2px solid black;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: black;
    position: relative;

    &::before {
      content: '✔';
      font-size: 1.2em;
      color: #fff;
      position: absolute;
      left: 2px;
      top: 0px;
    }
  }

  &:disabled {
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      background: #eee;
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;
