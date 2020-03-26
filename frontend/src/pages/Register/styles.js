import styled from 'styled-components';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

import Input from '../../components/Input';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1120px;
  margin: auto;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1080px;
  margin: auto;
  border-radius: 8px;
  padding: 70px 26px;

  align-items: center;
  justify-content: flex-start;
  background: #f9f9f9;

  box-shadow: 18px 18px 28px rgba(150, 150, 150, 0.5),
    -18px -18px 28px rgba(200, 200, 200, 0.5);
`;

export const Logo = styled.img`
  width: 220px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;

  & + & {
    margin-left: 32px;
  }

  h1 {
    color: #333;
    font-size: 32px;
    margin: 64px 0 32px;
  }

  span {
    font-size: 18px;
    color: #737380;
    line-height: 32px;
  }
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 64px;
  font-weight: bold;
  text-decoration: none;
  color: #888;
  font-size: 20px;
  transition: color 0.2s;
  svg {
    margin-right: 8px;
  }

  &:hover {
    color: ${lighten(0.1, '#e02041')};
  }
`;

export const UnForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;

  input + input {
    background: red;
    margin-bottom: 16px;
  }
`;

export const UnInput = styled(Input)`
  margin-bottom: 8px;
`;

export const FormSection = styled.div`
  display: flex;
`;

export const OngID = styled.strong`
  font-size: 28px;
  margin-top: 12px;
  text-align: center;

  visibility: ${({ show }) => !show && 'hidden'};
  span {
    display: block;
    font-size: 14px;
  }
`;
