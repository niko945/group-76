// 1)შექმენი ცვლადი secretNumber, რომელსაც მიანიჭებ მნიშვნელობას 7.
// მომხმარებელს prompt()-ის საშუალებით სთხოვე რიცხვის შეყვანა.
// გამოიყენე do...while ციკლი, რათა მომხმარებელს რამდენჯერმე შეეძლოს გამოცნობა.
// თუ მომხმარებლის შეყვანილი რიცხვი არ ემთხვევა ჩაფიქრებულ რიცხვს, გამოიტანე "Try again!".
// თუ მომხმარებელი სწორ რიცხვს გამოიცნობს, გამოიტანე "Correct! You guessed it!".
// დაითვალე, რამდენი ცდა დასჭირდა მომხმარებელს სწორი პასუხის მისაღებად.
// საბოლოოდ გამოიტანე ცდების რაოდენობა.

let secretNumber = 7
let sli = 0
let num
do{
    num = Number(prompt("please enter num: "))
    sli++

    if(num !== secretNumber){
        console.log("Try again!")
    }else{
        console.log("Correct! You guessed it!")
    }
}while(num !== secretNumber)
console.log(sli)