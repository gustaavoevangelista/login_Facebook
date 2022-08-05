const mysql = require ('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user:'gustavo',
    password: '12345',
    database: 'facebook_db'
})

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected!');
})