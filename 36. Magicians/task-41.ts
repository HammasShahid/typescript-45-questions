const magicians = [
  'David Copperfield',
  'Penn Jillet',
  'Teller',
  'Brian Brushwood',
];

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

show_magicians(magicians);
