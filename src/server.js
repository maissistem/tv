const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: '185.169.96.240',
  user: 'maissist_jk',
  password: '314159@Mais#',
  database: 'maissist_jkastro',
});

app.use(express.json());
app.use(cors());

app.get('/produtos', async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM produtos');
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
});


app.get('/produtos/:id', async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM produtos WHERE id = ?', [req.params.id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: 'Produto não Localizado' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor Rodando na Porta ${PORT}`));
