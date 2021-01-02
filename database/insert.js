const db = require("./config");

const insert = async function insertData(name, email, age, phone, news){
	await db.connect();

	await db.query('INSERT INTO usuarios(nome, email, idade, telefone, noticias) VALUES ($1, $2, $3, $4, $5)', 
		[name, email, age, phone, news]
		).then(() => {

		})
		.catch(err => {
			console.log(err);
		});

	await db.end();
}

module.exports = insert;

