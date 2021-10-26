const args = process.argv;
const sliced = args.slice(2);

// console.log(sliced);

// const input = [ '1', '5', '10', '4.5', '-20' ];

let sum = 0;

for (const num of sliced) {
  // convert strings from command line into numbers
  const converted = Number(num);

  if (Number.isInteger(converted) && converted > 0) {
    sum += converted;
  }
}

console.log(sum);
