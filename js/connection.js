const express = require('express')
const cors = require('cors')
const users = require('../mock/users')

const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
	console.log(`Server running at port:${PORT}`)
})

app.get('/', (req, res) => {
	return res.send('Hello World!')
})

app.get('/users', (req, res) => res.send(users))

app.get('/users/:id', (req, res) => {
	const userId = req.params.id
	const user = users.find((user) => user.id === parseInt(userId))
	return res.send(user)
})

//http-status-codes

app.post('/users', (req, res) => {
	console.log(req.body)
	console.log(req.params)

	// const {id, name, mobile_no, email, password} = req.body
	// const newUser = req.body
	// console.log(req.body)
	// users.push(newUser)

	return res.status(201).send('tudo okay')
})

// Decidir entre avaliar  se passar o usuario pela requisicao ou buscar no corpo
app.put('/users/:id', (req, res) => {
	const updateUser = req.body
	let userId = parseInt(updateUser.id)

	users.map((item) => {
		if (item.id !== userId) {
			users.splice(userId - 1, 1, updateUser)
		}
	})
	return res.status(200).send(users)
})

// Decidir entre avaliar  se passar o usuario pela requisicao ou buscar no corpo
app.delete('/user/:id', (req, res) => {
	const deleteUser = req.body
	let userId = parseInt(deleteUser.id)

	users.map((item) => {
		if (item.id !== userId) {
			users.splice(userId - 1, 1)
		}
		return
	})

	return res.status(204).send()
})

module.exports = connection
