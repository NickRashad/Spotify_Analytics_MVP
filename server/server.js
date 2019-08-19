const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const { topResults } = require('./converter');
const testFile = require('../StreamingHistory.json');
app.use(express.static('client/dist'))

// app.get('/', (req, res) => );
app.get('/topResults', (req, res) => {
  res.send(topResults(testFile));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
