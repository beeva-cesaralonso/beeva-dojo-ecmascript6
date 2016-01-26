'use strict';

var Utils = require(__dirname+'/Utils');
var err = 'Ha de indicar una ciudad';

class Weather {
    
    constructor() {};

    get (city, cb) {
        return new Promise((resolve,reject) => {
            if(city) {
                let req = Utils.request();
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

    print (city) {
        this.get(city).then((w) => {
            this.write(city, w);
        } , () => {
            console.log(err);
        });
    }
}

module.exports = Weather;