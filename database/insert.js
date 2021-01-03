const db = require("./config");

const insert = async function insertData(name, email, age, phone){
	await db.connect();

	var status = ""

	await db.query('INSERT INTO usuarios3(nome, email, idade, telefone) VALUES ($1, $2, $3, $4)', 
		[name, email, age, phone], (err, res) => {
			if (err) {
	    		status = err
			 } else {
			 	status = "Funcionou"
			  }
		})

	await db.end();



	return status
}

module.exports = insert;

