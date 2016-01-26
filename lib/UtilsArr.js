'use strict';

var Utils = require(__dirname+'/Utils');

class Arrays extends Utils {

    constructor(size) {
        super(size);
        this.arr = [];
    };

    getRandom(size) {
        size = size || this.long;
        if(size !== this.arr.length){
            this.arr.splice(0,this.arr.length);
            for(let i=0; i<size; i++) this.arr.push(i);
        }
        return this.shuffle(this.arr);
    };

    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex ;
        let start = 0;
        let end = array.length;

        while(0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };

    findIndex(where, what) {
        return where.findIndex(x => x === what);
    };

    find(where, what) {
        return where.find(x => x === what);
    };

    objectIt(arr) {
        var obj = {
            arr,
            classArray : this.arr, // y si ponemos this.arr ??
            list : function () {
                var res = {};
                for(let i=0, len=this.arr.length;i<len;i++) {
                    res['item_'+i] = this.arr[i];
                }
                return res;
            },
            getItem : function (i) {
                var it = {
                    value : this.arr[i],
                    index : i
                };
                it['item_'+i] = this.arr[i];
                return it;
            }
        };
        return obj;
    };
}

module.exports = Arrays;