const mysql = require ("mysql")
//import mysql from './mysql'

const express = require("express")
const register_new_user = require("./users_data")
const login_user = require("./users_data")
const recover_pass = require("./users_data")

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5500

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})


app.get('/users_data/:id', login_user)

app.post('/users_data' , register_new_user)

app.get('/users_data', recover_pass)

//http-status-codes

/*app.post('/users', (req, res) => {
    // const {id, name, mobile_no, email, password} = req.body
    const newUser = req.body
    // console.log(req.body)
    users.push(newUser)

    return res.status(201).json(newUser)
})

// Decidir entre avaliar  se passar o usuario pela requisicao ou buscar no corpo
app.put('/users/:id', (req, res) => {
    const updateUser = req.body
    let userId = parseInt(updateUser.id)
    
    users.map( item => {
        if(item.id !== userId) {
            users.splice(userId-1, 1, updateUser)
        }
    })
    return res.status(200).send(users)
})


// Decidir entre avaliar  se passar o usuario pela requisicao ou buscar no corpo
app.delete('/user/:id', (req, res) => {
    const deleteUser = req.body
    let userId = parseInt(deleteUser.id)

    users.map( item => {
        if(item.id !== userId) {
            users.splice(userId-1, 1)
        }
        return
    })

    return res.status(204).send()
})*/

//connecting to database
var connection = mysql.createConnection({
    host: "t07cxyau6qg7o5nz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "acgppv4kq0r2kf7g",
    password: "w887c6ht43md1yp7",
    database: "mf4l93f00rg09knt"
})

// testing if it's connected
connection.connect((err) => {
    if(err) {
        console.log('Error when connecting to database')
        return;
    }
    console.log('Database connected!')
})

/*//method to insert new user in database
function new_register(new_name, new_mobile, new_email, new_password){
    var new_register = {name: new_name, mobile_no: new_mobile, email: new_email, password: new_password}
    connection.query('INSERT INTO register SET ?', new_register, (err, res) => {
        if (err) throw err
    
        console.log('User added to database with an ID: ', res.insertId)
    }) 
    
}

//method to look for user's email in database
function recover_pass(email){
    var recover_pass = {email: email}
    connection.query('SELECT email FROM register WHERE email LIKE', recover_pass, (err, res) => {
        if (err) throw err

    })

}

//connection.end((err) => {})


module.exports = new_register()
module.exports = recover_pass()*/

module.exports = connection