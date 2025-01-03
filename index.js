const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/cartoes', (req, res) => {
  const cartoes = require('./cartoes.json');
  res.json(cartoes);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
