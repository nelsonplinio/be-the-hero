import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import SafeAreaContainer from '../../components/SafeAreaContainer';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import {
  Container,
  List,
  Chat,
  Name,
  TopBar,
  BackButton,
  Icon,
  Title,
  Logo,
} from './styles';

export default function Chats() {
  const navigation = useNavigation();

  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    async function loadConversations() {
      const response = await api.get(`/messages/123456789/chat/1`, {
        fromWeb: false,
      });
      setConversations(response.data);
    }
    loadConversations();
  }, []);

  return (
    <SafeAreaContainer>
      <Container>
        <TopBar>
          <BackButton onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} />
          </BackButton>
          <Logo source={logo} />
        </TopBar>
        <Title>Conversas</Title>
        <List
          data={conversations}
          showsVerticalScrollIndicator={false}
          keyExtractor={(conversation) => `${conversation.id}`}
          renderItem={({ item: conversation }) => (
            <Chat onPress={() => navigation.navigate('ChatRoom')}>
              <Name>{conversation.name}</Name>
            </Chat>
          )}
        />
      </Container>
    </SafeAreaContainer>
  );
}
