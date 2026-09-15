// 1)მომხმარებელს შემოაყვანინე რაიმე რიცხვი,შემდეგ შეამოწმე
//  თ ეს რიცხვი არის 10 ზე მეტი და ლუწი დააკონსოლლოგე "good number" სხვა შემთხვევაში "bad time"

// 2)მომხმარებელს შემოაყვანინე სახელი ,შეამოწმე თუ ეს სახელის 
// სიგრძე მეტია 5 ზე ან იწყება ასო g ზე გამოიტანე "good name" სხვა შემთხვევაში "bad name"

let num = prompt("please enter num: ")

if(num > 10 && num  % 2 == 0) {
    console.log("good number")
}else {
    console.log("bad time")
}



let name = prompt("plase enter name: ")

if (name.length > 5 || name[0].toLowerCase() === "g") {
    console.log("good name")
} else {
    console.log("bad name")
}
