const fortunes = require('../fortunes.json');

/**
 * Picks a random fortune string.
 * @returns {string} The picked fortune.
 */
function generateFortuneText() {
  return fortunes[Math.floor(Math.random() * fortunes.length)];
}

/**
 * Generates an array of 6 random numbers between 1-100.
 * @returns {number[]} The lucky numbers array.
 */
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

/**
 * Returns a fortune string with an array of lucky numbers.
 * @param {number} amount
 * @returns 
 */
function generateCookie(amount = 1) {
  if (amount == 1) {
    const cookie = {
      fortune: generateFortuneText(),
      luckyNumbers: generateLuckyNumbers()
    };

    return cookie;
  } else {
    let fortunes = [];
    for (let i = 0; i < amount; i++) {
      const cookie = {
        fortune: generateFortuneText(),
        luckyNumbers: generateLuckyNumbers()
      }

      fortunes.push(cookie);
    }

    return [...fortunes];
  }
}

module.exports = {
  generateCookie,
  generateFortuneText,
  generateLuckyNumbers
}