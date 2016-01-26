'use strict';

import * as Utils from __dirname+'/Utils'

class UtilsArr {
    
    constructor(long) {
        var arr = [];
    }

    static getRandom(size = this.long){
        if(size !== arr.length){
            arr.splice(0,arr.length);
            for(let i=0; i<size; i++) arr.push(i);
        }
        return this.shuffle(arr);
    }

    static shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex ;
        var start = 0;
        var end = array.length;

        while(0 !== currentIndex) {
            yield currentIndex;

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            array[currentIndex, randomIndex] = array[randomIndex, currentIndex];
        }

        return array;
    }

    static findIndex(where, what) {
        for(let i = 0;i<where.length;i++){
            if(where[i] === what) return i;
        }
        return -1;
    }
}

//////////////////////////// ES5

/*
var Utils = require(__dirname+'/Utils');

var UtilsArr = function(long){
    var $this = this;
    var arr = [];

    this.getRandom = function(size){
        size = size || $this.long;
        if(size !== arr.length){
            arr.splice(0,arr.length);
            for(var i=0;i<size;i++) arr.push(i);
        }
        return $this.shuffle(arr);
    };

    this.shuffle = function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex ;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    this.findIndex = function(where,what){
        for(var i = 0;i<where.length;i++){
            if(where[i] === what) return i;
        }
        return -1;
    };

    this.find = function(where,what){
        var index = $this.findIndex(where,what);
        return (index !== -1)?where[index]:undefined;
    };

    this.objectIt = function(arr) {
        var obj = {
            arr : arr,
            classArray : $this.arr, // y si ponemos this.arr ??
            list : function(){
                var res = {};
                for(var i=0, len = this.arr.length;i<len;i++) res['item_'+i]=this.arr[i];
                return res;
            },
            getItem : function(i){
                var it = {
                    value : this.arr[i],
                    index : i
                };
                it['item_'+i]=this.arr[i];
                return it;
            }
        };
        return obj;
    };

    this.init = function(size){
        if(size) $this.long = size;
    };

    this.init(long);

};

UtilsArr.prototype = new Utils();

module.exports = UtilsArr;

*/