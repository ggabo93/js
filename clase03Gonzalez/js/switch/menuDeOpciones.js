console.log('Calculadora con menú de opciones utilizando sentencia Switch e iteración.');
let opcionIngresada = -1;
let numero1 = parseInt(prompt('Ingrese el primer número: '));
let numero2 = parseInt(prompt('Ingrese el segundo número: '));
do {
    console.log('MENU.\n\t1- Suma\n\t2- Resta\n\t3- Multiplicación\n\t4- División\n\t5- Salir')
    opcionIngresada = parseInt(prompt('Ingrese la opción deseada: '));
    switch (opcionIngresada) {
        case 1:
            console.log('Sumando sus números...');
            console.log(numero1 + '+' + numero2 + ' = ' + (numero1 + numero2));
            break;
        case 2:
            console.log('Restando sus números...');
            console.log(numero1 + '-' + numero2 + ' = ' + (numero1 - numero2));
            break;
        case 3:
            console.log('Multiplicando sus números...');
            console.log(numero1 + 'x' + numero2 + ' = ' + (numero1 * numero2));
            break;
        case 4:
            console.log('Dividiendo sus números...');
            console.log(numero1 + '/' + numero2 + ' = ' + (numero1 / numero2));
            break;
        case 5:
            console.log('Gracias por utilizar nuestra App!');
            break;
        default:
            console.log('Ingrese una opción válida.');
    }
} while (opcionIngresada != 5)