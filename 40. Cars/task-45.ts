interface CarAttributes {
  manufacturer: string;
  model: string;
}

interface CarExtras {
  [key: string]: string | number;
}

function getCar(
  manufacturer: string,
  model: string,
  ...args: CarExtras[]
): CarAttributes {
  const obj = {
    manufacturer,
    model,
  };

  args.forEach((item) => {
    Object.keys(item).forEach((key) => {
      obj[key] = item[key];
    });
  });

  return obj;
}

console.log(getCar('Toyota', 'Corolla', { color: 'Black', year: 2023 }));
