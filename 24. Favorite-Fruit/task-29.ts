const favorite_fruit: string[] = ['Mango', 'Apple', 'Banana'];

favorite_fruit.forEach((fruit) => {
  const favFruit = fruit.toLowerCase();
  if (favFruit === 'apple') {
    console.log('I love apples.');
  } else if (favFruit === 'mango') {
    console.log('Mangoes are the king of fruits');
  } else if (favFruit === 'banana') {
    console.log('Bananas are sweet');
  } else if (favFruit === 'papaya') {
    console.log('Papayas are yellow');
  } else if (favFruit === 'star fruit') {
    console.log('Star fruits are great tropical fruits.');
  }

});
