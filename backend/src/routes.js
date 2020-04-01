const express = require('express');

const OngController = require('./controllers/OngController');
const HeroController = require('./controllers/HeroController');
const MessageController = require('./controllers/MessageController');
const ChatController = require('./controllers/ChatController');
const IncidentController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.post('/messages/:from/send/:to', MessageController.store);
routes.get(
  '/messages/:owner/chat/:with_whom/:incident_id',
  MessageController.index
);
routes.get('/messages/:owner/chat/:incident_id', ChatController.index);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/heros', HeroController.index);
routes.post('/heros', HeroController.store);

routes.post('/incidents', IncidentController.store);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;
