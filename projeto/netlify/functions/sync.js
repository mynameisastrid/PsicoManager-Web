const { Client } = require('pg');

exports.handler = async (event, context) => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL, // String de conexão do Neon
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    const { email, password, data_json, action } = JSON.parse(event.body);

    // 1. Lógica Simples de "Autenticação" e Busca
    if (action === 'load') {
      const res = await client.query('SELECT data_json FROM usuarios_psico WHERE email = $1 AND password_hash = $2', [email, password]);
      return {
        statusCode: 200,
        body: JSON.stringify(res.rows[0] ? res.rows[0].data_json : { patients: [], sessions: {} })
      };
    }

    // 2. Salvar Dados (Upsert)
    if (action === 'save') {
      await client.query(
        `INSERT INTO usuarios_psico (email, password_hash, data_json) 
         VALUES ($1, $2, $3) 
         ON CONFLICT (email) DO UPDATE SET data_json = $3`,
        [email, password, data_json]
      );
      return { statusCode: 200, body: JSON.stringify({ status: "success" }) };
    }

  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  } finally {
    await client.end();
  }
};