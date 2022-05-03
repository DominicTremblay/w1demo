// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// takes in an unlimited number of command line arguments (Slice)
// edge case: We need at least 2 arguments => output an error message

const args = process.argv.slice(2);
console.log('args:', args);

if (args.length < 2) {
  console.log(`Error: please input at least 2 arguments`);
  process.exit();
}

const allNums = function (numbers) {
  for (let num of numbers) {
    // edge case:  If any argument is not a number, output an error message.
    if (isNaN(num)) {
      console.log(`Error: please input only numbers`);
      // stop the script
      process.exit();
      // break;
    }
  }

  return numbers;
};

// goes through each
// For Loop

// c-style loop
// for (let i = 0; i < args.length; i++) {}
const sum = function (numbers) {
  //accumulator
  let total = 0;

  // for of => more readable
  for (let nb of numbers) {
    // convert the arg to a number => typecasting
    const convertedNum = Number(nb);

    // edge case: If any argument is not a whole number, skip it.
    // modulo => number % 1 == 0
    // Number.isInteger

    if (Number.isInteger(convertedNum)) {
      total += convertedNum;
      // total = total + convertedNum;
    }

    console.log(
      'convertedNum',
      convertedNum,
      typeof convertedNum,
      'total',
      total
    );
  }

  // prints out the sum of them
  return total;
};

const result = sum(allNums(args));

console.log('result', result);
