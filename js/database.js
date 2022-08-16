//connecting to database
var connection = mysql.createConnection({
	host: 't07cxyau6qg7o5nz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'acgppv4kq0r2kf7g',
	password: 'w887c6ht43md1yp7',
	database: 'mf4l93f00rg09knt'
})

// testing if it's connected
connection.connect((err) => {
	if (err) {
		console.log('Error when connecting to database')
		return
	}
	console.log('Database connected!')
})