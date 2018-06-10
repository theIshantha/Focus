// argument object 

const add = function (a, b) {

    console.log(arguments);
    return a + b ;

}

console.log(add(55, 1));

//this keyword - no longer bound 

const user = {
    name: 'Andrew',
    cities: ['Philadelphia','New York','Dublin'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city );
        });
    }
};
user.printPlacesLived();