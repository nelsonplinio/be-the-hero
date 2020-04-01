import styled from 'styled-components';
import { Form } from '@unform/web';
import { lighten } from 'polished';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Input from '../Input';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border-left: solid 1px rgba(200, 200, 200, 0.2);
  padding-left: 16px;
  margin-left: 16px;
  strong {
    font-size: 22px;
    margin-bottom: 18px;
  }

  div {
    margin-top: auto;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  /* height: 55%; */
  max-height: 300px;
  /* flex: 1 !important; */
  border-bottom: solid 1px rgba(200, 200, 200, 0.3);
`;

export const Title = styled.strong``;
export const MessagesList = styled.ul`
  list-style: none;
  padding-bottom: 8px;
`;
export const Message = styled.li`
  padding: 16px;
  max-width: 50%;
  border-radius: 8px;
  margin-bottom: 8px;

  font-weight: bold;

  margin-left: ${({ me }) => me && 'auto'};
  background: ${({ me }) => (me ? lighten(0.3, '#e02041') : '#f1f1f1')};
`;
export const SendBox = styled(Form)`
  display: flex;
  align-items: center;

  button {
    width: 60px;
    height: 60px;

    background: transparent;
    border: 0;
    margin-left: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const UnInput = styled(Input)``;
