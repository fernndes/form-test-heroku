const db = require("./config");

const insert = async function insertData(name, email, age, phone){
	await db.connect();

	var status

	await db.query('INSERT INTO usuarios3(nome, email, idade, telefone) VALUES ($1, $2, $3, $4)', 
		[name, email, age, phone], (err, res) => {
			if (err) {
	    		console.log(err);
	    		status = err
			 } else {
			 	console.log("Sucesso");
			 	status = "Cadastro efetuado com sucesso"
			  }
		})

	await db.end();

	return status
}

module.exports = insert;

