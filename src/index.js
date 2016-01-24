'use strict';
const Express = require('express');
const app = Express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log('Hit');
  res.end('Thanks');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));