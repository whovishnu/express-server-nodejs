const express = require('express');
const open = require('open');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}\\index.html`);
});

app.listen(5000, () => {
  open('http://localhost:5000');
  console.log('server is running!!');
});
