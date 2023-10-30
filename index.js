const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Astha IoT Server')
})

app.get('/action', (req, res) => {
  const actions = ['ON16', 'ON14'];
  const randomAction = actions[Math.floor(Math.random() * actions.length)];
  res.send(randomAction);
});


app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
