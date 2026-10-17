// 1)შექმენი სია fruits, რომელშიც იქნება 5 ხილი.
// მოთხოვნები:
// 1. გამოიტანე პირველი ხილი.
// 2. გამოიტანე მესამე ხილი.
// 3. გამოიტანე ბოლო ხილი.
// 4. გამოიტანე მთლიანი სია.

let fruits = ["banana", "apple", "grape", "pear", "watermelon"]

console.log(fruits[0])
console.log(fruits[2])
console.log(fruits[4])
console.log(fruits)

// 2)შექმენი სია colors შემდეგი ელემენტებით:
// "Red", "Blue", "Green", "Yellow"
// მოთხოვნები:
// 1. შეცვალე "Blue" — "Black"-ით.
// 2. შეცვალე "Yellow" — "White"-ით.
// 3. გამოიტანე განახლებული სია.
// 4. გამოიტანე პირველი და ბოლო ელემენტები.

let colors = ["Red", "Blue", "Green", "Yellow"]

colors[1] = "Black"
colors[3] = "white"
console.log(colors)
console.log(colors[0])
console.log(colors[3])


// 3)შექმენი სია animals, რომელშიც იქნება 6 ცხოველი.
// მოთხოვნები:
// 1. გამოიტანე სიის სიგრძე.
// 2. შეცვალე მეორე ელემენტი სხვა ცხოველით.
// 3. გამოიტანე სიის სიგრძე ხელახლა.
// 4. შეამოწმე, შეიცვალა თუ არა სიის სიგრძე.

let animals = ["chicken", "cow", "pig", "leopard", "elephant"]

console.log(animals.length)
animals[1] = "zebra"
console.log(animals.length)

// 4)შექმენი ცვლადი let-ით:
// let numbers = [10, 20, 30, 40, 50];
// მოთხოვნები:
// 1. გამოიტანე მეორე და მეოთხე ელემენტები.
// 2. მესამე ელემენტი შეცვალე 100-ით.
// 3. პირველი ელემენტი შეცვალე 5-ით.
// 4. გამოიტანე განახლებული სია.
// 5. გამოიტანე სიის სიგრძე.
let numbers = [10, 20, 30, 40, 50];
console.log(numbers[1])
console.log(numbers[3])
numbers[0] = 5
console.log(numbers)
console.log(numbers.length)


// 5)შექმენი შემდეგი სია:
// const students = ["Nika", "Goga", "Ana", "Luka"];
// მოთხოვნები:
// 1. გამოიტანე პირველი სტუდენტი.
// 2. შეცვალე "Goga" — "Mariam"-ით.
// 3. შეცვალე ბოლო ელემენტი — "Gio"-თი.
// 4. გამოიტანე განახლებული სია.
// 5. გამოიტანე სიის სიგრძე.
const students = ["Nika", "Goga", "Ana", "Luka"];
console.log(students[0])
students[1] = "Mariam"
students[3] = "Gio"
console.log(students)
console.log(students.length)
// დამატებითი კითხვა: რატომ შეგვიძლია const-ით შექმნილი მასივის ელემენტების შეცვლა?

//რადგან ის კრძალავს ცვლადის ახალი მნიშვნელობის მინიწებას და არა მასივის შიგთავსის შცვლას


// 6)შექმენი სია scores:
// [85, 90, 75, 100, 60, 95]
// მოთხოვნები:
// 1. გამოიტანე პირველი ელემენტი.
// 2. გამოიტანე ბოლო ელემენტი
// 3. შეცვალე მეორე ელემენტი 99-ით.
// 4. შეცვალე ბოლოსწინა ელემენტი 70-ით.
// 5. გამოიტანე განახლებული სია და მისი სიგრძე.

let scores = [85, 90, 75, 100, 60, 95]
console.log(scores[0])
console.log(scores[5])
scores[1] = 99
scores[4] = 70
console.log(scores)
console.log(scores.length)


// 7)შექმენი სია games:
// ["Minecraft", "GTA", "FIFA", "Fortnite", "Roblox"]
// მოთხოვნები:
// 1. გამოიტანე პირველი და ბოლო თამაში.
// 2. შეცვალე მეორე და მეოთხე ელემენტები სხვა თამაშებით.
// 3. გამოიტანე მესამე ელემენტი.
// 4. გამოიტანე განახლებული სია.
// 5. გამოიტანე სიის სიგრძე.
// 6. შეცვალე პირველი ელემენტიც და საბოლოოდ გამოიტანე სია.

let games = ["Minecraft", "GTA", "FIFA", "Fortnite", "Roblox"]
console.log(games[0])
console.log(games[4])
games[1] = "rust"
games[3] = "raft"
console.log(games[2])
console.log(games)
console.log(games.length)
games[0] = "cs2"
console.log(games)


// 8)შექმენი const ცვლადი cities შემდეგი მნიშვნელობით:
// ["Tbilisi", "Batumi", "Kutaisi", "Rustavi"]
// მოთხოვნები:
// 1. შეცვალე "Batumi" — "Telavi"-ით.
// 2. შეცვალე "Rustavi" — "Gori"-ით.
// 3. გამოიტანე პირველი და ბოლო ქალაქი.
// 4. გამოიტანე სიის სიგრძე.
// 5. სცადე cities-სთვის ახალი მასივის მინიჭება და დააკვირდი, რა მოხდება.

const cities =["Tbilisi", "Batumi", "Kutaisi", "Rustavi"]
cities[1] = "telavi"
cities[3] = "gori"
console.log(cities[0])
console.log(cities[3])
console.log(cities.length)


// 9)შექმენი const ცვლადი products და შეინახე მასში 5 პროდუქტი.
// მოთხოვნები:
// 1. გამოიტანე პირველი, მესამე და ბოლო პროდუქტი.
// 2. შეცვალე მეორე პროდუქტი.
// 3. შეცვალე ბოლო პროდუქტი.
// 4. გამოიტანე განახლებული სია.
// 5. გამოიტანე სიის სიგრძე.
// 6. ახსენი, რატომ შეიძლება const მასივის ელემენტების შეცვლა, მაგრამ თავად ცვლადისთვის ახალი მასივის მინიჭება — არა.

const products = ["coke" , "bread" , "butter" , "ham" , "chips"]
console.log(products[0])
console.log(products[2])
console.log(products[4])
products[1] = tomato
products[4] = candy
console.log(products)
console.log(products.length)