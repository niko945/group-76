let productPrice = 120
let quantity = 3
let delivery = 15
const shopName = "Tech Store"

productPrice *= quantity
productPrice += delivery

let orderQuantity = quantity
orderQuantity++

let orderText = `${shopName} order: ${productPrice} GEL`

console.log(orderText)
console.log(typeof orderQuantity)


//========================================================


let score = 72
const studentName = "Goga"

score += 8
score *= 2
score -= 10
score /= 2

console.log(`${studentName}'s final score is: ${score}`)
console.log(typeof studentName)
console.log(typeof score)


//========================================================


let health = 100
let level = 1
let coins = 50
const player = "Warrior"

health -= 25
coins += 40
level++
coins *= 2
health /= 5

console.log(`${player} | Level: ${level} | Health: ${health} | Coins: ${coins}`)


//========================================================


let price = 80
let quantityy = 4
let discount = 20
const currency = "GEL"

price *= quantityy
price -= discount

console.log("Total: " + price + " " + currency)
console.log(`Total: ${price} ${currency}`)

console.log(typeof price)
console.log(typeof quantityy)
console.log(typeof discount)
console.log(typeof currency)


//========================================================


let counter = 10

counter++
console.log(counter)

counter++
console.log(counter)

counter += 5
console.log(counter)

counter--
console.log(counter)

counter *= 2
console.log(counter)

counter /= 4
console.log(counter)


//========================================================


const firstName = "Nika"
const lastName = "Beridze"
let age = 17
let city = "Tbilisi"

console.log(`My name is ${firstName} ${lastName}. I am ${age} years old and I live in ${city}.`)

age++
city = "Batumi"

console.log(`My name is ${firstName} ${lastName}. I am ${age} years old and I live in ${city}.`)


//========================================================


const accountOwner = "Ana"
let balance = 1000

balance += 500
balance -= 250
balance *= 2
balance -= 100
balance /= 2

console.log(`${accountOwner}'s current balance: ${balance} GEL`)

console.log(`Owner type: ${typeof accountOwner}`)
console.log(`Balance type: ${typeof balance}`)


//========================================================


const movie = "Avatar"
let ticketPrice = 25
let tickets = 4
let snacks = 30

ticketPrice *= tickets
ticketPrice += snacks
ticketPrice -= 10

tickets++

console.log(`Movie: ${movie} | Tickets: ${tickets} | Total: ${ticketPrice} GEL`)


//========================================================


let username = "Goga"
let ages = 20
const isStudent = true
let salary = 1500

console.log(`Username: ${username}`)
console.log(`Age: ${ages}`)
console.log(`Student: ${isStudent}`)
console.log(`Salary: ${salary}`)

ages++
salary += 300
salary -= 100
salary *= 2

console.log(typeof username)
console.log(typeof ages)
console.log(typeof isStudent)
console.log(typeof salary)


//========================================================


const name = "Luka"
let agee = 18
let money = 500
let items = 3
const shop = "Game Store"

money -= 150
money -= 70
money += 200

agee++

money -= 30

console.log(`${name} | Age: ${agee} | Shop: ${shop} | Items: ${items} | Money: ${money} GEL`)

console.log(`name: ${typeof name}`)
console.log(`age: ${typeof agee}`)
console.log(`money: ${typeof money}`)
console.log(`items: ${typeof items}`)
console.log(`shop: ${typeof shop}`)


//========================================================


const usernamee = "Saba"
let aged = 16
let balancee = 250
let purchases = 2
const currencyy = "GEL"
const shopNamee = "Digital Shop"

purchases += 3
balancee -= 120
balancee += 150
balancee -= 25
aged++
balancee *= 2

console.log(`User: ${usernamee}`)
console.log(`Age: ${aged}`)
console.log(`Purchases: ${purchases}`)
console.log(`Balance: ${balancee} ${currencyy}`)
console.log(`Shop: ${shopNamee}`)

console.log(typeof usernamee)
console.log(typeof aged)
console.log(typeof balancee)
console.log(typeof purchases)
console.log(typeof currencyy)
console.log(typeof shopNamee)