import React, { useMemo } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  RegisterIncidenteButton,
  LogoutButton,
} from './styles';

import logo from '../../assets/logo.svg';

export default function DefaultLayout({ children }) {
  const history = useHistory();
  const ongName = useMemo(() => localStorage.getItem('ongName'), []);

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }
  return (
    <Container>
      <Header>
        <Link to="/profile">
          <img src={logo} alt="be the hero" />
        </Link>
        <span>Bem vindo, {ongName}</span>

        <RegisterIncidenteButton to="/incidents/new">
          Cadastrar novo caso
        </RegisterIncidenteButton>
        <LogoutButton onClick={handleLogout}>
          <FiPower size={19} color="#e02051" />
        </LogoutButton>
      </Header>

      {children}
    </Container>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.func.isRequired,
};
