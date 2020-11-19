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

const calificaciones = {
    mate: 10,
    historia:8,
    fisica: 9,
    quimica:6,
    etica:10,
//Una función que reciba como parámetro un arreglo de calificaciones y obtenga el promedio.
    promedio() {
        prom = (this.mate+this.historia+this.fisica+ this.quimica)/4
      return  `${prom}, Es el promedio del alumno`;
    },

//Un función que reciba como parámetro un arreglo de calificaciones y obtenga la media. 
    media() {
        media1 = (this.mate+this.historia+this.fisica+ this.quimica)/calificaciones.length;
        return  `${media1}, Es la media de las calificaciones`;
    },

//Una función que reciba como parámetro un arreglo de calificaciones y obtenga la moda.
    
}

console.log(calificaciones.promedio());
console.log(calificaciones.media());

