var express = require("express");
var router = express.Router();

const url = "https://api.themoviedb.org/3/discover/movie";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.OWM_API_KEY,
  },
};
router.get("/movies", (req, res) => {
  fetch(url, options)
    .then((response) => response.json())
    .then((json) => {
      res.json({ movies: json.results });
    });
});

module.exports = router;
