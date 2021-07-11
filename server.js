const http = require('http')
const fs = require('fs').promises;
const express = require('express')
const cors = require('cors')

const app = express()


const server = http.createServer(function (req, res ){
    fs.readFile(__dirname + "/index.html")
    .then(contents => {
        res.writeHead(200)
        res.end(contents)
    })
    .catch(err => {
        res.writeHead(500)
        res.end(err)
        return
    })

})

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*")
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    app.use(cors())
    next()
});

const port = 3000

server.listen(port, () => {
    console.log("servidor odando 3000")
})