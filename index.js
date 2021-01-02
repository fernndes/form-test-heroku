const express = require('express')
const app = express()
const port = 5000

const insert = require('./database/insert')

app.post('/insert', (req, res) => {
  //res.send('Hello World!')

  console.log(req.body);
  res.send("Funcionou")
})

app.listen(process.env.PORT || port)