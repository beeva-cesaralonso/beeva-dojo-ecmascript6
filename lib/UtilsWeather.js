'use strict';

var Utils = require(__dirname+'/Utils');

class Weather {
    constructor() {};

    get (city, cb) {
        return new Promise((resolve,reject) => {
            if(city) {
                var req = Utils.request();
                req.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},es&lang=sp&units=metric&appid=91ace8606d31eb909caff50f9cd5bffa`, (err,res,body) => {
                    if (!err && 200 === res.statusCode) {
                        body = JSON.parse(body);
                        if(cb) {
                            cb(null,body);
                        }
                        return resolve(body);
                    } else {
                        if(cb) {
                            cb(err);
                        }
                        return reject();
                    }
                });
            } else {
                var err = 'Ha de introducir una ciudad';
                if(cb) {
                    cb(err);
                }
                return reject(err);
            }
        });
    };

    write (city, w) {
        console.log(`El tiempo en la ciudad de ${city} es: ${w.weather[0].description} y ${w.main.temp}º`);
    };

    print (city){
        this.get(city).then((w) =>{
            this.write(city, w);
        },() => {
            console.log('Ha de indicar una ciudad');
        });
    }
}

module.exports = Weather;

//////////////ES5
/*
var UtilsWeather = function(){
    var $this = this;

    this.get = function(city,cb){
        var q = Utils.q();
        return q.Promise(function(resolve,reject){
            if(city){
                var req = Utils.request();
                req.get('http://api.openweathermap.org/data/2.5/weather?q='+city+',es&lang=sp&units=metric&appid=91ace8606d31eb909caff50f9cd5bffa',function(err,res,body){
                    if (!err && res.statusCode === 200) {
                        body=JSON.parse(body);
                        if(cb) cb(null,body);
                        return resolve(body);
                    }else{
                        if(cb) cb(err);
                        return reject();
                    }
                });
            }else{
                var err = "Ha de introducir una ciudad";
                if(cb) cb(err);
                return reject(err);
            }
        });
    };

    this.write = function(city,w){
        console.log("El tiempo en la ciudad de "+city+" es: "+w.weather[0].description+" y "+w.main.temp+"º");
    };

    this.print = function(city){
        $this.get(city).then(function(w){
            $this.write(city,w);
        },function(){
            console.log('Ha de indicar una ciudad');
        });
    };
};

UtilsWeather.prototype = new Utils();

module.exports = UtilsWeather;
*/