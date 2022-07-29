import express from 'express';
import data from "./data"

const app = express();

app.get('/api/produts', (req, res) => {
  res.send(data);
});