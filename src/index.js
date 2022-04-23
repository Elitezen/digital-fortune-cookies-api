const express = require('express');
const helmet = require('helmet');
const app = express();
const PORT = process.env.PORT || 3000;
const fortunes = require('../fortunes.json');

app.use(helmet());
app.use(express.json());
app.listen(PORT, () => console.log(`Ready on port http://localhost:${PORT}`));

function generateFortuneText() {
  return fortunes[Math.floor(Math.random() * fortunes.length)];
}

function generateLuckyNumbers() {
  let numbers = [];
  for (let i = 0; i < 6; i++) {
    let plausibleNumber;
    do {
      plausibleNumber = Math.floor(Math.random() * 100) + 1;
    } while (numbers.includes(plausibleNumber));

    numbers.push(plausibleNumber);
  }

  return numbers;
}

function generateCookie(amount = 1) {
  if (amount == 1) {
    return {
      fortune: generateFortuneText(),
      luckyNumbers: generateLuckyNumbers()
    }
  } else {
    let fortunes = [];
    for (let i = 0; i < amount; i++) {
      fortunes.push({
        fortune: generateFortuneText(),
        luckyNumbers: generateLuckyNumbers()
      });
    }

    return fortunes;
  }
}

app.get('/', (req, res) => {
  res
    .status(200)
    .send({
      message: 'Use the /fortunes route to request fortune cookies'
    })
}); 

app.get('/fortune', (_, res) => {
  res
    .status(200)
    .send(generateCookie(1));
});

app.post('/fortunes/:amount?', (req, res) => {
  const { amount } = req.query;
 
  if (amount) {
    if (isNaN(+amount) || amount % 1 != 0) {
      res
        .status(400)
        .send({
          error: "amount parameter must be a valid integer"
        });
    } else if (amount <= 0 || amount > 10) {
      res
        .status(400)
        .send({
          error: "amount parameter must be between 1 and 10"
        });
    }
  }

  res
    .status(200)
    .send(generateCookie(amount));
}); 