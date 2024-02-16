const invitationList: string[] = [
  'Elon Musk',
  'Isac Newton',
  'Muhammad Ali Jinnah',
];

function printInvitation(guestsList: string[]) {
  guestsList.forEach((guest) => {
    console.log(`Dear ${guest}, You are invited to a dinner at my place.`);
  });
}

printInvitation(invitationList);

console.log(`\nUnfortunately, ${invitationList[2]} can't make it\n`);

invitationList[2] = 'Steve Jobs';

printInvitation(invitationList);

// More Guests
console.log('\nI just found a bigger dinner table so i can invite more guests now.\n');

// Add to the beginning of list
invitationList.unshift('Mark Zuckerberg');
// Add to the end of list
invitationList.push('Joe Rogan');
// Add to middle of list
invitationList.splice(2, 0, 'Albert Einstein');

printInvitation(invitationList);

// Shrinking Guests
console.log('\nUnfortunately, I Can only invite two people for dinner now\n');

while (invitationList.length > 2) {
  console.log( `Dear, ${invitationList[invitationList.length - 1]}, I am sorry i can't invite you to dinner`);
  invitationList.pop();
}

console.log('\n')

printInvitation(invitationList);

// Make list empty
invitationList.pop()
invitationList.pop()

console.log(invitationList)