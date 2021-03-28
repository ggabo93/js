console.log('Bienvenido al turnero en línea. \n-------------------');

// Declaración de variables
let nombreUsuario;

// Declaración e inicialización de variable
let cantidadUsuarios = parseInt(prompt('Ingrese cantidad de usuarios: '));

// Inicia en bucle
for (let i = 0; i < cantidadUsuarios; i++) {

    //Ingreso de datos para el usuario
    nombreUsuario = prompt('Ingrese su nombre: (Ingrese Salir para cerrar el programa)');
    
    // Condicióin para iniciar y terminar el bucle
    if (nombreUsuario != 'salir' && nombreUsuario != 'SALIR') {
        if (nombreUsuario.length != 0) {
            console.log(nombreUsuario + ' su turno es el: ' + (i + 1) + '. Espere a ser atendido. Muchas gracias!')
        } else {
            console.log('Ingrese su nombre')
            i--;
        }
    } else {
        console.log('Gracias por utilizar nuestros servicios.')
        break;
    }
}
