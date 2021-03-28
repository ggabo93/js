console.log('Se mostraran números pares del 1 al 20. \n-------------------');

// Bucle para mostrar en consola números pares
for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        continue;
    } else {
        console.log(i);
    }
}
