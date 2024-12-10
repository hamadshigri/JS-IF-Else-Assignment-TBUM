//Part 1: If-Else Challenge
// Problem:
// Write a JavaScript program that:

// Prompts the user to input their age.
// Based on the input, the program should determine and log the following:
// If the age is less than 13, log: "You are a child."
// If the age is between 13 and 19 (inclusive), log: "You are a teenager."
// If the age is between 20 and 59 (inclusive), log: "You are an adult."
// If the age is 60 or above, log: "You are a senior citizen."
// If the input is not a valid number or less than 0, log: "Invalid age entered."

// Solution 1:
let age = prompt("Please enter your age");

if (age >= 0 && age < 13) {
  console.log("You are child");
} else if (age >= 13 && age <= 19) {
  console.log("You are a teenager.");
} else if (age >= 20 && age <= 59) {
  console.log("You are an adult.");
} else if (age >= 60) {
  console.log("You are a senior citizen.");
} else {
  console.log("Invalid age entered");
}

// Part 2: Switch Challenge
// Problem:
// Write a JavaScript program that:

// Prompts the user to enter a day of the week (e.g., "Monday", "Tuesday").
// The program should log an appropriate message based on the day:
// "Monday", "Tuesday", "Wednesday", "Thursday", "Friday": Log "It's a weekday. Time to work!"
// "Saturday" or "Sunday": Log "It's the weekend. Enjoy your time!"
// If the input is not a valid day of the week, log "Invalid day entered. Please try again."

// Solution 2:
let weekday = prompt("Please enter a day of the week");

switch (weekday) {
  case "Monday":
    console.log("It's a weekday. Time to work!");
    break;
  case "Tuesday":
    console.log("It's a weekday. Time to work!");
    break;
  case "Wednesday":
    console.log("It's a weekday. Time to work!");
    break;
  case "Thursday":
    console.log("It's a weekday. Time to work!");
    break;
  case "Friday":
    console.log("It's a weekday. Time to work!");
    break;
  case "Saturday":
    console.log("It's the weekend. Enjoy your time!");
    break;
  case "Sunday":
    console.log("It's the weekend. Enjoy your time!");
    break;

  default:
    console.log("Invalid day entered. Please try again.");
}
