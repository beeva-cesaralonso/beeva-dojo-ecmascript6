'use strict';

const long = 10;
const Utils = require(__dirname+'/lib/Utils');
const Arrays = Utils.arrays(); // llamamos a función estática de Utils que nos devuelve la clase Arrays

let ua = new Arrays(long); // llamamos a clase hija de Utils para arrays
let randomData = ua.getRandom(); // array de 10 els random
console.log(randomData);
console.log(ua.findIndex(randomData,6)); // buscamos el índice del elemento 6 => random...
console.log(ua.findIndex(randomData,777)); // buscamos el índice del elemento 777 => -1

let object = ua.objectIt([7,4,6,9,8,3,2,1]); // pasa un array a un objeto de lo más tonto...
console.log(object.arr); // el array pasado
console.log(object.list()); // el array en la clase
console.log(object.getItem(5));
object = object.getItem(5);
console.log(`El objeto con índice ${object.index} vale ${object.value}`);


let Weather = Utils.Weather(); // llamamos a función estática de Utils que nos devuelve la clase Weather
let uw = new Weather();
let city = 'Barcelona';
uw.get(city,function(err,w){
    if(!err) uw.write(city,w);
});

uw.print('Madrid');

let u = new Utils();
let word = "Prueba";
let test = "eb";
console.log(u.includes(word,test));
console.log(u.includes(word,test,7));
console.log(u.includes(word,word.substr(3)));
console.log(u.includes(word,"blablabla"));