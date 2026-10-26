let fruits = "apple,banana,orange,kiwi"

let newfruit = fruits.split(",")
newfruit = fruits.indexOf("banana")
newfruit = fruits.indexOf("kiwi")
newfruit[1] = "mango"
let final = newfruit.join("$")
console.log(final) 
