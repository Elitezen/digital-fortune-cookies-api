const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000;

const { fortune } = require('./src/routes/fortune');
const { fortunes } = require('./src/routes/fortunes');
const { home } = require('./src/routes/home');

app.use(cors());
app.use(express.json());
app.listen(PORT, () => console.log(`Running on port ${PORT}`));

app.get('/', home); 
app.get('/fortune', fortune);
app.post('/fortunes/:amount?', fortunes); 