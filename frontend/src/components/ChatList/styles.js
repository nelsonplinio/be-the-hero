import styled from 'styled-components';

export const Container = styled.div`
  ul {
    height: 100%;

    padding: 0;
    li {
      list-style: none;
      margin: 0;
      height: 40px;
      display: flex;

      align-items: center;
      padding: 18px;
      font-size: 22px;

      background: #fff;
      border-radius: 8px;

      transition: background 0.2s;

      cursor: pointer;

      & + li {
        border-top: solid 1px rgba(200, 200, 200, 0.5);
      }

      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;
