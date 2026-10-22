// JavaScript Arrays, Spread/Rest, Destructuring - 4


// ---------- Part 1: Array Manipulation Methods ----------

// Q1: push() three fruits
{
    const fruitList = ["Apple", "Mango", "Banana", "Orange", "Grapes"];
    fruitList.push("Guava", "Papaya", "Jackfruit");
    console.log("Q1:", fruitList);
}

// Q2: pop() removes the last element
{
    const nums = [11, 22, 33, 44, 55, 66];
    const removed = nums.pop();
    console.log("Q2:", nums, "| removed:", removed);
}

// Q3: shift() removes the first element
{
    const people = ["Vimal", "Anitha", "Karthik", "Meena", "Suresh"];
    people.shift();
    console.log("Q3:", people);
}

// Q4: unshift() adds to the beginning
{
    const nums = [3, 4, 5, 6];
    nums.unshift(1, 2);
    console.log("Q4:", nums);
}

// Q5: splice() removes 2 elements starting at index 1
{
    let arr = [10, 20, 30, 40, 50];
    arr.splice(1, 2);
    console.log("Q5:", arr); // [10, 40, 50]
}

// Q6: splice() replaces 3 with 100
{
    let arr = [1, 2, 3, 4, 5];
    const pos = arr.indexOf(3);
    arr.splice(pos, 1, 100);
    console.log("Q6:", arr); // [1, 2, 100, 4, 5]
}

// Q7: fill() from index 2 up to the end (index 4)
{
    const nums = [5, 15, 25, 35, 45];
    nums.fill("hello", 2, 5);
    console.log("Q7:", nums); // [5, 15, "hello", "hello", "hello"]
}


// ---------- Part 2: Array Merge and Search Methods ----------

// Q8: concat()
{
    const first = [1, 2, 3];
    const second = [4, 5, 6];
    console.log("Q8:", first.concat(second));
}

// Q9: slice(1, 5) gives index 1 to index 4
{
    let arr = [10, 20, 30, 40, 50, 60];
    console.log("Q9:", arr.slice(1, 5)); // [20, 30, 40, 50]
}

// Q10: flat(Infinity)
{
    const nested = [1, [2, 3], [4, [5, [6]]], 7];
    console.log("Q10:", nested.flat(Infinity));
}

// Q11: includes()
{
    let arr = [10, 20, 30, 40, 50];
    console.log("Q11: has 30?", arr.includes(30)); // true
}

// Q12: indexOf()
{
    let arr = [5, 10, 15, 20, 25];
    console.log("Q12: index of 20 =", arr.indexOf(20)); // 3
}

// Q13: lastIndexOf()
{
    let arr = [1, 2, 3, 2, 1, 2];
    console.log("Q13: last index of 2 =", arr.lastIndexOf(2)); // 5
}

// Q14: sort() - numbers need a compare function
{
    const nums = [45, 7, 100, 23, 9];
    console.log("Q14 default sort:", [...nums].sort());              // [100, 23, 45, 7, 9] (sorted as text)
    console.log("Q14 numeric sort:", [...nums].sort((a, b) => a - b)); // [7, 9, 23, 45, 100]
}

// Q15: reverse()
{
    const nums = [1, 2, 3, 4, 5, 6, 7];
    nums.reverse();
    console.log("Q15:", nums);
}


// ---------- Part 3: Spread and Rest Operators ----------

// Q16: merge arrays with spread
{
    const a = [1, 2, 3, 4];
    const b = [5, 6, 7, 8];
    console.log("Q16:", [...a, ...b]);
}

// Q17: merge objects with spread
{
    const studentInfo = { name: "Vimal", age: 24 };
    const jobInfo = { role: "Web Developer", company: "Training Institute" };
    console.log("Q17:", { ...studentInfo, ...jobInfo });
}

// Q18: rest parameter collects the remaining arguments
{
    function showArgs(first, second, ...others) {
        console.log("Q18:", first, second, others);
    }
    showArgs(1, 2, 3, 4, 5); // others = [3, 4, 5]
}

// Q19: one(a, b, ...c)
{
    function one(a, b, ...c) {
        console.log("Q19 sum:", a + b + c[0] + c[1]);
    }
    one(1, 2, 3, 4); // 10
}

// Q20: copy an array with spread (the copy is independent)
{
    const original = [10, 20, 30];
    const clone = [...original];
    clone.push(40);
    console.log("Q20 original:", original); // [10, 20, 30]
    console.log("Q20 copy:", clone);         // [10, 20, 30, 40]
}


// ---------- Part 4: Array Destructuring ----------

// Q21
{
    const arr = [10, 20, 30, 40];
    const [w, x, y, z] = arr;
    console.log("Q21:", w, x, y, z);
}

// Q22: nested array destructuring
{
    const nested = [1, 2, [3, 4, [5, 6]]];
    const [n1, n2, [n3, n4, [n5, n6]]] = nested;
    console.log("Q22:", n1, n2, n3, n4, n5, n6);
}

// Q23
{
    const studentArr = ["Vimal", 24, 8.2];
    const [studentName, studentAge, studentCgpa] = studentArr;
    console.log("Q23:", studentName, studentAge, studentCgpa);
}


// ---------- Part 5: Object Destructuring ----------

// Q24
{
    const employee = { name: "Vimal", role: "Developer", location: "Chennai" };
    const { name, role, location } = employee;
    console.log("Q24:", name, role, location);
}

// Q25: nested object destructuring
{
    const student = {
        name: "Vimal",
        address: { city: "Chennai", state: "Tamil Nadu" }
    };
    const { address: { city, state } } = student;
    console.log("Q25:", city, state);
}

// Q26: name, role, and location { mainLocation, currentLocation }
{
    const employee = {
        name: "Vimal",
        role: "Developer",
        location: { mainLocation: "Chennai", currentLocation: "Hyderabad" }
    };
    const {
        name,
        role,
        location: { mainLocation, currentLocation }
    } = employee;
    console.log("Q26:", name, role, mainLocation, currentLocation);
}


// ---------- Part 6: Mixed Practical Challenges ----------

// Q27
{
    const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    nums.shift();         // remove first
    nums.pop();           // remove last
    nums.unshift(1, 2);   // add two at the start
    console.log("Q27:", nums);
}

// Q28
{
    const nums = [7, 14, 7, 21, 28, 7];
    const target = 7;
    console.log("Q28 includes:", nums.includes(target));          // true
    console.log("Q28 first index:", nums.indexOf(target));        // 0
    console.log("Q28 last index:", nums.lastIndexOf(target));     // 5
}

// Q29
{
    const basicInfo = { name: "Vimal", age: 24 };
    const workInfo = { role: "Developer", salary: 35000 };
    const employee = { ...basicInfo, ...workInfo };
    const { name, role } = employee;
    console.log("Q29:", name, role);
}

// Q30
{
    const nested = [1, [2, 3], [4, [5, 6]], 7];
    const flatReversed = nested.flat(Infinity).reverse();
    console.log("Q30:", flatReversed); // [7, 6, 5, 4, 3, 2, 1]
}