import React, { useRef, useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { MdSend } from 'react-icons/md';
import socketio from 'socket.io-client';
import api from '../../services/api';

import {
  Container,
  MessagesList,
  Message,
  Title,
  SendBox,
  UnInput,
  Scroll,
} from './styles';

export default function ChatRoom({ incidentId, chat }) {
  const msgRef = useRef(null);
  const formRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const owner = useMemo(() => localStorage.getItem('ongID'), []);

  const socket = useMemo(
    () =>
      socketio('http://localhost:3333', {
        query: {
          user_id: owner,
        },
      }),
    [owner]
  );

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages([...messages, msg]);
    });
  }, [socket, messages]);

  useEffect(() => {
    async function loadMessages() {
      const response = await api.get(
        `/messages/${owner}/chat/${chat.hero_cpf}/${incidentId}`,
        {
          params: {
            fromWeb: true,
          },
        }
      );

      setMessages(response.data);
    }

    loadMessages();
  }, [incidentId, owner, chat]);

  async function handleSendMessage({ message }) {
    formRef.current.reset();
    if (message.length === 0) {
      return;
    }

    const response = await api.post(
      `/messages/${owner}/send/${chat.hero_cpf}`,
      {
        message,
        fromWeb: true,
        incident_id: incidentId,
        owner_id: owner,
      }
    );

    setMessages([...messages, response.data]);
  }
  return (
    <Container>
      <Title>{chat.name}</Title>
      <div>
        <Scroll loadMore={() => {}}>
          <MessagesList>
            {messages.map((message) => (
              <Message me={message.owner_id === owner} key={message.id}>
                {message.message}
              </Message>
            ))}
          </MessagesList>
        </Scroll>
        <SendBox ref={formRef} onSubmit={handleSendMessage}>
          <UnInput
            ref={msgRef}
            name="message"
            placeholder="Digite sua mensagem aqui"
          />
          <button type="submit">
            <MdSend size={25} color="#e02041" />
          </button>
        </SendBox>
      </div>
    </Container>
  );
}

ChatRoom.propTypes = {
  incidentId: PropTypes.number.isRequired,
  chat: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    hero_cpf: PropTypes.string,
  }).isRequired,
};
