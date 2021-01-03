const express = require('express')
const app = express()
const port = 5000

// const insert = require('./database/insert')

const db = require("./database/config");

app.use(express.urlencoded())

app.post('/insert', async function(req, res) {

	const [name, email, age, contact] = await req.body;

	function insertData(name, email, age, phone){
		await db.connect();

		await db.query('INSERT INTO usuarios3 (nome, email, idade, telefone) VALUES ($1, $2, $3, $4)', 
			[name, email, age, phone]
			).then(res => {
			    console.log(res.fields.map(field => field.name))
			    console.log(res.rows[0])
			  })
			  .catch(e => console.error(e.stack)

		await db.end();
	}

	insertData(name, email, age, contact)
})

app.listen(process.env.PORT || port)