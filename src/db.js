const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
  host: '185.169.96.240',
  user: 'maissist_jk',
  password: '314159@Mais#',
  database: 'maissist_jkastro',
});

module.exports = connection;