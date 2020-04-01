const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const { fromWeb } = req.query;

    const { owner, incident_id } = req.params;

    if (fromWeb) {
      let messages = await connection
        .table('messages')
        .join('heros', 'heros.cpf', '=', 'messages.hero_cpf')
        .select('*')
        .where('ong_id', owner)
        .andWhere('incident_id', incident_id);

      messages = messages.reduce((result, message) => {
        if (!result.find((m) => m.hero_cpf === message.hero_cpf)) {
          return [...result, message];
        }
        return result;
      }, []);

      return res.json(messages);
    }

    let messages = await connection
      .table('messages')
      .join('ongs', 'ongs.id', '=', 'messages.ong_id')
      .select('*')
      .where('hero_cpf', owner)
      .andWhere('incident_id', incident_id);

    messages = messages.reduce((result, message) => {
      if (!result.find((m) => m.ong_id === message.ong_id)) {
        return [...result, message];
      }
      return result;
    }, []);
    return res.json(messages);
  },
};
