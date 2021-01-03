const db = require("./config");

const insert = async function insertData(name, email, age, phone){
	await db.connect();

	await db.query('INSERT INTO usuarios3(nome, email, idade, telefone) VALUES ($1, $2, $3, $4)', 
		[name, email, age, phone]
		)

	await db.end();
}

module.exports = insert;

