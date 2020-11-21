//console.log(1);
//console.log(2);

//Bloquea el proceso la inserción del siguiente 
// for (let i = 0; i < 99999999999; i++) {
//     setTimeout(()=>{
//         console.log(3);
//     },3000);
    
// }
//setTimeout(() => {
  //  console.log('sin ciclo');
//}, 3000);
//setTimeout(() => {
    //for (let i = 0; i < 99999999; i++);
   // console.log('ciclo eterno');
//}, 1000);

//console.log(4);


//Promesas

let mathGrade = 10;

const myPromise = new Promise((resolve, reject)=>{
    const phone = {
        brand: 'huawei',
        os: 'android'
    }
    if (mathGrade >= 9) {
       resolve(phone); 
    }else {
        reject('Echale ganas, mijo');
    }
})

myPromise
.then((phone)=>{
    console.log(phone);
})
.then(()=>{
    console.log('Felicidades');
})
.catch(err=>{
    console.log(err);
})
//fin del programa
.finally(()=>{
    console.log('fin del programa');
})