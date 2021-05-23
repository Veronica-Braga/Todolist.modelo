// Importando o express usando o padrão requere ou ao invés o import
// Padrão requere: requere(<nome_pacote_para_importar>)


// Criando uma instancia do express
const express = require('express')

// importando o body-parser
const bodyParser = require('body-parser') 


// A constante app representar a aplicação. 
// Está sendo chamado o construtor que vai iniciar um objeto do tipo express
const app = express()

/* Configurando como express (app) deve usar o body-parser 
*  Configurar para usar a biblioteca qs (true), que permite aninhamento de objetos */
app.use(bodyParser.urlencoded( { extended:true }))

// Configura para converter o conteúdo da requisição no formato JSON
app.use(bodyParser.json())


// Definindo as rotas
const padraoRoute   = require('./src/routes/padraoRoute.js')
const usuarioRoute   = require('./src/routes/usuarioRoute.js')
const statusRoute    = require('./src/routes/statusRoute.js')
const categoriaRoute = require('./src/routes/categoriaRoute.js')
const listaRoute     = require('./src/routes/listaRoute.js')
const atividadeRoute = require('./src/routes/atividadeRoute.js')

padraoRoute(app)
usuarioRoute(app)
statusRoute(app)
categoriaRoute(app)
listaRoute(app)
atividadeRoute(app)


// Definido a porta que vai escutar a aplicação 
// Usar a porta definida na variável de ambiente PORT ou usar a 3000
const port = process.env.PORT || 3000



// Passando a uma porta que vai escutar a aplicação
app.listen(port)       

// para mostrar que o servidor está rodando
console.log('Servidor funcionando na porta' , port)
