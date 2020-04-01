import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 50px;
    margin-bottom: 24px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  width: 100%;

  span {
    font-size: 22px;
    margin-left: 24px;
    color: #666;
  }

  img {
    height: 64px;
  }
`;

export const RegisterIncidenteButton = styled(Link)`
  border: none;
  background: #e02041;
  padding: 16px;
  border-radius: 8px;
  width: 260px;
  text-align: center;
  margin-left: auto;
  color: #fff;
  font-weight: bold;

  text-decoration: none;

  transition: background 0.2s;

  &:hover {
    background: ${darken(0.1, '#e02041')};
  }
`;

export const LogoutButton = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid #dcdce6;
  margin-left: 16px;

  transition: border-color 0.3s;

  &:hover {
    border-color: #999;
  }
`;

export const ListIncidents = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
  list-style: none;

  li {
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;

    strong {
      display: block;
      font-size: 14px;
      color: #41414d;
      margin-bottom: 8px;
    }

    p + strong {
      margin-top: 18px;
    }

    p {
      color: #737380;
      font-weight: 500;
      line-height: 21px;
      font-size: 18px;
    }

    button {
      position: absolute;
      right: 24px;
      top: 24px;
      border: 0;
      background: transparent;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
