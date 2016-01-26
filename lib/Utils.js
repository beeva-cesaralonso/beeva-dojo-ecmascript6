"use strict";

var Q;
var Request;
var weather;
var arrays;

class Utils {

    constructor(long) {
        this.long = long || 10000;
    };

    static includes(where,find,start) { 
        return where.includes(find, start); 
    };

    static startsWith(where,find,start) { 
        return where.startsWith(find, start); 
    };

    static q(){
        if(!Q) {
            Q = require('q');
        }
        return Q;
    }

    static request(){
        if(!Request) {
            Request = require('request');
        }
        return Request;
    }

    static Weather(){
        if(!weather) {
            weather = require(__dirname+'/UtilsWeather');
        }
        return weather;
    }

    static arrays(){
        if(!arrays) {
            arrays = require(__dirname+'/UtilsArr');
        }
        return arrays;
    }
}

module.exports = Utils;

/*
var Q;
var Request;
var weather;
var arrays;
var utils = function(long){
    var request;
    var $this = this;
    this.long = 10000;
    this.init = function(){
        if(long) $this.long = long;
    };

    this.includes = function(where,find,start){
        return (where.substr(start).indexOf(find)!==-1);
    };

    this.startsWith = function(where,find,start){
        return (where.substr(start,where.length) === where);
    };

    this.init();
};

// método estático
utils.q = function(){
    if(!Q) Q = require('q');
    return Q;
};

// método estático
utils.request = function(){
    if(!Request) Request=require('request');
    return Request;
};

// método estático
utils.Weather = function(){
    if(!weather) weather=require(__dirname+'/UtilsWeather');
    return weather;
};

// método estático
utils.prototype.Arrays = function(){
    if(!arrays) arrays=require(__dirname+'/UtilsArr');
    return arrays;
};

module.exports = utils;
*/