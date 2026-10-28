// PART 1: ARRAY HIGHER-ORDER METHODS

// 1. forEach()
let numbers1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
numbers1.forEach(function (num) {
    console.log(num);
});

// 2. map()
let numbers2 = [1, 2, 3, 4, 5];
let multipliedNumbers = numbers2.map(function (num) {
    return num * 5;
});
console.log(multipliedNumbers);

// 3. filter()
let numbers3 = [10, 25, 15, 30, 45, 5];
let greaterThan20 = numbers3.filter(function (num) {
    return num > 20;
});
console.log(greaterThan20);

// 4. Employee filter()
let employees = [
    { name: "Arun", salary: 250000 },
    { name: "Kumar", salary: 350000 },
    { name: "Priya", salary: 280000 },
    { name: "Divya", salary: 450000 }
];
let lowSalaryEmployees = employees.filter(function (employee) {
    return employee.salary <= 300000;
});
console.log(lowSalaryEmployees);

// 5. find()
let firstEmployee = employees.find(function (employee) {
    return employee.salary > 200000;
});
console.log(firstEmployee);

// 6. reduce()
let numbers6 = [10, 20, 30, 40, 50];
let total = numbers6.reduce(function (sum, num) {
    return sum + num;
}, 0);
console.log(total);

// 7. some()
let numbers7 = [1, 3, 5, 8, 9];
let hasEvenNumber = numbers7.some(function (num) {
    return num % 2 === 0;
});
console.log(hasEvenNumber);

// 8. every()
let numbers8 = [10, 20, 30, 40, 50];
let allGreaterThanZero = numbers8.every(function (num) {
    return num > 0;
});
console.log(allGreaterThanZero);

// 9. sort() ascending
let numbers9 = [50, 10, 40, 20, 30];
numbers9.sort(function (a, b) {
    return a - b;
});
console.log(numbers9);

// 10. sort() descending
let numbers10 = [50, 10, 40, 20, 30];
numbers10.sort((a, b) => b - a);
console.log(numbers10);


// PART 2: STRING METHODS

// 11. charAt()
let str11 = "javascript";
console.log(str11.charAt(4));

// 12. charCodeAt()
let str12 = "javascript";
console.log(str12.charCodeAt(2));

// 13. trim()
let str13 = "   JavaScript   ";
let trimmedString = str13.trim();
console.log(trimmedString);

// 14. toUpperCase() and toLowerCase()
let str14 = "JavaScript";
console.log(str14.toUpperCase());
console.log(str14.toLowerCase());

// 15. includes()  (lowercase "javascript" so the result is true)
let str15 = "I am learning javascript";
console.log(str15.includes("script"));

// 16. startsWith() and endsWith()
let str16 = "JavaScript";
console.log(str16.startsWith("Java"));
console.log(str16.endsWith("Script"));

// 17. replaceAll()
let str17 = "java is easy. java is powerful. java is popular.";
let replacedString = str17.replaceAll("java", "python");
console.log(replacedString);

// 18. split()
let str18 = "html-css-javascript-react";
let technologies = str18.split("-");
console.log(technologies);

// 19. join()
let names = ["Arun", "Kumar", "Priya", "Divya"];
let nameString = names.join(",");
console.log(nameString);

// 20. slice()
let str20 = "JavaScript Programming";
let extracted = str20.slice(0, 10);
console.log(extracted);


// PART 3: DATE METHODS

// 21. Current year, month, date and day
let today = new Date();
console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Date:", today.getDate());
console.log("Day:", today.getDay());

// 22. Current month name
let months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let currentDate = new Date();
console.log("Current Month:", months[currentDate.getMonth()]);

// 23. Current hours, minutes and seconds
let time = new Date();
console.log("Hours:", time.getHours());
console.log("Minutes:", time.getMinutes());
console.log("Seconds:", time.getSeconds());

