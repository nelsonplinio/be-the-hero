import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import Chats from './pages/Chats';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Logon} />
      <Route path="/register" component={Register} />

      <Route path="/profile" component={Profile} />
      <Route path="/incidents/new" component={NewIncident} />

      <Route path="/chats/:incident_id" component={Chats} />
    </Switch>
  );
}
