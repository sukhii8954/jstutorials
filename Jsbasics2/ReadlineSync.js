const readlineSync = require("readline-sync");
const userName = readlineSync.question("May I know your name ?");
// console.log(`Welcome ${userName}!`);

const userAge = readlineSync.question("May I know your age ? ");

const useAgeNumber = Number(userAge);

if (!isNaN(useAgeNumber)) {
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - useAgeNumber;

  console.log(`you were born in the year ${birthYear}`);
} else {
  console.log("Please enter a valid number for age.");
}

// using readline-sync to read user input from the terminal
