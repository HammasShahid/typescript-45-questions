function checkAlienColor(color: string) {
  if (color === 'green') {
    console.log('You just earned 5 points!');
  } else {
    console.log('You just earned 10 points.');
  }
}

let alien_color: string;

//
// Version 1
//
alien_color = 'green';
checkAlienColor(alien_color);

//
// Version 2
//
alien_color = 'yellow';
checkAlienColor(alien_color);
