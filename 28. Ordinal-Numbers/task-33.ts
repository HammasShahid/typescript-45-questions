const numArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numArray.forEach((num) => {
  let ordinalNumber: string;

  if (num === 1) {
    ordinalNumber = '1st';
  } else if (num === 2) {
    ordinalNumber = '2nd';
  } else if (num === 3) {
    ordinalNumber = '3rd';
  } else {
    ordinalNumber = num + 'th';
  }

  console.log(ordinalNumber);
});
