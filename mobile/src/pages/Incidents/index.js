import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import Incident from '../../components/Incident';
import SafeAreaContainer from '../../components/SafeAreaContainer';

import {
  Header,
  TopBar,
  Logo,
  TotalIncidentsText,
  GreetingContainer,
  GreetingText,
  ExplanationText,
  List,
  Right,
  ThemeToggle,
  Icon,
} from './styles';

export default function Incidents({ darkTheme, setDarkTheme }) {
  const navigation = useNavigation();

  const [total, setTotal] = useState(0);
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    async function loadIncidents() {
      const response = await api.get('/incidents');
      setTotal(response.data.total);
      setIncidents(response.data.list);
    }
    loadIncidents();
  }, []);

  function navigateToDetail(incident) {
    navigation.navigate('Details', {
      incident,
    });
  }

  return (
    <SafeAreaContainer>
      <Header>
        <TopBar>
          <Logo source={logo} />
          <Right>
            <TotalIncidentsText>total de {total} casos</TotalIncidentsText>
            <ThemeToggle onPress={() => setDarkTheme(!darkTheme)}>
              <Icon name={darkTheme ? 'sun-o' : 'moon-o'} size={24} />
            </ThemeToggle>
          </Right>
        </TopBar>
        <GreetingContainer>
          <GreetingText>Bem-vindo!</GreetingText>
          <ExplanationText>
            Escolha um dos casos abaixo e salve o dia.
          </ExplanationText>
        </GreetingContainer>

        <List
          data={incidents}
          keyExtractor={(incident) => `${incident.id}`}
          renderItem={({ item: incident }) => (
            <Incident
              data={incident}
              onDetalClick={() => navigateToDetail(incident)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 12 }}
        />
      </Header>
    </SafeAreaContainer>
  );
}

Incidents.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
  setDarkTheme: PropTypes.func.isRequired,
};
