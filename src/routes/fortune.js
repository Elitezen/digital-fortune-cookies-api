const { generateCookie } = require('../utilityFunctions');

function fortune(req, res) {
  const cookie = generateCookie(1);

  res
    .status(200)
    .send({
      success: true,
      cookie
    });
}

module.exports = {
  fortune
}