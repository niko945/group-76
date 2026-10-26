let numbers = [10, 20, 30, 40, 50]

let removed = numbers.pop()

console.log(removed)
console.log(numbers)

//=======================================

let colors = ["Red", "Green", "Blue", "Black"]

let removedd = colors.shift()

console.log(removedd)
console.log(colors)

//=======================================

let animals = ["Dog", "Cat"]

animals.unshift("Lion")
animals.unshift("Tiger", "Bear")

console.log(animals)

//=======================================

let numberr = [5, 10, 15, 20, 25, 30, 35]

let part1 = numberr.slice(1, 4)
let part2 = numberr.slice(-3)
let part3 = numberr.slice(2)

console.log(part1)
console.log(part2)
console.log(part3)

console.log(numberr)

//=======================================

let games = ["Minecraft", "GTA", "FIFA", "Roblox", "Fortnite"]

games.splice(1, 1)
console.log(games)

games.splice(1, 1, "eFootball")
console.log(games)

games.splice(1, 0, "Terraria")
console.log(games)

//=======================================

let cities = ["Tbilisi", "Batumi", "Kutaisi", "Rustavi"]

let withoutBatumi = cities.toSpliced(1, 1)
let withGori = cities.toSpliced(2, 1, "Gori")
let withZugdidi = cities.toSpliced(2, 0, "Zugdidi")

console.log(withoutBatumi)
console.log(withGori)
console.log(withZugdidi)
console.log(cities)

//=======================================

let first = [1, 2, 3]
let second = "JavaScript"
let third = { name: "Goga" }
let fourth = 25
let fifth = ["HTML", "CSS"]

console.log(Array.isArray(first))
console.log(Array.isArray(second))
console.log(Array.isArray(third))
console.log(Array.isArray(fourth))
console.log(Array.isArray(fifth))

//=======================================

let numberss = [1, 2, [3, 4], [5, 6]]

let newNumbers = numberss.flat()

console.log(newNumbers)
console.log(numberss)

//=======================================

let firstt = ["HTML", "CSS"]
let secondd = ["JavaScript", "React"]

let result = firstt.concat(secondd)

console.log(result)

//=======================================

let fruits = ["Apple", "Banana", "Orange", "Kiwi"]

fruits.push("Mango")
fruits.unshift("Strawberry")
fruits.pop()
fruits.shift()

let newFruits = fruits.slice(0, 2)

console.log(fruits)
console.log(newFruits)

//=======================================

let toys = ["Car", "Doll", "Ball", "Robot", "Puzzle"]

toys.splice(1, 1, "Teddy Bear")
toys.push("Lego")

let newToys = toys.slice(0, 3)

console.log(toys)
console.log(newToys)

//=======================================

let number = [10, 20, 30, 40, 50]

number.splice(2, 1)
console.log(number)

let original = [10, 20, 30, 40, 50]

let newNumber = original.toSpliced(2, 1)

console.log(newNumber)
console.log(original)

//=======================================

let teamA = ["Nika", "Ana", "Gio"]
let teamB = ["Mariam", "Luka", "Saba"]

let team = teamA.concat(teamB)

team.unshift("Goga")
team.push("Data")
team.pop()

let newTeam = team.slice(0, 4)

console.log(team)
console.log(newTeam)

//=======================================

let students = ["Nika", "Ana", "Gio", "Mariam", "Luka"]
let newStudents = ["Saba", "Data"]

let allStudents = students.concat(newStudents)

allStudents.unshift("Goga")
allStudents.splice(2, 1, "Elene")

let lastThree = allStudents.slice(-3)

allStudents.pop()

console.log(allStudents)
console.log(lastThree)

//=======================================

let groupA = ["Nika", "Ana", "Gio"]
let groupB = ["Mariam", "Luka", "Saba"]
let groupC = [["Data", "Elene"], ["Sandro", "Nino"]]

console.log(Array.isArray(groupA))
console.log(Array.isArray(groupB))
console.log(Array.isArray(groupC))

let firstGroup = groupA.concat(groupB)
let secondGroup = groupC.flat()

let allStudent = firstGroup.concat(secondGroup)

allStudent.unshift("Goga")
allStudent.push("Tornike")

allStudent.splice(1, 2)

let changedStudents = allStudent.toSpliced(2, 1, "Mariam K.")

let middle = allStudent.slice(2, 7)

allStudent.pop()
allStudent.shift()

console.log(firstGroup)
console.log(secondGroup)
console.log(allStudent)
console.log(changedStudents)
console.log(middle)