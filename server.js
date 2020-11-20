const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./schema/user_model');
const HighScore = require('./schema/highScore_model')
const { PORT, DBURL } = require("./config");



const dbUrl = DBURL || process.env.DBURL;
const defPort = PORT || process.env.PORT || 5000;

app.listen(port = defPort, function() {
   console.log('Server started on port: ' + port);
});

mongoose.Promise = global.Promise;


mongoose.connect(dbUrl, {useNewUrlParser: true,  useUnifiedTopology: true});
const db = mongoose.connection;


app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/:user', (req, res) => {
  console.log("CL Log: req", req.params.user)
  const stuff = db.user.findOne({ name: req.params.user });
  console.log("CL Log: stuff", stuff)

  })
  // .then((u) => res.send(u))
//})
