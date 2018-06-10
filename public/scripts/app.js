'use strict';

// argument object 

var add = function add(a, b) {

    console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

//this keyword - no longer bound 

var user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    number: [1, 2, 3],
    multiplyby: 2,

    multiply: function multiply() {
        var _this2 = this;

        return this.number.map(function (num) {
            return num + ' multiply by ' + _this2.multiplyby + ' = ' + _this2.number * num;
        });
    }
};

console.log(multiplier.multiply());
