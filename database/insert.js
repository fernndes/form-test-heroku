const db = require("./config");

const insert = async function insertData(name, email, age, phone){
	await db.connect();

	await db.query('INSERT INTO usuarios(nome, email, idade, telefone) VALUES ($1, $2, $3, $4)', 
		[name, email, age, phone]
		).then(() => {

		})
		.catch(err => {
			console.log(err);
		});

	await db.end();
}

module.exports = insert;

