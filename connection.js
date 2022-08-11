var mysql = require ('mysql')
//import mysql from './mysql'

var connection = mysql.createConnection({
    host: "t07cxyau6qg7o5nz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "acgppv4kq0r2kf7g",
    password: "w887c6ht43md1yp7",
    database: "mf4l93f00rg09knt"
})

connection.connect((err) => {
    if(err) {
        console.log('Error when connecting to database')
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

function recover_pass(email){
    var recover_pass = {email: email}
    connection.query('SELECT email FROM register WHERE email LIKE', recover_pass, (err, res) => {
        if (err) throw err

    })

}

connection.end((err) => {})


