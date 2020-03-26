import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1120px;
  margin: auto;
  height: 100vh;
`;

export const ImgHero = styled.img`
  width: 500px;
`;

export const Logo = styled.img`
  width: 220px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  padding: 22px;
  margin-right: 10%;
  flex: 1;
`;

export const UnForm = styled(Form)`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
`;

export const Label = styled.strong`
  font-size: 30px;
  color: #555;
  margin-bottom: 28px;
`;

export const SignUpLink = styled(Link)`
  margin-top: 18px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #888;
  font-size: 20px;
  transition: color 0.2s;

  &:hover {
    color: ${lighten(0.1, '#e02041')};
  }
`;
