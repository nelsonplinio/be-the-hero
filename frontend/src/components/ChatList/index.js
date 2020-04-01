import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import api from '../../services/api';

import { Container } from './styles';

export default function ChatList({ incidentId, style, onChatClick }) {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    async function loadChats() {
      const owner = localStorage.getItem('ongID');
      const response = await api.get(`/messages/${owner}/chat/${incidentId}`, {
        params: {
          fromWeb: true,
        },
      });

      setChats(response.data);
      const [first = {}] = response.data;
      onChatClick(first);
    }

    loadChats();
  }, [incidentId]);
  return (
    <Container style={style}>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id} onClick={() => onChatClick(chat)}>
            {chat.name}
          </li>
        ))}
      </ul>
    </Container>
  );
}

ChatList.propTypes = {
  incidentId: PropTypes.number.isRequired,
  onChatClick: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

ChatList.defaultProps = {
  style: {},
};
