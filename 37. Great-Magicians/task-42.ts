const magicianNames = [
  'David Copperfield',
  'Penn Jillet',
  'Teller',
  'Brian Brushwood',
];

function make_great(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(`The great ${magician}`);
  });
}

make_great(magicianNames);
