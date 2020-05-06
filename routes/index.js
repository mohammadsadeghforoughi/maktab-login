var express = require("express");
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "/views/index.html"));
});

router.post("/login", function (req, res, next) {
  console.log('/login')
  const { username, password } = req.body;
  if (username === "admin" && password === "root") {
    res.send("success");
  } else {
    res.send('401');
  }
});


module.exports = router;
