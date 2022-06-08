const fs = require('fs');

/*fs.writeFile('./archivo.txt', "Hola mundito", function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Archivo creado");
})*/

fs.readFile("./archivo.txt", function (err, data) {
    if (err) {
        console.log(err);
    }
    if (data) {
        console.log(data.toString());
    }
})