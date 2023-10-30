const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Astha IoT Server')
})

app.get('/action', (req, res) => {
  res.send('ON16');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
