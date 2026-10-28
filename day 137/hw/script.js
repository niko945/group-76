let products = ["Laptop", "Phone", "Tablet", "Monitor", "Keyboard"]

products.unshift("Mouse")
products.push("Headphones", "Speaker")

let removedProduct = products.shift()
let monitorIndex = products.indexOf("Monitor")

let tabletIndex = products.indexOf("Tablet")
if (tabletIndex !== -1) {
    products.splice(tabletIndex, 1, "Smartwatch")
}
let slicedProducts = products.slice(2, 5)

let productsString = products.join(" | ")

console.log("საბოლოო მასივი:", products)
console.log("წაშლილი პროდუქტი:", removedProduct)
console.log("Monitor-ის ინდექსი:", monitorIndex)
console.log("მიღებული სტრიქონი:", productsString)



let text = "HTML,CSS,JavaScript,React,Node.js,Python"
let techArray = text.split(",")

techArray.unshift("Git")
techArray.push("TypeScript")

let reactIndex = techArray.indexOf("React")

let cssIndex = techArray.indexOf("CSS")
if (cssIndex !== -1) {
    techArray.splice(cssIndex, 2)
}

let firstFourTech = techArray.slice(0, 4)
let techString = firstFourTech.join(" - ")
let finalTechArray = techString.split(" - ")

console.log("ტექნოლოგიების საბოლოო მასივი:", techArray)
console.log("React-ის ინდექსი:", reactIndex)
console.log("პირველი ოთხი ტექნოლოგიის სტრიქონი:", techString)
console.log("სტრიქონიდან ხელახლა მიღებული მასივი:", finalTechArray)




let students = [
    "Nika",
    "Ana",
    "Gio",
    "Mariam",
    "Luka",
    "Saba",
    "Elene"
];

students.unshift("Data", "Tako");

students.pop();

let mariamIndex = students.indexOf("Mariam");

let gioIndex = students.indexOf("Gio")
if (gioIndex !== -1) {
    students.splice(gioIndex, 2)
}

let lukaIndex = students.indexOf("Luka")
if (lukaIndex !== -1) {
    students.splice(lukaIndex, 0, "Irakli")
}

let lastFourStudents = students.slice(-4)

let extendedStudents = lastFourStudents.concat(["Giorgi", "Salome"])

let studentsString = extendedStudents.join(", ")

let splitStudents = studentsString.split(", ")

let isStudentsArray = Array.isArray(splitStudents)

console.log("სტუდენტების საბოლოო მასივი:", students)
console.log("ბოლო 4 + კონკატენირებული მასივი:", extendedStudents)
console.log("სტრიქონი:", studentsString)
console.log("არის თუ არა შედეგი მასივი?", isStudentsArray)




let scores = [45, 78, 92, 34, 88, 67, 100, 56]

scores.unshift(50)

scores.push(73, 85)

let score92Index = scores.indexOf(92)

let index34 = scores.indexOf(34)
if (index34 !== -1) {
    scores.splice(index34, 1)
}
let index88 = scores.indexOf(88)
if (index88 !== -1) {
    scores.splice(index88, 1)
}

let index67 = scores.indexOf(67)
if (index67 !== -1) {
    scores.splice(index67, 1, 70)
}

let middleIndex = Math.floor(scores.length / 2)
let secondHalf = scores.slice(middleIndex)

let updatedSecondHalf = secondHalf.concat([95, 81, 60])

updatedSecondHalf.pop()
updatedSecondHalf.unshift(99)

let scoresString = updatedSecondHalf.join(" / ")

let finalScoresArray = scoresString.split(" / ")

console.log("საბოლოო ქულების მასივი:", finalScoresArray)
console.log("არის თუ არა მასივი?", Array.isArray(finalScoresArray))


let groups = [
    ["Nika", "Ana", "Gio"],
    ["Mariam", "Luka"],
    ["Saba", "Elene", "Data"]
];

let flatGroup = groups.flat()

flatGroup.unshift("Tako")

flatGroup.push("Irakli", "Salome")

let lukaGroupIndex = flatGroup.indexOf("Luka")
let gioGroupIndex = flatGroup.indexOf("Gio")
if (gioGroupIndex !== -1) {
    flatGroup.splice(gioGroupIndex, 1)
}
let mariamGroupIndex = flatGroup.indexOf("Mariam")
if (mariamGroupIndex !== -1) {
    flatGroup.splice(mariamGroupIndex, 1)
}

let firstFiveNames = flatGroup.slice(0, 5)

let finalGroupsConcat = firstFiveNames.concat(["Giorgi", "Sandro"])

let groupsString = finalGroupsConcat.join(" * ")

let finalGroupsArray = groupsString.split(" * ")

console.log("თავდაპირველი groups მასივი (არ შეცვლილა, რადგან flat()-მა ახალი მასივი დააბრუნა):", groups)
console.log("საბოლოო დამუშავებული მასივი:", finalGroupsArray)