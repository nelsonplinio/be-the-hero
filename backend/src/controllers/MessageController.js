const connection = require('../database/connection');

module.exports = {
  async store(req, res) {
    let ong_id;
    let hero_cpf;
    const { from, to } = req.params;

    const { message, incident_id, owner_id, fromWeb } = req.body;

    if (fromWeb) {
      ong_id = from;
      hero_cpf = to;
    } else {
      ong_id = to;
      hero_cpf = from;
    }

    const [id] = await connection.table('messages').insert({
      ong_id,
      hero_cpf,
      message,
      incident_id,
      owner_id,
    });

    const msg = await connection
      .table('messages')
      .select('*')
      .where({
        id,
      })
      .first();

    const ioUserId = req.connectedUsers[to];

    if (ioUserId) {
      req.io.to(ioUserId).emit('message', msg);
    }

    return res.json(msg);
  },

  async index(req, res) {
    const { fromWeb } = req.query;
    console.log(req.connectedUsers);
    const { owner, with_whom, incident_id } = req.params;

    if (fromWeb) {
      const messages = await connection
        .table('messages')
        .join('heros', 'heros.cpf', '=', 'messages.hero_cpf')
        .select('*')
        .where({
          ong_id: owner,
          hero_cpf: with_whom,
          incident_id,
        });

      return res.json(messages);
    }

    const messages = await connection
      .table('messages')
      .join('ongs', 'ongs.id', '=', 'messages.ong_id')
      .select(['messages.*', 'ongs.name'])
      .where({
        hero_cpf: owner,
        incident_id,
        ong_id: with_whom,
      });

    return res.json(messages);
  },
};
