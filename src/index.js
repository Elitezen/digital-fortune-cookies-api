const express = require('express');
const helmet = require('helmet');
const app = express();
const PORT = process.env.PORT || 3000;

const { fortune } = require('./routes/fortune');
const { fortunes } = require('./routes/fortunes');
const { home } = require('./routes/home');

app.use(helmet());
app.use(express.json());
app.listen(PORT, () => console.log(`Ready on http://localhost:${PORT}`));

app.get('/', home); 
app.get('/fortune', fortune);
app.post('/fortunes/:amount?', fortunes); 