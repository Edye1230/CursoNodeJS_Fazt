const colors = require("colors");
const express = require("express");
/*const http = require('http');


http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html'})
    res.write('<h1>Elemento creado desde NODE JS</h1>');
    res.write('<h2>Mi subtitulo</h2>');
    res.write('<p>El texto de mi servidor</p>');
    res.end();
}).listen(3000, function(){
    console.log("Servidor corriendo en el puerto 3000".green);
});*/

const server = express();

server.listen(3000, () =>
  console.log("Servidor corriendo en el puerto 3000".green)
);

server.get('/', function (req, res){
    res.send('<h1>Hola mundo con Express </h1>')
});