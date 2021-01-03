const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

// const insert = require('./database/insert')

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/insert', (req, res) => {

	const [name, email, age, contact] = req.body

	res.send(name + " " + email + " " + age + "" + contact)

	// insert(name, email, age, contact)	
})

app.listen(process.env.PORT || port)