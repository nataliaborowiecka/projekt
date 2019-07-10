const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const jwt = require('jsonwebtoken')
const secret = 'secret'
const jwtVerifier = require('express-jwt')
app.use(bodyParser.urlencoded({ extended: false }));

function createToken() {
  let expirationDate = Math.floor(Date.now() / 1000) + 30
  var token = jwt.sign({userID: user.email, exp: expirationDate}, secret);
  return token;
}
app.get('/home', jwtVerifier({secret:secret}) (req, res) => {
  res.send('You made it to home');
});
app.post('/login', (req, res) => {
  if (req.body.email == user.email && req.body.password == user.password) {
    res.send(createToken());
  } else {
    res.sendStatus(400);
  }
app.use((req, res, err, next) => {
  if (err.name === 'Unauthorized error') {
    res.status(500).send(err.message);
  }
})
});
app.listen(8090, () => console.log('port 8090'));
