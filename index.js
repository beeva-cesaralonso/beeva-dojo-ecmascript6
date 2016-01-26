'use strict';

const long = 10;
const Utils = require(__dirname+'/lib/Utils');
const Arrays = Utils.arrays(); // llamamos a función estática de Utils que nos devuelve la clase Arrays


var ua = new Arrays(long); // llamamos a clase hija de Utils para arrays
var randomData = ua.getRandom(); // array de 10 els random
console.log(randomData);
console.log(ua.findIndex(randomData,6)); // buscamos el índice del elemento 6 => random...
console.log(ua.findIndex(randomData,777)); // buscamos el índice del elemento 777 => -1

var object = ua.objectIt([7,4,6,9,8,3,2,1]); // pasa un array a un objeto de lo más tonto...
console.log(object.arr); // el array pasado
console.log(object.list()); // el array en la clase
console.log(object.getItem(5));
object = object.getItem(5);
console.log(`El objeto con índice ${object.index} vale ${object.value}`);


var Weather = Utils.Weather(); // llamamos a función estática de Utils que nos devuelve la clase Weather
var uw = new Weather();
var city = 'Barcelona';
uw.get(city,function(err,w){
    if(!err) uw.write(city,w);
});

uw.print('Madrid');

var u = new Utils();
var word = "Prueba";
var test = "eb";
console.log(u.includes(word,test));
console.log(u.includes(word,test,7));
console.log(u.includes(word,word.substr(3)));
console.log(u.includes(word,"blablabla"));
