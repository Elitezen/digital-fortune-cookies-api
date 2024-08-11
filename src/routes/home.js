function home(req, res) {
  res
    .status(200)
    .send({
      success: true,
      message: 'Use the /fortune (GET) route to request fortune cookies. Visit https://github.com/Elitezen/fortunecookies#routes for more information'
    });
}

module.exports = {
  home
}