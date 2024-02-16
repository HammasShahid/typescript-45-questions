const person: string = 'Hammas';
const age: number = 20;
const city: string = 'Karachi';

// test 1
console.log("is person == 'Hammas'? I predict True.");
console.log(person == 'Hammas');
// test 2
console.log('is age == 20? I predict True.');
console.log(age == 20);
// test 3
console.log('is age < 25? I predict True.');
console.log(age < 25);
// test 4
console.log("typeof age === 'number'? I predict True.");
console.log(typeof age === 'number');
// test 5
console.log("is city === 'Karachi'? I predict True.");
console.log(city === 'Karachi');

// test 6
console.log("typeof age === 'string'? I predict False.");
console.log(typeof age === 'string');
// test 7
console.log("typeof city === 'number'? I predict False.");
console.log(typeof city === 'number');
// test 8
console.log("is city === 'Lahore'? I predict False.");
console.log(city === 'Lahore');
// test 9
console.log("is person === 'Sameer'? I predict False.");
console.log(person === 'Sameer');
// test 10
console.log("is typeof person === typeof age? I predict False.");
console.log(typeof person === typeof age);
