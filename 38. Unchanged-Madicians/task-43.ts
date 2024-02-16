const magicianList = [
  'David Copperfield',
  'Penn Jillet',
  'Teller',
  'Brian Brushwood',
];

function make_great2(magicians: string[]): string[] {
  return magicians.map((magician) => {
    return `The great ${magician}`;
  });
}

function show_magicians2(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

const greatArray = make_great2(magicianList);

console.log('Unchanged Magician Array: ');
show_magicians2(magicianList);

console.log('\nGreate Magician Array: ');
show_magicians2(greatArray);
