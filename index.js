const express = require('express')
const app = express()
const port = 5000

const insert = require('./database/insert')

app.use(express.urlencoded())

app.post('/insert', function(req, res) {

	var [name, email, age, contact] = req.body;

	res.send(name + " " + email + " " + age + "" + contact)

	// insert(name, email, age, contact)	
})

app.listen(process.env.PORT || port)