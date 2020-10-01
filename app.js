// https://www.serverless.com/blog/serverless-express-rest-api

const express = require('express')
const bodyParser = require('body-parser');
const app = express()


app.use(bodyParser.json({ strict: false }));


app.get('/', function (req, res) {
  console.log('zzzzz');
  res.send('Hello World!')
})
app.get('/dev', function (req, res) {
  console.log('zzzzz');
  res.send('Hello devv!')
})

app.get('/dev/', function (req, res) {
  console.log('zzzzz');
  res.send('Hello 111!')
})

module.exports = app