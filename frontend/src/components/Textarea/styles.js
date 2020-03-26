import styled from 'styled-components';

export const UnTextarea = styled.textarea`
  background: #fff;
  border: 1px solid rgba(200, 200, 200, 0.8);
  border-radius: 8px;
  font-weight: bold;
  width: 100%;

  resize: vertical;
  min-height: 160px;
  max-height: 280px;

  color: #666;
  padding: 16px;

  &::placeholder {
    color: #999;
  }
`;
