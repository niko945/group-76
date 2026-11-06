// მოთხოვნები:
// 1. for ციკლის გამოყენებით დაბეჭდე ყველა ელემენტი.
// 2. დაბეჭდე მხოლოდ ლუწი რიცხვები.
// 3. დაბეჭდე მხოლოდ კენტი რიცხვები.
// 4. დაბეჭდე ყველა ელემენტი გამრავლებული 2-ზე.

let numbers = [12, 25, 8, 40, 17, 30]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])

    if (numbers[i] % 2 === 0) {
        console.log("Even:", numbers[i])
    } else if (numbers[i] % 2 !== 0) {
        console.log("Odd:", numbers[i])
    }
    console.log(numbers[i] * 2)
}
// 2)let names = ["Nika", "Ana", "Giorgi", "Mariam", "Luka"];


// მოთხოვნები:
// 1. დაბეჭდე ყველა სახელი.
// 2. დაბეჭდე მხოლოდ ის სახელები, რომელთა სიგრძეც 4-ზე მეტია.
// 3. დაბეჭდე მხოლოდ ის სახელები, რომლებიც იწყება ასო A-ზე.
// 4. თითოეულ სახელს ბოლოში დაუმატე "!" და დაბეჭდე.

let names = ["Nika", "Ana", "Giorgi", "Mariam", "Luka"]

for (let i = 0; i < names.length; i++) {
    console.log(names[i])

    if (names[i].length > 4) {
        console.log(names[i])
    } else if (names[i][0] === "A") {
        console.log(names[i])
    }
    console.log(names[i] + "!")
}


// 3)let ages = [12, 17, 20, 15, 25, 16];


// მოთხოვნები:
// 1. for ციკლით ყველა ასაკს დაუმატე 1.
// 2. თუ ასაკი 18-ზე ნაკლებია, შეცვალე 18-ით.
// 3. დაბეჭდე განახლებული მასივი.

let ages = [12, 17, 20, 15, 25, 16];

for (let i = 0; i < ages.length; i++) {
    ages[i]++

    if (ages[i] < 18) {
        ages[i] = 18
    }
}

console.log(ages)


// 4)let prices = [100, 250, 80, 400, 150, 50];


// მოთხოვნები:
// 1. დაბეჭდე მხოლოდ 100-ზე მეტი ფასები.
// 2. ყველა ფასს დაუმატე 20.
// 3. თუ ფასი 200-ზე მეტია, გამოაკელი 50.
// 4. დაითვალე რამდენი პროდუქტია 100-ზე იაფი.

let prices = [100, 250, 80, 400, 150, 50]

let count = 0

for (let i = 0; i < prices.length; i++) {

    if (prices[i] > 100) {
        console.log(prices[i])
    } else if (prices[i] > 200) {
        prices[i] -= 50
    } else if (prices[i] < 100) {
        count++
    }

    prices[i] += 20
}


// 5)let scores = [45, 90, 67, 32, 100, 75, 50];


// მოთხოვნები:
// 1. დაბეჭდე ყველა ქულა.
// 2. დაბეჭდე მხოლოდ 60-ზე მაღალი ქულები.
// 3. 50-ზე დაბალი ქულები შეცვალე 50-ით.
// 4. დაითვალე რამდენმა მოსწავლემ მიიღო 70 ან მეტი ქულა.
// 5. იპოვე ყველაზე მაღალი ქულა.

let scores = [45, 90, 67, 32, 100, 75, 50]

let counts = 0
let max = scores[0]

for (let i = 0; i < scores.length; i++) {

    console.log(scores[i])

    if (scores[i] > 60) {
        console.log("High score:", scores[i])
    } else if (scores[i] < 50) {
        scores[i] = 50
    } else if (scores[i] >= 70) {
        count++
    } else if (scores[i] > max) {
        max = scores[i]
    }
}

console.log(scores)
console.log(count)
console.log(max)


// 6)let numbers = [5, 12, 8, 21, 30, 7, 16];
// let newNumbers = [];


// მოთხოვნები:
// 1. for ციკლის გამოყენებით newNumbers მასივში დაამატე მხოლოდ ლუწი რიცხვები.
// 2. მიღებული რიცხვები გაამრავლე 3-ზე.
// 3. დაბეჭდე ახალი მასივი.


let number = [5, 12, 8, 21, 30, 7, 16]
let newNumbers = []

for (let i = 0; i < number.length; i++) {

    if (number[i] % 2 === 0) {
        newNumbers.push(number[i])
    }
}

for (let i = 0; i < newNumbers.length; i++) {
    newNumbers[i] *= 3
}

