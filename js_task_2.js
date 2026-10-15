
// JavaScript Training Practice



// ---------- Part 1: Variables and Data Types ----------

// Q1: var, let, const
var place = "Chennai";
var place = "Madurai";      // var allows redeclare
place = "Coimbatore";       // and reassign
console.log("var:", place);

let score = 10;
score = 20;                 // let allows reassign, not redeclare
console.log("let:", score);

const pi = 3.14;            // const allows neither
console.log("const:", pi);

// Q2: typeof
let myName = "Vimal";
let myAge = 24;
let knowsProgramming = "Beginner";
console.log(myName, "->", typeof myName);
console.log(myAge, "->", typeof myAge);
console.log(knowsProgramming, "->", typeof knowsProgramming);

// Q3: array of fruits
let fruits = ["Apple", "Banana", "Mango", "Papaya", "Guava"];
console.log("All fruits:", fruits);
console.log("First:", fruits[0]);
console.log("Last:", fruits[fruits.length - 1]);

// Q4: object
let me = { name: "Vimal", role: "Web Developer", cgpa: 8.2 };
console.log("Name:", me.name);
console.log("Role:", me.role);
console.log("CGPA:", me.cgpa);

// Q5: prompt and alert
let userName = prompt("What is your name?");
let userAge = prompt("What is your age?");
alert("Hello, " + userName + "!");
console.log("Age:", userAge);


// ---------- Part 2: Operators ----------

// Q6: arithmetic
let x = 15;
let y = 4;
console.log("x + y =", x + y);
console.log("x - y =", x - y);
console.log("x * y =", x * y);
console.log("x / y =", x / y);
console.log("x % y =", x % y);
console.log("x ** y =", x ** y);

// Q7: output is 5, 6, 7
let a1 = 5;
console.log(a1++); // 5  (prints, then increases)
console.log(a1);   // 6
console.log(++a1); // 7  (increases, then prints)

// Q8: output is 8, 10, 8
let a2 = 10;
let b2 = a2--;     // b2 = 10, a2 = 9
let c2 = --a2;     // a2 = 8, c2 = 8
console.log(a2);   // 8
console.log(b2);   // 10
console.log(c2);   // 8

// Q9: assignment operators
let value = 50;
value += 10;  console.log("+=", value); // 60
value -= 20;  console.log("-=", value); // 40
value *= 3;   console.log("*=", value); // 120
value /= 4;   console.log("/=", value); // 30
value %= 7;   console.log("%=", value); // 2

// Q10: comparisons
console.log(5 == "5");    // true  (value only)
console.log(5 === "5");   // false (type differs)
console.log(10 != "10");  // false
console.log(10 !== "10"); // true

// Q11: logical operators
let isStudent = true;
let hasLaptop = false;
console.log("isStudent && hasLaptop:", isStudent && hasLaptop); // false
console.log("isStudent || hasLaptop:", isStudent || hasLaptop); // true
console.log("!isStudent:", !isStudent);                         // false
console.log("!hasLaptop:", !hasLaptop);                         // true

// Q12: ternary
let ageToCheck = 17;
console.log(ageToCheck >= 18 ? "You are 18 or above" : "You are below 18");


// ---------- Part 3: Type Casting and Conditions ----------

// Q13: types
console.log(typeof ("hello" + 10));        // string
console.log(typeof (10 + true));           // number (true becomes 1)
console.log(typeof (10 + null));           // number (null becomes 0)
console.log(typeof ("hello" + undefined)); // string

// Q14: Number()
let enteredText = prompt("Enter a number:");
let enteredNumber = Number(enteredText);
console.log("Number + 10 =", enteredNumber + 10);

// Q15: Boolean()
console.log(Boolean(""));      // false
console.log(Boolean("text"));  // true
console.log(Boolean(0));       // false
console.log(Boolean(true));    // true

// Q16: positive or not
let num = -7;
if (num > 0) {
    console.log(num + " is positive");
} else {
    console.log(num + " is not positive");
}

// Q17: time of day
let hour = Number(prompt("Enter the hour (0-23):"));
if (isNaN(hour) || hour < 0 || hour > 23) {
    console.log("Please enter a valid hour between 0 and 23");
} else if (hour < 6) {
    console.log("Early morning");
} else if (hour < 12) {
    console.log("Morning");
} else if (hour < 17) {
    console.log("Afternoon");
} else if (hour < 21) {
    console.log("Evening");
} else {
    console.log("Night");
}

// Q18: nested if (age >= 18, height >= 160, weight >= 50)
let personAge = 22;
let personHeight = 165;
let personWeight = 55;

if (personAge >= 18) {
    if (personHeight >= 160) {
        if (personWeight >= 50) {
            console.log("Eligible");
        } else {
            console.log("Not eligible: weight below 50");
        }
    } else {
        console.log("Not eligible: height below 160");
    }
} else {
    console.log("Not eligible: age below 18");
}


// ---------- Part 4: Switch and Loops ----------

// Q19: traffic light
let light = "green";
switch (light) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Error: invalid colour");
}

// Q20: 1 to 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// Q21: even numbers 2 to 20
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Q22: 10 down to 1 (while)
let down = 10;
while (down >= 1) {
    console.log(down);
    down--;
}

// Q23: 1 to 10 (do-while)
let up = 1;
do {
    console.log(up);
    up++;
} while (up <= 10);

// Q24: characters of "JavaScript"
for (let ch of "JavaScript") {
    console.log(ch);
}

// Q25: student names
let students = ["Anitha", "Karthik", "Meena", "Suresh", "Divya"];
for (let s of students) {
    console.log(s);
}

// Q26: for-in on object
let student = {
    name: "Priya",
    role: "Frontend Developer",
    cgpa: 9
};
for (let key in student) {
    console.log(key, "=", student[key]);
}


// ---------- Part 5: Mixed Practice ----------

// Q27: two numbers from user
let n1 = Number(prompt("Enter first number:"));
let n2 = Number(prompt("Enter second number:"));
console.log("Sum:", n1 + n2);
console.log("Difference:", n1 - n2);
console.log("Product:", n1 * n2);
console.log("Remainder:", n1 % n2);

// Q28: numbers greater than 10
let numbers = [3, 14, 9, 21, 10];
for (let n of numbers) {
    if (n > 10) {
        console.log(n);
    }
}

// Q29: eligibility with alert
let checkAge = Number(prompt("Enter your age to check eligibility:"));
if (checkAge >= 18) {
    alert("You are eligible");
} else {
    alert("You are not eligible");
}

// Q30: calculator menu
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let choice = prompt("Choose: add, subtract, multiply, divide");

switch (choice) {
    case "add":
        console.log("Result:", num1 + num2);
        break;
    case "subtract":
        console.log("Result:", num1 - num2);
        break;
    case "multiply":
        console.log("Result:", num1 * num2);
        break;
    case "divide":
        if (num2 === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log("Result:", num1 / num2);
        }
        break;
    default:
        console.log("Invalid choice");
}