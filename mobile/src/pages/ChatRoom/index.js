import React, { useState, useEffect, useMemo } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import socketio from 'socket.io-client';
import SafeAreaContainer from '../../components/SafeAreaContainer';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import {
  Container,
  List,
  TopBar,
  BackButton,
  Icon,
  Title,
  Logo,
  Message,
  Body,
  SendBox,
  Input,
  SendButton,
  SendIcon,
} from './styles';

export default function ChatRoom() {
  const navigation = useNavigation();
  const route = useRoute();
  const { incident } = route.params;
  const ownerCpf = '123456789'; // pegar do async storage

  const [message, setMessage] = useState('');
  const [conversations, setConversations] = useState([]);

  const socket = useMemo(
    () =>
      socketio('http://localhost:3333', {
        query: {
          user_id: ownerCpf,
        },
      }),
    [ownerCpf]
  );

  useEffect(() => {
    socket.on('message', (msg) => {
      setConversations([msg, ...conversations]);
    });

    socket.open();

    return () => socket.disconnect();
  }, [socket, conversations]);

  useEffect(() => {
    async function loadConversations() {
      const response = await api.get(
        `/messages/${ownerCpf}/chat/${incident.ong_id}/${incident.id}`
      );
      setConversations(response.data.reverse());
    }

    loadConversations();
  }, [incident, ownerCpf]);

  async function handleSendMessage() {
    if (message.length === 0) {
      return;
    }

    setMessage('');
    const response = await api.post(
      `/messages/${ownerCpf}/send/${incident.ong_id}`,
      {
        incident_id: incident.id,
        message,
        owner_id: ownerCpf,
      }
    );
    console.log(response.data);
    setConversations([response.data, ...conversations]);
  }

  return (
    <SafeAreaContainer>
      <Container>
        <TopBar>
          <BackButton onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} />
          </BackButton>
          <Logo source={logo} />
        </TopBar>
        <Title>
          {incident.name}: {incident.title}
        </Title>
        <List
          data={conversations}
          inverted
          showsVerticalScrollIndicator={false}
          keyExtractor={(conversation) => `${conversation.id}`}
          renderItem={({ item: conversation }) => (
            <Message me={conversation.owner_id === ownerCpf}>
              <Body me={conversation.owner_id === ownerCpf}>
                {conversation.message}
              </Body>
            </Message>
          )}
        />

        <SendBox>
          <Input
            placeholder="Digite sua mensagem aqui"
            value={message}
            onChangeText={setMessage}
          />
          <SendButton onPress={handleSendMessage}>
            <SendIcon name="send" size={30} />
          </SendButton>
        </SendBox>
      </Container>
    </SafeAreaContainer>
  );
}
