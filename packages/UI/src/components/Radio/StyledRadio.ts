import styled from 'styled-components';

export const Option = styled.label`
  background: #fff;
  font-family: ${({ theme }) => theme.fonts.normal};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  width: fit-content;
  position: relative;
  overflow: hidden;
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

  border-radius: 24px;
  border: 1px solid black;
  outline: none;
  cursor: pointer;

  &:checked {
    border: 2px solid black;
    position: relative;

    &::before {
      content: '';
      height: 16px;
      width: 16px;
      border-radius: 16px;
      background: black;
      position: absolute;
      left: 2px;
      top: 2px;
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
