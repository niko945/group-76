const greet = name => `Hello, ${name}!`
console.log(greet("Nika"))


const calculatePrice = (price, quantity, discount) => price * quantity * (discount >= 20 ? 1 - discount / 100 : 1)
console.log(calculatePrice(100, 3, 20))


const calculateSalary = (salary, bonus) => bonus > 500 ? salary + salary * 0.1 : salary
console.log(calculateSalary(2000, 600))


const getAgeCategory = age => age <= 12 ? "Child" : age <= 17 ? "Teenager" : age <= 59 ? "Adult" : "Senior"
console.log(getAgeCategory(15))


const checkExam = (score, maxScore) => score / maxScore * 100 >= 90 ? "Excellent" : score / maxScore * 100 >= 75 ? "Very Good" : score / maxScore * 100 >= 60 ? "Passed" : "Failed"
console.log(checkExam(45, 50))
console.log(checkExam(32, 50))


const withdraw = (balance, amount) => amount <= 0 ? "Invalid amount" : amount > balance ? "Not enough money" : balance - amount
console.log(withdraw(1000, 300))


const checkPassword = password => password.length < 8 ? "Too short" : "Valid password"
console.log(checkPassword("hello"))


const getOrderPrice = (price, quantity, delivery) => price * quantity + (delivery === "standard" ? 5 : 15)
console.log(getOrderPrice(100, 3, "express"))


const calculateFinalPrice = (price, quantity, discount, isMember) => price * quantity * (discount > 0 ? 1 - discount / 100 : 1) * (isMember === true ? 0.9 : 1)
console.log(calculateFinalPrice(100, 3, 20, true))

const roundNumber = number => Math.round(number)
console.log(roundNumber(5.6))

const floorNumber = number => Math.floor(number)
console.log(floorNumber(5.9))

const ceilNumber = number => Math.ceil(number)
console.log(ceilNumber(5.1))