const express = require('express');
const app = express();
const port = 3000;

let count = 0;

app.get('/', (req, res) => {
    res.send('Astha IoT Server')
})

app.get('/action', (req, res) => {
  const actions = ['ON16', 'ON14', 'ON27', 'ON17'];
  const randomAction = actions[Math.floor(Math.random() * actions.length)];
  res.send(randomAction);
  console.log("feedback : ", randomAction);
  count +=1;
  console.log("Server dipanggil : ", count)
});

app.get('/waduh', (req, res) => {
  res.send("Mas irfan ganteng banget");
});


app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
