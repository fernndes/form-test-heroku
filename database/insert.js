const db = require("./config");

const insert = async function insertData(name, email, age, phone){
	await db.connect();	

	await db.query('INSERT INTO usuarios3(nome, email, idade, telefone) VALUES ($1, $2, $3, $4)', 
		[name, email, age, phone], (err, res) => {
			if (err) {
	    		console.log(err);
	    		res.send(err);
			 } else {
			 	console.log("Sucesso");
			 	res.send("<h1>Sucesso</h1>")
			  }
		})

	await db.end();
}

module.exports = insert;

