console.log('Uso de while como condición de salida.')

let numero;
let suma = 0;
let contador = 0;
let promedio = 0;

while (numero != -1) {

    numero = parseInt(prompt('Ingrese un numero. Para salir, ingrese -1'));
    if (numero != -1) {
        console.log('Número ingresado: ' + numero);
        suma += numero;
        contador++;
    }
}
promedio = suma / contador;
console.log('Se ingresaron ' + contador + ' números. Y el promedio es: ' + promedio);

