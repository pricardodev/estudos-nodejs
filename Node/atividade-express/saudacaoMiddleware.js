// Função com parâmetros, precisa retornar outra função com a requisão, resposta e next
function saudacao(parametro) {
	return function (req, res, next) {
		console.log(`Seja bem vindo ao mundo JavaScript Sr.${parametro}`)
		next()
	}
}

module.exports = saudacao