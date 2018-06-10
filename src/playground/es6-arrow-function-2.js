// argument object 

const add = function (a, b) {

    console.log(arguments);
    return a + b ;

}

console.log(add(55, 1));

//this keyword - no longer bound 

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        
            return this.cities.map((city) => this.name + ' has lived in ' + city); 
        }
};
console.log(user.printPlacesLived());


const multiplier = {

};