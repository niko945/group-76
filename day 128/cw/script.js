// if (favoritePhrase === 'Love That!') {
//     console.log('I love that!');
// } else {
//     console.log("I don't love that!");
// }

// console.log(favoritePhrase === 'Love That!' ? 'I love that!' : "I don't love that!")

// let num = 5
// console.log(num % 2 == 0 ? 'luwia' : 'kentia')


// 3)შექმენი ცვლადი სადაც შეინახავ რიცხვს ტერნარით შეამოწმე
// თუ ეს რიცხვი არის 50 და 100 შუაში გამოიტანე --> good
// თუ ეს რიცვი არის 50 ზე ნაკლები გამოიტანე --> "not bad"
// თუ ეს რიცხვი არის 100 ზემეტი და 200 ზე ნაკლები გამოიტანე --"bed"
// სხვა შემთვევაში გამოიტანე --> "very bad"

let num1 = 20

let res = num1 >= 50 && num1 <= 100
? "good" 
: num1 < 50
? "not bad"
: num1 > 100 && num1 < 200
? "bad"
: "very bad"

console.log(res)
