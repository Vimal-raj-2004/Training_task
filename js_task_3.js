
// JavaScript Functions Practice - 3


// ---------- Part 1: Functions and Parameters ----------

// Q1
function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();

// Q2
function showStudentDetails(name, age, cgpa) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("CGPA:", cgpa);
}
showStudentDetails("Vimal", 24, 8.2);
showStudentDetails("Anitha", 22, 9.1);

// Q3
function calculateFee(fee) {
    return fee;
}
let courseFee = calculateFee(45000);
console.log("Student fee:", courseFee);

// Q4
function applyDiscount(percent) {
    const totalFee = 200000;
    const reduction = (totalFee * percent) / 100;
    const payable = totalFee - reduction;
    console.log("Fee: " + totalFee + ", Discount: " + percent + "%, Final fee: " + payable);
}
applyDiscount(15);

// Q5
function studentForm(name, age, disability = "no") {
    console.log(name + " | " + age + " | disability: " + disability);
}
studentForm("Vimal", 24, "no");
studentForm("Karthik", 23, "yes");
studentForm("Meena", 21);          // disability falls back to "no"


// ---------- Part 2: Function Types and Scope ----------

// Q6: named function
function printMessage(message) {
    console.log(message);
}
printMessage("Learning functions today");

// Q7: anonymous function stored in a variable
const showName = function (name) {
    console.log("Name:", name);
};
showName("Vimal");

// Q8: arrow function
const showNumber = (num) => {
    console.log("Number:", num);
};
showNumber(42);

// Q9: var, let, const inside a block
function checkBlockScope() {
    if (true) {
        var varValue = 1;
        let letValue = 2;
        const constValue = 3;
        console.log("Inside block:", varValue, letValue, constValue);
    }

    console.log("Outside, var:", varValue);   // works: var is function scoped

    try {
        console.log(letValue);                // let is block scoped
    } catch (err) {
        console.log("Outside, let: not accessible (" + err.name + ")");
    }

    try {
        console.log(constValue);              // const is block scoped
    } catch (err) {
        console.log("Outside, const: not accessible (" + err.name + ")");
    }
}
checkBlockScope();

// Q10: prints undefined, because var is hoisted but its value is not
console.log(hoistedValue);
var hoistedValue = 10;


// ---------- Part 3: Callbacks and Higher-Order Functions ----------

// Q11
function first(callback) {
    console.log("Inside first()");
    callback();
}
function second() {
    console.log("Inside second() - called as a callback");
}
first(second);

// Q12
function addWithCallback(callback, a, b) {
    console.log("Sum:", a + b);
    callback(a, b);
}
function showInputs(x, y) {
    console.log("Callback got:", x, "and", y);
}
addWithCallback(showInputs, 8, 12);

// Q13
const sub = (num1, num2) => {
    console.log("Difference:", num1 - num2);
};
addWithCallback(sub, 30, 10);

// Q14
function multiplyWithCallback(callback, a, b) {
    console.log("Product:", a * b);
    callback();
}
function done() {
    console.log("Multiplication finished");
}
multiplyWithCallback(done, 6, 7);

// Q15
function divide(num1, num2) {
    if (num2 === 0) {
        console.log("Cannot divide by zero");
    } else {
        console.log("Quotient:", num1 / num2);
    }
}
function runOperation(callback, a, b) {
    console.log("Running operation...");
    callback(a, b);
}
runOperation(divide, 50, 5);
runOperation(divide, 50, 0);

// Q16: higher-order function that calls the callback with a name
function greetStudent(callback) {
    callback("Vimal");
}
greetStudent((studentName) => console.log("Hello,", studentName));


// ---------- Part 4: Generator Functions ----------

// Q17
function* cashbackOffers() {
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

// Q18: .next() three times returns { value, done } objects
const offerGen = cashbackOffers();
console.log(offerGen.next());
console.log(offerGen.next());
console.log(offerGen.next());

// Q19
function* discountMessages() {
    yield "5% off on your first order";
    yield "10% off on orders above 1000";
    yield "15% off for students";
    yield "20% off on festival days";
    yield "25% off for members";
}
for (const msg of discountMessages()) {
    console.log(msg);
}

// Q20
function* studentNames() {
    yield "Vimal";
    yield "Anitha";
    yield "Karthik";
}
for (const studentName of studentNames()) {
    console.log(studentName);
}

// Q21: check the done property
function* fourValues() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
const fourGen = fourValues();
console.log(fourGen.next().done); // false
console.log(fourGen.next().done); // false
console.log(fourGen.next().done); // false
console.log(fourGen.next().done); // false
console.log(fourGen.next());      // { value: undefined, done: true }


// ---------- Part 5: Currying and Uncurrying ----------

// Q22: normal function
function addThree(a, b, c) {
    console.log("Sum:", a + b + c);
}
addThree(1, 2, 3);

// Q23: curried version
function addThreeCurried(a) {
    return function (b) {
        return function (c) {
            console.log("Sum:", a + b + c);
        };
    };
}

// Q24
addThreeCurried(5)(10)(15);

// Q25
function totalPrice(price) {
    return function (discountPercent) {
        return function (quantity) {
            const unitPrice = price - (price * discountPercent) / 100;
            return unitPrice * quantity;
        };
    };
}
console.log("Total after discount:", totalPrice(2000)(10)(3));

// Q26
function multiplyThree(a, b, c) {
    return a * b * c;
}
const multiplyThreeCurried = (a) => (b) => (c) => a * b * c;

const normalOutput = multiplyThree(2, 3, 4);
const curriedOutput = multiplyThreeCurried(2)(3)(4);
console.log("Normal:", normalOutput, "| Curried:", curriedOutput);
console.log("Same result?", normalOutput === curriedOutput);


// ---------- Part 6: IIFE, Return, Mixed Practice ----------

// Q27
(function (productName, discount) {
    console.log(`Sale! Get ${productName} at ${discount}% off today.`);
})("Headphones", 25);

// Q28
function getNumber() {
    return 250;
}
const returnedNumber = getNumber();
console.log("Returned number:", returnedNumber);

// Q29
function getMarks(marks) {
    return marks;
}
const myMarks = getMarks(88);
const resultText = "I scored " + myMarks + " marks";
console.log(resultText);

// Q30: fee calculator with default parameter, callback and return value
function discountAmount(fee, percent) {
    return (fee * percent) / 100;
}
function calculateFinalFee(fee = 60000, percent = 10, callback) {
    const discount = callback(fee, percent);
    return fee - discount;
}
console.log("Final fee (custom values):", calculateFinalFee(80000, 20, discountAmount));
console.log("Final fee (defaults):", calculateFinalFee(undefined, undefined, discountAmount));