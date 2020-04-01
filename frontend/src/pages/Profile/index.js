import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';
import DefaultLayout from '../_layout/default';
import { ListIncidents, ChatButton } from './styles';

export default function Profile() {
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

  return (
    <DefaultLayout>
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

            <ChatButton to={`/chats/${incident.id}`}>Conversas</ChatButton>

            <button
              type="button"
              onClick={() => handleIncidentDelete(incident.id)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ListIncidents>
    </DefaultLayout>
  );
}
