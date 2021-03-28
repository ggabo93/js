console.log('Calculadora de promedios.');

let cantidadDeAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos en el curso: '));
console.log('Cantidad de alumnos establecidos en el curso: ' + cantidadDeAlumnos);
let contador = 0;
let suma = 0;
let promedioDelCurso;
while (contador < cantidadDeAlumnos) {
    let notaAlumno;
    do {
        notaAlumno = parseInt(prompt('Ingrese la nota del alumno ' + (contador + 1) + ' (Rango de calificación de 1 a 10): '));
        if((notaAlumno > 0) && (notaAlumno <= 10)){
            console.log('Nota del alumno ' + (contador+1) + ': ' + notaAlumno);
        }else{
            console.log('Ingrese correctamente la nota. El rango de calificación va desde 1 a 10')
        }
    } while ((notaAlumno <= 0) || (notaAlumno > 10));

    suma += notaAlumno;
    contador++;
}
promedioDelCurso = suma / contador;
console.log('El promedio del curso es: ' + promedioDelCurso);
