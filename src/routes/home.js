function home(req, res) {
  res
    .status(200)
    .send({
      success: true,
      message: 'Use the /fortune (GET) or /fortunes (POST) route to request fortune cookies. Visit https://github.com/Elitezen/digital-fortune-cookies-api#routes for more information'
    });
}

module.exports = {
  home
}