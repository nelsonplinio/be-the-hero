import React, { useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import {
  Container,
  Header,
  RegisterIncidenteButton,
  LogoutButton,
  ListIncidents,
} from './styles';

export default function Profile() {
  const history = useHistory();
  const ongName = useMemo(() => localStorage.getItem('ongName'), []);
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    async function loadIncidents() {
      const response = await api.get('profile');
      setIncidents(
        response.data.map((incident) => ({
          ...incident,
          valueFormatted: Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(incident.value),
        }))
      );
    }

    loadIncidents();
  }, []);

  async function handleIncidentDelete(id) {
    await api.delete(`/incidents/${id}`);

    setIncidents(incidents.filter((incident) => incident.id !== id));
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="be the hero" />
        <span>Bem vindo, {ongName}</span>

        <RegisterIncidenteButton to="/incidents/new">
          Cadastrar novo caso
        </RegisterIncidenteButton>
        <LogoutButton onClick={handleLogout}>
          <FiPower size={19} color="#e02051" />
        </LogoutButton>
      </Header>

      <h1>Casos cadastrados</h1>

      <ListIncidents>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>{incident.valueFormatted}</p>

            <button
              type="button"
              onClick={() => handleIncidentDelete(incident.id)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ListIncidents>
    </Container>
  );
}
