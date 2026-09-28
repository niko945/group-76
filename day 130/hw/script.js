const greet = function(name) {
    return `Hello, ${name}!`
}

console.log(greet("Giorgi"))

//================= 

const sum = function(num1, num2) {
    return num1 + num2
}

console.log(sum(5, 26))
console.log(sum(20, 3))
console.log(sum(7, 39))

//================= 

const welcome = function(name = "Guest") {
    return `Welcome, ${name}!`
}

console.log(welcome("Goga"))
console.log(welcome())

//================= 

const checkAge = function(age) {
    if (age >= 18) {
        return "You are an adult"
    } else {
        return "You are underage"
    }
}

console.log(checkAge(20))
console.log(checkAge(15))

//================= 

const checkPrice = function(price) {
    if (price > 100) {
        return "Expensive"
    } else {
        return "Affordable"
    }
}

console.log(checkPrice(150))
console.log(checkPrice(80))

//================= 

const calculate = function(num1, num2, operation) {
    if (operation === "+") {
        return num1 + num2
    } else if (operation === "-") {
        return num1 - num2
    } else if (operation === "*") {
        return num1 * num2
    } else {
        return "Invalid operation"
    }
}

console.log(calculate(10, 5, "+"))
console.log(calculate(10, 5, "-"))
console.log(calculate(10, 5, "*"))

//================= 

const getGrade = function(score) {
    if (score >= 90) {
        return "A"
    } else if (score >= 80) {
        return "B"
    } else if (score >= 70) {
        return "C"
    } else if (score >= 60) {
        return "D"
    } else {
        return "F"
    }
}

console.log(getGrade(85))
console.log(getGrade(95))
console.log(getGrade(72))

//================= 

const getFinalPrice = function(price, discount) {
    return price - (price * discount / 100)
}

console.log(getFinalPrice(100, 20))
console.log(getFinalPrice(200, 10))

//================= 

const login = function(username, password) {
    if (username === "admin" && password === "1234") {
        return "Login successful"
    } else {
        return "Invalid username or password"
    }
}

console.log(login("admin", "1234"))

//================= 

//10?

//================= 

const getResult = function(name, score, bonus = 0) {
    const finalScore = score + bonus

    if (finalScore >= 90) {
        return `${name} - Excellent`
    } else if (finalScore >= 70) {
        return `${name} - Good`
    } else if (finalScore >= 50) {
        return `${name} - Passed`
    } else {
        return `${name} - Failed`
    }
}

console.log(getResult("Nikeqs", 85))
console.log(getResult("dadu", 65, 10))

//================= 

//12?

//================= 

//13?

//================= 

const withdraw = function(balance, amount, fee = 2) {
    if (amount <= 0) {
        return "Invalid amount"
    }

    if (amount + fee > balance) {
        return "Not enough money"
    }

    const remaining = balance - amount - fee

    if (remaining > 1000) {
        return `Withdrawal successful. High balance: ${remaining}`
    } else if (remaining >= 100) {
        return `Withdrawal successful. Balance: ${remaining}`
    } else {
        return `Warning! Low balance: ${remaining}`
    }
}

console.log(withdraw(2000, 500))
console.log(withdraw(500, 200))
console.log(withdraw(100, 50))
console.log(withdraw(100, 0))