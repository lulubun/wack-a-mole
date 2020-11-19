const express = require('express');
const firestore = require("./firebase")
const app = express();
const { PORT, DBURL } = require("./config");
const createUser = require("./controllers/authcontroller");



const dbUrl = DBURL || process.env.DBURL;
const defPort = PORT || process.env.PORT || 5000;

app.listen(port = defPort, function() {
   console.log('Server started on port: ' + port);
});

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/:user', (req, res) => {
  res.send()
})

app.get('/highScores', (req, res) => {
  res.send()
})
