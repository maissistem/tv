const express = require('express');
const app = express();
const path = require('path');
const connection = require('./db');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/products', async (req, res) => {
  const [rows] = await connection.query('SELECT * FROM produtos');
  res.json(rows);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});