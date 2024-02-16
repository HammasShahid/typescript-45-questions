const usernames: string[] = ['hammas', 'sameer', 'john', 'smith', 'admin'];

usernames.forEach(username => {
  if (username.toLowerCase() === 'admin') {
    console.log('Hello admin! wanna see a status report?')
  } else {
    console.log(`Hello ${username}! Thank you for logging in.`)
  }
})