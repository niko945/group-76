function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Goga");
greet("Nika");
greet("Giorgi");

//============================

function sum(a, b) {
    console.log(a + b);
}

sum(5, 10);
sum(20, 30);
sum(7, 3);

//============================

function showInfo(name, age, city) {
    console.log(`My name is ${name}, I am ${age} years old and I live in ${city}.`);
}

showInfo("Goga", 20, "Tbilisi");
showInfo("Nika", 16, "Batumi");

//============================

function square(number) {
    console.log(number * number);
}

square(5);
square(10);
square(7);

//============================

function showProduct(name, price, category) {
    console.log(`Product: ${name}`);
    console.log(`Price: ${price}`);
    console.log(`Category: ${category}`);
}

showProduct("Laptop", 1500, "Electronics");
showProduct("Phone", 800, "Technology");

//============================

function checkAge(age) {
    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }
}

checkAge(20);
checkAge(15);
checkAge(18);

//============================

function checkNumber(number) {
    if (number > 0) {
        console.log("Positive");
    } else if (number < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

checkNumber(10);
checkNumber(-5);
checkNumber(0);

//============================

function calculate(a, b, operator) {
    if (operator === "+") {
        console.log(a + b);
    } else if (operator === "-") {
        console.log(a - b);
    } else if (operator === "*") {
        console.log(a * b);
    } else if (operator === "/") {
        console.log(a / b);
    }
}


calculate(10, 5, "+");
calculate(10, 5, "-");
calculate(10, 5, "*");
calculate(10, 5, "/");

//============================

function checkProduct(name, price, budget) {
    if (budget >= price) {
        console.log(`You can buy ${name}.`);
    } else {
        console.log(`You cannot buy ${name}.`);
    }
}

checkProduct("Phone", 800, 1000);
checkProduct("Laptop", 2000, 1000);

//============================

function getGrade(name, score) {
    if (score >= 90) {
        console.log(`${name} got grade A.`);
    } else if (score >= 80) {
        console.log(`${name} got grade B.`);
    } else if (score >= 70) {
        console.log(`${name} got grade C.`);
    } else if (score >= 60) {
        console.log(`${name} got grade D.`);
    } else {
        console.log(`${name} got grade F.`);
    }
}

getGrade("Nika", 87);
getGrade("Goga", 95);
getGrade("Giorgi", 72);
