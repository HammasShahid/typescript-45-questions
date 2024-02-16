type AlienColor = 'green' | 'red' | 'yellow';

function checkColor(color: AlienColor) {
  if (color === 'green') {
    console.log('You just earned 5 points');
  } else if (color === 'yellow') {
    console.log('You just earned 10 points');
  } else {
    console.log('You just earned 15 points');
  }
}

// Version 1
checkColor('green');

// Version 2
checkColor('yellow');

// Version 3
checkColor('red');
