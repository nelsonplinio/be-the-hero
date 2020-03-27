import React, { useCallback, useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import { Linking } from 'expo';

import logo from '../../../assets/logo.png';

import Incident from '../../../components/Incident';
import SafeAreaContainer from '../../../components/SafeAreaContainer';

import {
  Container,
  TopBar,
  BackButton,
  Icon,
  Logo,
  ContactContainer,
  Message,
  ContactLabel,
  ActionContainer,
  ActionButton,
  ActionText,
} from './styles';

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  const { incident } = route.params;

  const message = useMemo(() => {
    const valueFormatted = Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(incident.value);
    return `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title} no valor de ${valueFormatted}`;
  }, [incident]);

  const handleSendEmail = useCallback(() => {
    const { email, title } = incident;
    MailComposer.composeAsync({
      subject: `Herói do caso: ${title}`,
      recipients: [email],
      body: message,
    });
  }, [incident, message]);

  const handleOpenWhatsapp = useCallback(() => {
    const { whatsapp } = incident;
    Linking.openURL(`whatsapp://send?phone=${whatsapp}&text=${message}`);
  }, [incident, message]);

  return (
    <SafeAreaContainer>
      <TopBar>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} />
        </BackButton>
        <Logo source={logo} />
      </TopBar>
      <Container
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 16 }}
      >
        <>
          <Incident data={incident} showDetail />

          <ContactContainer>
            <Message>Salve o dia! </Message>
            <Message>Seja o herói desse caso.</Message>
            <ContactLabel>Entre em contato</ContactLabel>
            <ActionContainer>
              <ActionButton
                onPress={handleOpenWhatsapp}
                style={{ marginRight: 8 }}
              >
                <ActionText>Whatsapp</ActionText>
              </ActionButton>

              <ActionButton onPress={handleSendEmail}>
                <ActionText>E-mail</ActionText>
              </ActionButton>
            </ActionContainer>
          </ContactContainer>
        </>
      </Container>
    </SafeAreaContainer>
  );
}
