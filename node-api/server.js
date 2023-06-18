const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/time', (req, res) => {
  const currentTime = new Date().toTimeString();
  res.json({ time: currentTime,
    node:"node-api-1" });
});

app.get('/', (req, res) => {
  res.send('servus grüezi und hallo')
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
