const userNames: string[] = ['hammas', 'sameer', 'john', 'smith'];

// Check userNames array length
if (userNames.length !== 0) {
  // remove all users
  while (userNames.length !== 0) {
    userNames.pop();
  }
} else {
  console.log('We need to find some users!');
}
