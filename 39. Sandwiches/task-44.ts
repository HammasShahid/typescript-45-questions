function makeSandwich(...args: string[]) {
  const ingredients = args.join(',\n');
  console.log(`Ingredients List:\n${ingredients}`);
}

makeSandwich('Cheese', 'Tomatoes', 'Chicken', 'Ketchup', 'Lettuce');
