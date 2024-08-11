const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000;

const { fortune } = require('./src/routes/fortune');
const { home } = require('./src/routes/home');
const { default: helmet } = require('helmet');

app.disable('x-powered-by');
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '1mb' }));
app.listen(PORT, () => console.log(`Running on port ${PORT}`));

app.get('/', home); 
app.get('/fortune/:amount?', fortune);