console.log(newNumbers)

// 7)let numbers = [12, -5, 8, -20, 0, 15, -3, 7];


// მოთხოვნები:
// 1. დაითვალე დადებითი რიცხვების რაოდენობა.
// 2. დაითვალე უარყოფითი რიცხვების რაოდენობა.
// 3. იპოვე ყველა რიცხვის ჯამი.
// 4. შექმენი ახალი მასივი, სადაც მხოლოდ დადებითი რიცხვები იქნება.
// 5. ყველა უარყოფითი რიცხვი შეცვალე 0-ით თავდაპირველ მასივში.



let num = [12, -5, 8, -20, 0, 15, -3, 7]

let positiveCount = 0
let negativeCount = 0
let sum = 0
let positiveNumbers = []

for (let i = 0; i < num.length; i++) {

    sum += num[i]

    if (num[i] > 0) {
        positiveCount++
        positiveNumbers.push(num[i])
    } else if (num[i] < 0) {
        negativeCount++
        num[i] = 0
    }
}


// 8)let students = ["Nika", "Ana", "Giorgi", "Luka", "Mariam", "Dato"];
// let selectedStudents = [];


// მოთხოვნები:
// 1. ახალ მასივში დაამატე მხოლოდ ის სტუდენტები, რომელთა სახელიც 4 სიმბოლოზე მეტია.
// 2. თუ სახელი იწყება "M" ასოზე, დაბეჭდე "Special student: სახელი".
// 3. დაითვალე რამდენი სტუდენტის სახელი შეიცავს 5 ან მეტ სიმბოლოს.

let students = ["Nika", "Ana", "Giorgi", "Luka", "Mariam", "Dato"]
let selectedStudents = []

let countt = 0

for (let i = 0; i < students.length; i++) {

    if (students[i].length > 4) {
        selectedStudents.push(students[i])
    } else if (students[i][0] === "M") {
        console.log("Special student: " + students[i])
    } else if (students[i].length >= 5) {
        countt++
    }
}

console.log(selectedStudents)
console.log(countt)

// 9)let points = [15, 40, 65, 20, 90, 35, 100];


// მოთხოვნები:
// 1. თუ ქულა 50-ზე ნაკლებია, დაუმატე 10.
// 2. თუ ქულა 50-დან 80-ის ჩათვლითაა, დაუმატე 5.
// 3. თუ ქულა 80-ზე მეტია, გამოაკელი 10.
// 4. დაბეჭდე განახლებული მასივი.
// 5. დაითვალე რამდენი ქულა აღმოჩნდა საბოლოოდ 50-ზე მეტი.


let points = [15, 40, 65, 20, 90, 35, 100];

let coun = 0;

for (let i = 0; i < points.length; i++) {

    if (points[i] < 50) {
        points[i] += 10
    } else if (points[i] >= 50 && points[i] <= 80) {
        points[i] += 5
    } else if (points[i] > 80) {
        points[i] -= 10
    } else if (points[i] > 50) {
        coun++
    }
}

console.log(points)
console.log(coun)

// 10)let numbers = [12, 5, 30, 18, 7, 42, 15, 60, 9];
// let evenNumbers = [];
// let oddNumbers = [];
// let modifiedNumbers = [];


// მოთხოვნები:
// 1. ერთი for ციკლის გამოყენებით გადაამოწმე ყველა რიცხვი.
// 2. ლუწი რიცხვები დაამატე evenNumbers მასივში.
// 3. კენტი რიცხვები დაამატე oddNumbers მასივში.
// 4. თუ რიცხვი 20-ზე მეტია, დაამატე modifiedNumbers მასივში მისი ნახევარი.
// 5. თუ რიცხვი 20-ზე ნაკლებია, დაამატე modifiedNumbers მასივში მისი გაორმაგებული მნიშვნელობა.
// 6. სამივე მასივი დაბეჭდე.

let numberss = [12, 5, 30, 18, 7, 42, 15, 60, 9]

let evenNumbers = []
let oddNumbers = []
let modifiedNumbers = []

for (let i = 0; i < numberss.length; i++) {

    if (numberss[i] % 2 === 0) {
        evenNumbers.push(numberss[i])
    } else {
        oddNumbers.push(numbers[i])
    }

    if (numberss[i] > 20) {
        modifiedNumbers.push(numberss[i] / 2)
    } else if (numberss[i] < 20) {
        modifiedNumbers.push(numberss[i] * 2)
    }
}

console.log(evenNumbers)
console.log(oddNumbers)
console.log(modifiedNumbers)