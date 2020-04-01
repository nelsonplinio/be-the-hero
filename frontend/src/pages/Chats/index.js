import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DefaultLayout from '../_layout/default';

import { Container } from './styles';

import ChatList from '../../components/ChatList';
import ChatRoom from '../../components/ChatRoom';

export default function Chats() {
  const { incident_id } = useParams();
  const [chatSelected, setChatSelected] = useState({});
  return (
    <DefaultLayout>
      <h1>Conversas #{incident_id}</h1>
      <Container>
        <ChatList incidentId={incident_id} onChatClick={setChatSelected} />
        <ChatRoom incidentId={incident_id} chat={chatSelected} />
      </Container>
    </DefaultLayout>
  );
}
