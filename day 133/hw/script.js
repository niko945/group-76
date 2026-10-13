// 1)კომპიუტერმა უნდა აირჩიოს შემთხვევითი რიცხვი 1-დან 10-მდე.
// მოთამაშემ prompt()-ით შეიყვანოს თავისი რიცხვი.
// თუ გამოიცნო:
// 🎉 გამოიცანი!
// თუ ვერ გამოიცნო:
// ❌ ვერ გამოიცანი!

let num = Math.floor(Math.random() * 10) + 1

let guess = Number(prompt("please enter num 1 to 10: "))

if (guess === num) {
    console.log("🎉 გამოიცანი!") 
}else{
    console.log("❌ ვერ გამოიცანი!") 
}

// 2)კომპიუტერმა უნდა გააგოროს კამათელი.
// შემთხვევითი რიცხვი უნდა იყოს 1-დან 6-მდე.
// დაბეჭდე:
// You rolled: 5
// შემდეგ:
// თუ გამოვიდა 6 → 🎉 You got the highest number!
// თუ გამოვიდა 1 → 😢 You got the lowest number!
// სხვა შემთხვევაში → ჩვეულებრივი შედეგი.

let dice = Math.floor(Math.random() * 6) + 1

console.log("You rolled: " + dice)

if (dice === 6) {
    console.log("🎉 You got the highest number!")
} else if (dice === 1) {
    console.log("😢 You got the lowest number!")
} else {
    console.log("Normal result!")
}

// 3)შექმენი:
// let player1 = ...
// let player2 = ...
// ორივე მოთამაშეს შემთხვევით მიეცეს 1-დან 6-მდე რიცხვი.
// შემდეგ:
// დაბეჭდე ორივეს შედეგი
// შეადარე
// ვისაც მეტი აქვს, ის იგებს
// თუ ორივეს ერთნაირი აქვს → ფრეა!
// მაგალითად:
// Player 1: 4
// Player 2: 6
// Player 2 wins!


let player1 = Math.floor(Math.random() * 6) + 1
let player2 = Math.floor(Math.random() * 6) + 1

console.log("Player 1: " + player1)
console.log("Player 2: " + player2)

if (player1 > player2) {
    console.log("Player 1 wins!")
} else if (player2 > player1) {
    console.log("Player 2 wins!")
} else {
    console.log("ფრეა!")
}

// 4)ორივე მოთამაშის ძალა შემთხვევით უნდა შეიქმნას 10-დან 30-მდე.
// მაგრამ დაამატე ერთი წესი:
// თუ რომელიმე მოთამაშეს ზუსტად 20 შეხვდა, მას დაემატოს 5 ძალა.
// მაგალითად:
// Player 1: 20 → 25
// Player 2: 17
// Player 1 wins!
// თუ საბოლოოდ ორივეს ერთნაირი ძალა აქვს:
// ფრეა!


let playerr1 = Math.floor(Math.random() * 21) + 10
let playerr2 = Math.floor(Math.random() * 21) + 10

if (playerr1 === 20) {
    playerr1 += 5
}

if (playerr2 === 20) {
    playerr2 += 5
}

console.log("Player 1: " + playerr1)
console.log("Player 2: " + playerr2)

if (playerr1 > playerr2) {
    console.log("Player 1 wins!")
} else if (playerr2 > playerr1) {
    console.log("Player 2 wins!")
} else {
    console.log("ფრეა!")
}

// 5)გყავს ორი მანქანა:
// Car 1
// Car 2
// თითოეულს შემთხვევით მიეცი სიჩქარე 50-დან 100-მდე.
// შემდეგ:
// დაბეჭდე ორივე სიჩქარე
// მაღალი სიჩქარის მქონე იგებს
// თუ თანაბარია → ფრე
// მაგრამ დაამატე პირობა:
// თუ მანქანის სიჩქარე 90-ზე მეტია, დაწერე:
// 🔥 Super fast!


let car1 = Math.floor(Math.random() * 51) + 50
let car2 = Math.floor(Math.random() * 51) + 50

