"use strict";

//var Q; no es necesario, ya las incluye ES6 nativamente (new Promise)
var Request;
var weather;
var arrays;

class Utils {

    constructor(long) {
        this.long = long || 10000;
    };

    includes(where,find,start) { 
        return where.includes(find, start); 
    };

    startsWith(where,find,start) { 
        return where.startsWith(find, start); 
    };

    /*static q() {
        if(!Q) {
            Q = require('q');
        }
        return Q;
    }*/

    static request() {
        if(!Request) {
            Request = require('request');
        }
        return Request;
    }

    static Weather() {
        if(!weather) {
            weather = require(__dirname+'/UtilsWeather');
        }
        return weather;
    }

    static arrays() {
        if(!arrays) {
            arrays = require(__dirname+'/UtilsArr');
        }
        return arrays;
    }
}

module.exports = Utils;