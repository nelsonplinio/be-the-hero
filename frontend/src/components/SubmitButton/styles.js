import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button.attrs({
  type: 'submit',
})`
  border: none;
  background: ${({ light }) => (light ? '#fff' : '#e02041')};
  margin-top: 16px;

  height: 55px;
  border-radius: 8px;
  color: ${({ light }) => (light ? '#333' : '#fff')};
  font-weight: bold;

  transition: background 0.2s;

  border: ${({ light }) => light && 'solid 1px #999'};

  &:hover {
    background: ${({ light }) => darken(0.1, light ? '#fff' : '#e02041')};
  }
`;