// 24. Set year, month and date
let date24 = new Date();
date24.setFullYear(2003);
date24.setMonth(0);
date24.setDate(30);
console.log(date24);


// PART 4: ASYNCHRONOUS JAVASCRIPT

// 25. setTimeout()
setTimeout(function () {
    console.log("Welcome to JavaScript");
}, 3000);

// 26. setInterval()
let interval = setInterval(function () {
    console.log("Learning JavaScript");
}, 2000);

// 27. clearInterval()
setTimeout(function () {
    clearInterval(interval);
    console.log("Interval stopped");
}, 8000);

// 28. Execution order (prints One, Three, Two)
function one() {
    console.log("One");
}
function two() {
    console.log("Two");
}
function three() {
    console.log("Three");
}
one();
setTimeout(two, 0);
three();


// PART 5: PROMISES AND API FETCHING

// 29. Promise resolve
let loginPromise = new Promise(function (resolve, reject) {
    resolve("Login successful");
});
loginPromise.then(function (message) {
    console.log(message);
});

// 30. Promise reject
let passwordPromise = new Promise(function (resolve, reject) {
    reject("Invalid password");
});
passwordPromise.catch(function (error) {
    console.warn(error);
});

// 31. Promise finally()
let processPromise = new Promise(function (resolve, reject) {
    resolve("Process successful");
});
processPromise
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.warn(error);
    })
    .finally(function () {
        console.log("Process completed");
    });

// 32. Fetch product titles
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        products.forEach(function (product) {
            console.log(product.title);
        });
    });

// 33. Print title, price and category
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        products.forEach(function (product) {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
            console.log("--------------------");
        });
    });

// 34. API error handling
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        console.log(products);
    })
    .catch(function (error) {
        console.warn("Error:", error.message);
    });

// 35. API finally()
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        console.log(products);
    })
    .catch(function (error) {
        console.warn("Error:", error.message);
    })
    .finally(function () {
        console.log("API call completed");
    });


// PART 6: REAL-TIME MINI TASKS

// 36. Employee salary report
let employeeList = [
    { name: "Arun", salary: 250000 },
    { name: "Kumar", salary: 350000 },
    { name: "Priya", salary: 280000 },
    { name: "Divya", salary: 450000 },
    { name: "Ravi", salary: 200000 }
];
let selectedEmployees = employeeList.filter(function (employee) {
    return employee.salary < 300000;
});
selectedEmployees.forEach(function (employee) {
    console.log("Name:", employee.name);
    console.log("Salary:", employee.salary);
});

// 37. Product price calculator
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let productDetails = products.map(function (product) {
            return {
                title: product.title,
                price: product.price
            };
        });
        console.log(productDetails);
    })
    .catch(function (error) {
        console.warn("Error:", error.message);
    });

// 38. Product search
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let electronics = products.filter(function (product) {
            return product.category === "electronics";
        });
        console.log(electronics);
    })
    .catch(function (error) {
        console.warn("Error:", error.message);
    });

// 39. Number analysis
let numbers39 = [10, 15, 20, 25, 30, 35];

let doubledNumbers = numbers39.map(function (num) {
    return num * 2;
});
console.log("Doubled:", doubledNumbers);

let evenNumbers = numbers39.filter(function (num) {
    return num % 2 === 0;
});
console.log("Even Numbers:", evenNumbers);

let totalNumbers = numbers39.reduce(function (sum, num) {
    return sum + num;
}, 0);
console.log("Total:", totalNumbers);

let hasNumberGreaterThan30 = numbers39.some(function (num) {
    return num > 30;
});
console.log("Number greater than 30:", hasNumberGreaterThan30);

let allPositive = numbers39.every(function (num) {
    return num > 0;
});
console.log("All numbers positive:", allPositive);

// 40. Product listing
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        products.forEach(function (product) {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
            console.log("----------------------");
        });
    })
    .catch(function (error) {
        console.warn("Error:", error.message);
    })
    .finally(function () {
        console.log("API call completed");
    });