console.log("Car 1: " + car1)

if (car1 > 90) {
    console.log("🔥 Super fast!")
}

console.log("Car 2: " + car2)

if (car2 > 90) {
    console.log("🔥 Super fast!")
}

if (car1 > car2) {
    console.log("Car 1 wins!")
} else if (car2 > car1) {
    console.log("Car 2 wins!")
} else {
    console.log("ფრე!")
}

// 6)კომპიუტერმა შემთხვევით უნდა აირჩიოს რიცხვი 1-დან 4-მდე.
// თითოეულ რიცხვს განსხვავებული ჯილდო აქვს:
// 1 → 100 coins
// 2 → 50 coins
// 3 → 200 coins
// 4 → 10 coins
// მოთამაშემ გახსნას ყუთი და პროგრამამ უთხრას, რა მოიგო.
// მაგრამ დაამატე:
// თუ 200 coins მოიგო:
// 🎉 JACKPOT!


let box = Math.floor(Math.random() * 4) + 1

if (box === 1) {
    console.log("You won 100 coins!")
} else if (box === 2) {
    console.log("You won 50 coins!")
} else if (box === 3) {
    console.log("You won 200 coins!")
    console.log("🎉 JACKPOT!")
} else {
    console.log("You won 10 coins!")
}

// 7)მოთამაშეს და მონსტრს აქვთ შემთხვევითი ძალა:
// Player: 10–30
// Monster: 10–30
// მაგრამ:
// თუ მოთამაშის ძალა მეტია → მოთამაშე იგებს
// თუ მონსტრის ძალა მეტია → მონსტრი იგებს
// თუ თანაბარია → ფრე
// შემდეგ დაამატე სპეციალური წესი:
// თუ მოთამაშის ძალა ზუსტად 25-ია, მას ემატება +10 ბონუსი.

let playe = Math.floor(Math.random() * 10) + 21
let Monster = Math.floor(Math.random() * 10) + 21

if(playe === 25) {
    playe += 10
}

if(playe > Monster) {
    console.log("მოთამაშე იგებს")
}else if(playe < Monster) {
    console.log("მონსტრი იგებს")
}else{
    console.log("ფრე")
}

// 8)კომპიუტერმა შემთხვევით შექმნას 3 რიცხვი, თითოეული 1-დან 9-მდე.
// მაგალითად:
// 2 7 4
// მოთამაშემაც შეიყვანოს 3 რიცხვი.
// შემდეგ შეამოწმე:
// თუ სამივე დაემთხვა → JACKPOT!
// თუ ორი დაემთხვა → დიდი მოგება!
// თუ ერთი დაემთხვა → პატარა მოგება!
// თუ არცერთი → წააგე!


// 9)შექმენი თამაში, სადაც:
// let playerPower = ...
// let monsterPower = ...
// ორივე ძალა შემთხვევით შეიქმნას 10-დან 30-მდე.
// წესები:
// დაბეჭდე ორივე ძალა.
// თუ მოთამაშის ძალა მეტია → მოთამაშე იგებს.
// თუ მონსტრის ძალა მეტია → მონსტრი იგებს.
// თუ თანაბარია → ფრეა!
// თუ მოთამაშის ძალა ზუსტად 20-ია, მას დაემატოს +5.
// თუ მონსტრის ძალა ზუსტად 15-ია, მას დაემატოს +10.



// 10)ორ ჯადოქარს აქვს:
// Wizard 1
// Wizard 2
// თითოეულს შემთხვევით მიეცეს:
// Attack: 10–30
// შემდეგ კიდევ ერთი შემთხვევითი რიცხვი:
// Defense: 5–20
// მაგალითად:
// Wizard 1
// Attack: 25
// Defense: 10
// Wizard 2
// Attack: 18
// Defense: 15
// საბოლოო ძალა გამოითვალოს:
// Attack + Defense
// მაგრამ დამატებითი წესები:
// თუ Attack არის 25 ან მეტი → +5
// თუ Defense არის 20 → +10
// შემდეგ შეადარე საბოლოო ძალები.