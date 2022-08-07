//var mysql = require ('mysql')
import mysql from './mysql'

var connection = mysql.createConnection({
    host:'localhost',
    user:'gustavo',
    password: '12345',
    database: 'facebook_db'
})

connection.connect((err) => {
    if(err) {
        console.log('Error connecting to database')
        return;
    }
    console.log('Connection established!')
})

function new_register(new_name, new_mobile, new_email, new_password){
    var new_register = {name: new_name, mobile_no: new_mobile, email: new_email, password: new_password}
    connection.query('INSERT INTO register SET ?', new_register, (err, res) => {
        if (err) throw err
    
        console.log('New register ID: ', res.insertId)
    }) 
    
}

connection.end((err) => {})


