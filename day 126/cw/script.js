let name = prompt("enter name: ")
console.log(name)
let surname = prompt("enter surname: ")
console.log(surname)
let age = prompt("enter age: ")
console.log(age)
let address = prompt("enter adress: ")
console.log(address)

let santance = `მე მქვია ${name} ${surname} და ვარ ${age} ვცხოვრობ ${address}`
console.log(santance)


// 2)შექმენი ცვლადი სადაც შეინახავ რაიმე რიცხვს

// შენი დავალებაა შეამოწმო თუ ეს რიცხვია რის დადებითი დაბეჭდე positive

// თუ ეს რიცხვი არის უარყოფით დაბეჭდე negative

// სხვა შემთხვევაში დაბეჭდე zero


let num = 10

if(num > 0){
    console.log("positive")
}else if (num < 0){
    console.log("negative")
}else {
    console.log("zero")
}