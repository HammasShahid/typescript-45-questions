const myName: string = 'hammas shahid';

// Function that converts strings to title case
const getTitleCase = (userName: string) => {
  const splitName = userName.split(' ');

  const titleArray = splitName.map((n) => {
    const firstChar = n.charAt(0).toUpperCase();
    const subStr = n.substring(1);

    return firstChar + subStr;
  });

  return titleArray.join(' ');
};

// storing values to variables
const upper = myName.toUpperCase();
const lower = myName.toLowerCase();
const title = getTitleCase(myName);

// Printing output to console.
console.log(`Uppercase: ${upper}`);
console.log(`Lowercase: ${lower}`);
console.log(`TitleCase: ${title}`);
