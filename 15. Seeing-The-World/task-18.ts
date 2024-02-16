const locations = ['Makkah', 'USA', 'Palestine', 'England', 'Egypt'];

console.log('Original List: ', locations);

console.log('Alphabetical order ', [...locations].sort());
console.log('Original List: ', locations);

console.log('Reverse alphabetical order: ', [...locations].sort().reverse());
console.log('Original List: ', locations);

locations.reverse();
console.log('Original list reversed: ', locations);

locations.reverse();
console.log('Original list back to original order: ', locations);


locations.sort();
console.log('Original list in alphabetical order: ', locations);

locations.reverse();
console.log('Original list in reverse alphabetical order: ', locations);