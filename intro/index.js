//alert('Estoy controlando el navegador');
//console.log('andamos en la consola');
//console.log(window);

var variable1 = 1001.788;
var variable2 = " El costo total es: ";
//concatenar
//console.log(variable2 + variable1);
//operaciones
//console.log(variable2 + (variable1*2+2)+" USD");
//backtick
//console.log(`${variable2} ${variable1*2+2} USD`);

//variable global
var saludo = "hola";
//variable local
let despedida = "adios";
//variable 
const perro = {
    name: 'Billy',
    age: '6',
    color: 'blanco'
}
//reasignar
saludo = 4;
//scope
{
    saludo='Buenas noches';
    //console.log(saludo);
}

//TypeError: Assignament to constante variable.
//const goodbye= 'adios';
//goodbye += ', Billy';
// goodbye= goodbye + ', billy';
//console.log(goodbye);

//Hacer una función que se encargue de mostrar los números del 1 al 100 
//Pero los múltiplos de 3 sean remplazados por Fizz
//Los múltiplos de 5 sean remplazados por Buzz y si son multiplos de 3 y 5
// se deberá reemplazar por FizzBuzz.
const FizzBuzz = ()=>{
    for (a = 1; a <= 100; a++) {
        if (a % 3 === 0 && a % 5 === 0) {
            //console.log(a + " FizzBuzz");
        } else if (a % 3 === 0) {
           //console.log(a + " Fizz");
        } else if (a % 5 === 0) {
            //console.log(a + " Buzz");
        } else {
           // console.log(a);
        }
    }
}
FizzBuzz();

const calificaciones = [{calif: 10, student: 'A'},{calif: 8, student:'B'},{calif: 9, student: 'A'},{calif: 9, student: 'Y'},{calif: 3, student: 'B'},{calif: 7, student: 'C'}];
const calificacionesB = [6,7,8,9,10,8,5,3,4,7,5,7,4,7,9,6,3,9,9,6,10,4];
//Una función que reciba como parámetro un arreglo de calificaciones y obtenga el promedio.
    // promedio() {
    //     prom = (this.mate+this.historia+this.fisica+ this.quimica)/4
    //   return  `${prom}, Es el promedio del alumno`;
    // }

    const mean = (array = [])=>{
        const reducer = (acumulador, calificaciones) => acumulador+calificaciones;
        const suma = array.reduce(reducer, 0);
        return suma/array.length;
    }
   // console.log(mean(calificaciones));
//Un función que reciba como parámetro un arreglo de calificaciones y obtenga la media. 
    const median= (array = [], key, direction = 'desc')=>{
        const sortFunction = (a, b) => {
            let res = 0;
            if (a[key] > b[key]){
                res = 1;
            } 
            if(a[key] < b[key]){
                res = -1;
            }
            return direction === 'asc' 
            ? res
            : - res
        }
        let res = 0;
        const sortedCalif = array.sort(sortFunction);

        if (array.length % 2 === 0){
            const x = sortedCalif.length/2;
            const y = x+1;
            const medianStudents = sortedCalif.slice(x, y + 1);
            res = {students: medianStudents, median:([x, y])};
        } else{
          res = (Math.floor(sortedCalif.length/2));
          res= array[index];
        }

        return res;
    }
median(calificaciones, 'student', 'asc');


//Una función que reciba como parámetro un arreglo de calificaciones y obtenga la moda.
    
const moda = (array = []) => {
    const reducer = (acumulador, elemento) => {
      if(acumulador[elemento.calif]){
          acumulador[elemento.calif] += 1;
      }else {
          acumulador[elemento.calif] = 1;
      }
      return acumulador;
    }

    const count = array.reduce(reducer, {});
    const res = Object.entries(count);
    const max = res.reduce((acumulador, elemento) => {
        if(acumulador[1] < elemento[1]){
            acumulador = elemento;
        }
        return acumulador;
    }, [0, 0]);
    console.log(max);
}

moda(calificaciones);