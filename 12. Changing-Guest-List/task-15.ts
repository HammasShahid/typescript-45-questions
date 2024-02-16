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
