const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

const insert = require('./database/insert')

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/insert', async function(req, res) {

	const name = req.body.name;
	const email = req.body.email;
	const age = req.body.age;
	const contact = req.body.contact;

	//res.send(contact)

	var status = await insert(name, email, age, contact)

	res.send(`<h1>${status}</h1>`)
})

app.listen(process.env.PORT || port)