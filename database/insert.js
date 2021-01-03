const db = require("./config");

const insert = async function insertData(name, email, age, phone){
	await db.connect();

	await db.query('INSERT INTO usuarios3(nome, email, idade, telefone) VALUES ($1, $2, $3, $4)', 
		[name, email, age, phone], (err, res) => {
			if (err) {
				await db.end();
	    		console.log(err);
	    		return err
			 } else {
			 	await db.end();
			 	console.log("Sucesso");
			 	return "<h1>Cadastro efetuado com sucesso</h1>"
			  }
		})
}

module.exports = insert;

