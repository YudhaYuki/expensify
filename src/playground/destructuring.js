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
const {name, age} = person;
console.log(`${name} is ${age} years old.`)

const {city, temp} = person.location;
if (city && temp) {
    console.log(`It's ${temp} degrees in ${city}.`);
}

