const express = require('express')
const app = express()
const saudacao = require('./saudacaoMiddleware')
const bodyParser = require('body-parser')

app.use(bodyParser.text()) // retornam uma função middleware
app.use(bodyParser.json()) // retornam uma função middleware
app.use(bodyParser.urlencoded({ extended: true })) // flag é para aceitar todos os tipos de dados encodeds

app.use(saudacao('Paulo Ricardo'))

// Recuperando dados no corpo da requisição
app.post('/corpo', (req, res) => {
	res.send(req.body) // JSON.stringfy(req.body)
})

// Recuperando parametros na url
// .params
app.get('/cliente/:id', (req, res) => {
	console.log('executou função do id')
	res.send(`O código do cliente selecionado é ${req.params.id} id`)
})
// .query
app.get('/cliente/relatorio', (req, res) => {
	console.log('Executou a função das query')
	res.send(`parametros do relatório capturados ${req.query.param1} e ${req.query.param2}`)
})


app.get('/express', (req, res, next) => {
	res.send('Funcionando')
})

app.get('/json', (req, res) => {
	res.json({
		nome: 'Paulo Ricard Gomes',
		idade: 31
	})
})


// CHAIN OF RESPONSABILITY - Como o Expess trabalha


app.listen(3000, () => {
	console.log('Isso ai!')
})