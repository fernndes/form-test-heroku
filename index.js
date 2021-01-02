const express = require('express')
const app = express()
const port = 5000

// const insert = require('./database/insert')

const db = require(".database/config");

app.use(express.urlencoded())

app.post('/insert', async function(req, res) {

	const [name, email, age, contact] = req.body;

	async function insertData(name, email, age, phone){
		await db.connect();

		await db.query('INSERT INTO usuarios(nome, email, idade, telefone) VALUES ($1, $2, $3, $4)', 
			[name, email, age, phone]
			)

		await db.end();
	}

	insertData(name, email, age, contact).then(() => res.send('Funcionou')).catch(err => console.log(err))
})

app.listen(process.env.PORT || port)