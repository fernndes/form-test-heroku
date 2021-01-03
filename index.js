const express = require('express')
const app = express()
const port = 5000

const insert = require('./database/insert')

app.use(express.urlencoded())

app.post('/insert', async function(req, res) {

	const [name, email, age, contact] = await req.body;

	insert(name, email, age, contact)	
})

app.listen(process.env.PORT || port)