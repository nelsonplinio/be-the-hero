import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components/native';
import light from './theme/light';
import dark from './theme/dark';

import Incidents from './pages/Incidents';
import IncidentDetails from './pages/Incidents/Details';

import Chats from './pages/Chats';
import ChatRoom from './pages/ChatRoom';

const Stack = createStackNavigator();

export default function Routes() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <NavigationContainer>
        <Stack.Navigator
          mode="card"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Incidents"
            component={(props) => (
              <Incidents
                darkTheme={darkTheme}
                setDarkTheme={setDarkTheme}
                {...props}
              />
            )}
          />
          <Stack.Screen name="Details" component={IncidentDetails} />
          <Stack.Screen name="Chats" component={Chats} />
          <Stack.Screen name="ChatRoom" component={ChatRoom} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
