const porta = 3005
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bd = require('../db/bd')

/* app.use((req, res, next) => {
	res.send({ nome: 'Paulo', idade: 31, maldicaoQuebrada: 'Hello World!' }) // qualquer rota cai na função
}) 

app.get('/produtos', (req, res, next) => {
	console.log('Exemplo de middleware...') // na rota
	next()
}) */

app.use(bodyParser.urlencoded({ // se os dados se tiverem sido enviados pelo urlencoded ele vi transformar em objeto o corpo da requisição
	extended: true
}))

app.get('/produtos', (req, res, next) => { // Transfrma em .json o método send()
	res.send(bd.getProdutos())
})


app.get('/produtos/:id', (req, res, next) => {
	res.send(bd.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
	const produto = bd.salvarProduto({
		nome: req.body.nome,
		idade: req.body.idade,
		maldicaoQuebrada: req.body.maldicaoQuebrada
	})

	res.send(produto) // Objeto convertido em JSON
})

app.put('/produtos/:id', (req, res, next) => {
	const produto = bd.salvarProduto({
		id: req.params.id,
		nome: req.body.nome,
		idade: req.body.idade,
		maldicaoQuebrada: req.body.maldicaoQuebrada
	})

	res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
	const produto = bd.deletarProduto(req.params.id)
	res.send(produto)
})

app.listen(porta, ()=> {
	console.log(`Servidor executando na porta ${porta}.`)
})