import express from 'express';

const app = express();

app.get('/api/produts', (req, res) => {
  res.send('Hello World!');
});