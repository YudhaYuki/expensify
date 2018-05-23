const person = {
    name: 'Yudha',
    age: 30,
    location: {
        city: 'Brussels',
        temp: 23
    }
}

// const name = person.name;
// const age = person.age;

// Using destructring
const {name, age} = person;

console.log(`${name} is ${age} years old.`)