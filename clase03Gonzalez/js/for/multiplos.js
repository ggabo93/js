console.log('Tabla de multiplicaciones\n-------------------'); // Mensaje en consola

//Ingreso de datos
let numero = parseInt(prompt("Ingrese el número a multiplicar: \n")); 

//Se evalua condición para iniciar la app
if (numero > 0 && numero <= 10) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + ' x ' + i + ' = ' + numero * i);
    }
} else {
    console.log('Ingrese un numero del 1 al 10.');
}