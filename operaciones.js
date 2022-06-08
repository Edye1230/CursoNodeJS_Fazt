 const Operaciones = {};
 
 const sumar = (a,b) => a + b;
 const restar = (a,b) => a - b;
 const multiplicar = (a,b) => a * b;
 const dividir = (a,b) => a / b == 0 ? a / b : "No se puede dividir entre cero";

/*exports.sumar = sumar;
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.dividir = dividir;*/

Operaciones.sumar = sumar;
Operaciones.restar = restar;
Operaciones.multiplicar = multiplicar;
Operaciones.dividir = dividir;

module.exports = Operaciones;

console.log(Operaciones);