const fs = require('fs');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const drinkController = require('./controller.js');
const drinkRouter = require('./routes.js')

mongo_URI="mongodb+srv://jasminezalez:codesmith@cluster.nghpo.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongo_URI)

const PORT = 3000

mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

// parsing the incoming request
app.use(express.json());

// connecting the router --> where do I redirect this request
app.use('/drinks', drinkRouter)

app.use('/', express.static(path.join(__dirname, '../index.html')))


app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => console.log(`listening on port 3000`));


module.exports = app;