const express = require('express')
const app = express()
const port = 5000

const insert = require('./database/insert')

app.get('/', (req, res) => {
  //res.send('Hello World!')

  console.log(req.body);
})

app.listen(process.env.PORT || port)