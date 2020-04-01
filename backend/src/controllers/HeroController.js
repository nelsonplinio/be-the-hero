const connection = require('../database/connection');

module.exports = {
  async store(req, res) {
    const { cpf, name } = req.body;

    const checkCpf = await connection
      .table('heros')
      .select('*')
      .where('cpf', cpf);

    if (!checkCpf) {
      return res.status(400).json({
        error: 'Já tem um usuário com este cpf.',
      });
    }

    await connection.table('heros').insert({
      cpf,
      name,
    });

    return res.send();
  },

  async index(req, res) {
    const heros = await connection.table('heros').select('*');

    return res.json(heros);
  },
};
