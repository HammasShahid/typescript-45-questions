const dinnerGuestsList: string[] = [
  'Elon Musk',
  'Isac Newton',
  'Muhammad Ali Jinnah',
];

dinnerGuestsList.forEach((guest) => {
  console.log(`Dear ${guest},\nYou are invited to a dinner at my place. Let's share great conversations and delicious food!\n\nSincerely,\nHammas`);
});

const guestsNum = dinnerGuestsList.length;

console.log(`I have invited ${guestsNum} guests`);
