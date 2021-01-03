const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

const insert = require('./database/insert')

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/insert', (req, res) => {

	const name = req.body.name;
	const email = req.body.email;
	const age = req.body.age;
	const contact = req.body.contact;

	//res.send(contact)

	var status = insert(name, email, age, contact)

	status.then(() => res.send('<h1>Sucesso</h1>')).catch(err => res.send(`ERROR ${err}`))
})

app.listen(process.env.PORT || port)