 document.write("<h1> Welcome to JS </h1>");

 document.write("<h1> Chapter 26 t0  30 </h1>");

 //Question 01 :Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
 document.write("<h3> Chapter : 01 </h3>");

        // Take positive integer input from the user
        const userInput = prompt("Enter a positive integer:");

        // Convert the input to a number
        const number = parseFloat(userInput);

        // Check if the input is a valid positive integer
        if (!isNaN(number) && number > 0) {
            // Calculate the round-off, floor, and ceil values
            const roundedValue = Math.round(number);
            const floorValue = Math.floor(number);
            const ceilValue = Math.ceil(number);

            // Display the results
            document.write("<h2>Number Calculations</h2>");
            document.write("<p>Number: " + number + "</p>");
            document.write("<p>Round-off value: " + roundedValue + "</p>");
            document.write("<p>Floor value: " + floorValue + "</p>");
            document.write("<p>Ceil value: " + ceilValue + "</p>");
        } else {
            document.write("<p>Please enter a valid positive integer.</p>");
        }


//Question 02 :Write a program that takes a negative floating point number from 
// user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
document.write("<h3> Chapter : 02 </h3>");

const userInput1 = prompt("Enter a negative floating-point number:");

        // Convert the input to a number
        const number1 = parseFloat(userInput1);

        // Check if the input is a valid negative floating-point number
        if (!isNaN(number1) && number1 < 0) {
            // Calculate the round-off, floor, and ceil values
            const roundedValue = Math.round(number1);
            const floorValue = Math.floor(number1);
            const ceilValue = Math.ceil(number1);

            // Display the results
            document.write("<h2>Negative Floating Point Number Calculations</h2>");
            document.write("<p>Number: " + number1 + "</p>");
            document.write("<p>Round-off value: " + roundedValue + "</p>");
            document.write("<p>Floor value: " + floorValue + "</p>");
            document.write("<p>Ceil value: " + ceilValue + "</p>");
        } else {
            document.write("<p>Please enter a valid negative floating-point number.</p>");
        }


//Question 03 :Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
document.write("<h3> Chapter : 03 </h3>");
        // Take number input from the user
        const userInput2 = prompt("Enter a number:");

        // Convert the input to a number
        const number2 = parseFloat(userInput2);

        // Check if the input is a valid number
        if (!isNaN(number2)) {
            // Calculate the absolute value
            const absoluteValue = Math.abs(number2);

            // Display the results
            document.write("<h2>Absolute Value Calculation</h2>");
            document.write("<p>Absolute value of " + number2 + " is " + absoluteValue2 + ".</p>");
        } else {
            document.write("<p>Please enter a valid number.</p>");
        }


//Question 04 : Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your browser.:
document.write("<h3> Chapter : 04 </h3>");

// Simulate a dice roll
const diceValue = Math.floor(Math.random() * 6) + 1;

// Display the result
document.write("<h5>Dice Simulator</h5>");
document.write("<p>You rolled a " + diceValue + "!</p>");



//Question 05 :Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your browser
document.write("<h3> Chapter : 05 </h3>");

         //Simulate a coin toss
        const coinToss = Math.random() < 0.5 ? "Heads" : "Tails";

        // Display the result
        document.write("<h2>Coin Toss Simulator</h2>");
        document.write("<p>The result of the coin toss is: " + coinToss + "</p>")


//Question 06 :. Write a program that shows a random number between 1
// and 100 in your browser.
document.write("<h3> Chapter : 06 </h3>");

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Display the result
document.write("<h2>Random Number Generator</h2>");
document.write("<p>Your random number between 1 and 100 is: " + randomNumber + "</p>");

//Question 07 : Write a program that asks the user about his weight. Parse the user input
//  and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

document.write("<h3> Chapter : 07 </h3>");

 // Prompt the user for their weight
 const userInput7 = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, or 50.2kilograms):");

 // Regular expression to match numeric values followed by optional units
 const weightPattern = /^\s*([0-9]*\.?[0-9]+)\s*(kgs?|kilograms)?\s*$/i;
 const match = userInput7.match(weightPattern);

 if (match) {
     // Parse the numeric value
     const weight = parseFloat(match[1]);
     document.write("<h2>Your Weight</h2>");
     document.write("<p>Your weight is: " + weight + " kg</p>");
 } else {
     document.write("<h2>Invalid Input</h2>");
     document.write("<p>Please enter a valid weight format.</p>");
 }


//Question 08 :Write a program that stores a random secret number from 1 to 10 in a variable.
//  Ask the user to input a number between 1 and 10. If the user input equals the secret
// number, congratulate the user.
document.write("<h3> Chapter : 08 </h3>");

// Generate a random secret number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to input a number between 1 and 10
const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

// Check if the user input is a valid number and within the range
if (userGuess >= 1 && userGuess <= 10) {
    // Compare user's guess with the secret number
    if (userGuess === secretNumber) {
        document.write("<h2>Congratulations!</h2>");
        document.write("<p>You guessed the secret number: " + secretNumber + "</p>");
    } else {
        document.write("<h2>Try Again!</h2>");
        document.write("<p>The secret number was: " + secretNumber + "</p>");
    }
} else {
    document.write("<h2>Invalid Input</h2>");
    document.write("<p>Please enter a number between 1 and 10.</p>");
}

