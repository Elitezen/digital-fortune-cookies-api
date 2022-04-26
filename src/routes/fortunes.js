const { generateCookie } = require('../utilityFunctions');

function fortunes(req, res) {
  const { amount } = req.query;
 
  if (amount) {
    if (isNaN(+amount) || amount % 1 != 0) {
      res
        .status(400)
        .send({
          success: false,
          message: "amount parameter must be a valid integer"
        });
    } else if (amount <= 0 || amount > 10) {
      res
        .status(400)
        .send({
          success: false,
          message: "amount parameter must be between 1 and 10"
        });
    }
  }

  const cookies = generateCookie(amount);

  res
    .status(200)
    .send({
      success: true,
      cookies: amount == 1 ? [cookies] : cookies
    });
}

module.exports = {
  fortunes
}