const current_users: string[] = ['hammas', 'shahid', 'sameer', 'john', 'smith'];
const new_users: string[] = ['john', 'doe', 'james', 'jimmy', 'smith'];

new_users.forEach((newUser) => {
  let userExists: boolean = false;

  current_users.forEach((currentUser) => {
    if (newUser.toLowerCase() === currentUser.toLowerCase()) {
      userExists = true;
    }
  });

  if (userExists) {
    console.log(`${newUser}: Username already exists. Please enter a new username`);
  } else {
    console.log(`${newUser}: Username is available.`);
  }
});
