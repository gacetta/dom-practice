const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
// app.use(express.urlencoded());

app.get('/styles.css', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/styles.css'));
})

app.get('/index.js', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.js'));
})

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
})


app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}...`)
});