
// OBJECT DESTRUCTURING

/*
const person = {
    name: 'Yudha',
    age: 30,
    location: {
        city: 'Brussels',
        temp: 10
    }
}

// const name = person.name;
// const age = person.age;

// Using destructring
const {name: firstName = 'Anonymous', age} = person;
console.log(`${firstName} is ${age} years old.`)

// const {city, temp} = person.location;
// if (city && temp) {
//     console.log(`It's ${temp} degrees in ${city}.`);
// }

// Ability to reNAMING
/*
const {city, temp: temperature} = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} degrees in ${city}.`);
}


// Ability to set up default value
const {city, temp: temperature} = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} degrees in ${city}.`);
}
*/

/*
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name : publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName); // Penguin, Selfpublished
*/






// ARRAY DESTRUCTURING
//const address = ['Lagerestraat', 'Ghent', 'East Flamish', '195'];
//const [street, city, state, zip] = address;

// const address = [];

// Set up default
// const [, , state = 'New York'] = address;

/*
const address = ['Lagerestraat', 'Ghent', 'East Flamish', '195'];
const [, city, state] = address;

console.log(`You're in ${city} ${state}`);
*/



// Example TWO
const item = ['Coffee(hot)', '$3.0', '$3.5', '$3.75'];
// const [itemName, priceForSmall, priceForMedium, priceForLarge] = item;
const [itemName, , priceForMedium] = item;

console.log(`A medium ${itemName} costs ${priceForMedium}`);