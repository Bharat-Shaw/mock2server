const express = require('express');
const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors');

const app = express();
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/api', middlewares);
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
