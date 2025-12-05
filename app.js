// // Simple program using prompt
const city = prompt("Please enter a city name:");

if (city && city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights!");
} else if (city) {
    alert(`You entered: ${city}`);
} else {
    alert("No city entered.");
} 


// Program to greet based on gender
const gender = prompt("Please enter your gender (male/female):");

if (gender && gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender && gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
} else {
    alert("Good Morning!");
}


// Traffic Signal Program
const color = prompt("Enter the traffic signal color (Red/Yellow/Green):");

if (color) {
    const lowerColor = color.toLowerCase().trim();
    
    if (lowerColor === "red") {
        alert("STOP! Do not cross the road.");
    } else if (lowerColor === "yellow") {
        alert("GET READY to go.");
    } else if (lowerColor === "green") {
        alert("GO! You can cross the road now.");
    } else {
        alert(`"${color}" is not a valid traffic signal color. Please enter Red, Yellow, or Green.`);
    }
} else {
    alert("No color entered. Please enter Red, Yellow, or Green.");
}

// Enhanced Fuel Check Program
const fuelInput = prompt("Enter remaining fuel in your car (in litres):");
const fuel = parseFloat(fuelInput);

if (isNaN(fuel) || fuelInput.trim() === "") {
    alert("Invalid input. Please enter a valid number.");
} else if (fuel < 0) {
    alert("Fuel cannot be negative. Please enter a valid amount.");
} else if (fuel < 0.25) {
    alert("⚠️ WARNING: Please refill the fuel in your car!");
} else {
    alert(`✅ You have ${fuel.toFixed(2)} litres of fuel. Safe to drive.`);
}


// Marks and Grade Calculator
const subject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
const subject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
const subject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
const totalMarks = parseFloat(prompt("Enter total marks for each subject:"));

if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(totalMarks)) {
    alert("Invalid input. Please enter valid numbers.");
} else {
    const marksObtained = subject1 + subject2 + subject3;
    const maxTotal = totalMarks * 3;
    const percentage = (marksObtained / maxTotal) * 100;
    
    let grade, remarks;
    
    if (percentage >= 90) {
        grade = "A+";
        remarks = "Excellent";
    } else if (percentage >= 80) {
        grade = "A";
        remarks = "Very Good";
    } else if (percentage >= 70) {
        grade = "B";
        remarks = "Good";
    } else if (percentage >= 60) {
        grade = "C";
        remarks = "Fair";
    } else if (percentage >= 50) {
        grade = "D";
        remarks = "Pass";
    } else {
        grade = "F";
        remarks = "Fail";
    }
    
    const result = `
    ===== RESULT =====
    Total Marks: ${maxTotal}
    Marks Obtained: ${marksObtained}
    Percentage: ${percentage.toFixed(2)}%
    Grade: ${grade}
    Remarks: ${remarks}
    ==================`;
    
    alert(result);
}


// Guess Game
const secretNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1-10
const guess = parseInt(prompt("Guess the secret number (1-10):"));

if (isNaN(guess) || guess < 1 || guess > 10) {
    alert("Please enter a valid number between 1 and 10.");
} else if (guess === secretNumber) {
    alert(`Bingo! Correct answer. The secret number was ${secretNumber}.`);
} else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
    alert(`Close enough to the correct answer. The secret number was ${secretNumber}.`);
} else {
    alert(`Wrong guess. The secret number was ${secretNumber}.`);
}



// Check divisible by 3
const number = parseInt(prompt("Enter a number to check if divisible by 3:"));

if (isNaN(number)) {
    alert("Invalid input. Please enter a valid number.");
} else if (number % 3 === 0) {
    alert(`${number} is divisible by 3.`);
} else {
    alert(`${number} is NOT divisible by 3.`);
}


// Even or Odd Checker
const num = parseInt(prompt("Enter a number to check if it's even or odd:"));

if (isNaN(num)) {
    alert("Invalid input. Please enter a valid number.");
} else if (num % 2 === 0) {
    alert(`${num} is an EVEN number.`);
} else {
    alert(`${num} is an ODD number.`);
}


// Temperature Message
const temperature = parseFloat(prompt("Enter temperature in °C:"));

if (isNaN(temperature)) {
    alert("Invalid input. Please enter a valid temperature.");
} else if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today's Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today's weather is so Cool.");
} else {
    alert("It's very cold outside!");
}


// Simple Calculator
const num1 = parseFloat(prompt("Enter first number:"));
const num2 = parseFloat(prompt("Enter second number:"));
const operation = prompt("Enter operation (+, -, *, /, %):");

if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid numbers. Please enter valid numbers.");
} else {
    let result;
    
    if (operation === "+") {
        result = num1 + num2;
        alert(`${num1} + ${num2} = ${result}`);
    } else if (operation === "-") {
        result = num1 - num2;
        alert(`${num1} - ${num2} = ${result}`);
    } else if (operation === "*") {
        result = num1 * num2;
        alert(`${num1} × ${num2} = ${result}`);
    } else if (operation === "/") {
        if (num2 === 0) {
            alert("Error: Division by zero is not allowed.");
        } else {
            result = num1 / num2;
            alert(`${num1} ÷ ${num2} = ${result}`);
        }
    } else if (operation === "%") {
        result = num1 % num2;
        alert(`${num1} % ${num2} = ${result}`);
    } else {
        alert("Invalid operation. Please use +, -, *, /, or %");
    }
}