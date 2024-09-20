const args = process.argv.slice(2); // remove first 2 elements;

if (args.length === 0) {
  console.log("Please provide at least one number.");
} else {
  const numbers = args.map(Number); // Convert arguments to numbers

  if (numbers.some(isNaN)) {
    console.log("Please provide only valid numbers.");
  } else {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }

    let average = sum / numbers.length;
    console.log(`The average is: ${average}`);
  }
}
