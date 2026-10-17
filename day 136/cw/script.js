// 1)შექმენით სია სადაც იქნება 5 ელემენტი
// შენი დავალებაა სიიდან ამოშალო ბოლო ელემენტი და მის მაგივრად სიის ბოლოში დაამატო "programing"
// 2)შექმენით სია რამდენიმე ელემენტით , შენი დავალებაა სიის 
// თავიდან ამოშალო ელემენტი და მის მაგივრად თავში დაამატო "IT"
// 3)შექმენი სია რამდენიმე ელემენტით, ჯერ ამოშალე პირველი და ბოლო 
// ელემენტები და შემდეგ მათ მაგივრად დაამატე თქვენთვის სასურველი ელემენტები


let box = ["nika" , "creating" , "version" , "goa" , "join"]

box.pop()
box.push("programing")

let boxs = ["nika" , "creating" , "version" , "goa" , "join"]

boxs.shift()
boxs.unshift("IT")

let boxss = ["nika" , "creating" , "version" , "goa" , "join"]

boxss.shift()
boxss.pop()

boxss.push("better")
boxss.unshift("nice")


// თქვენი დავალებაა სიიდან ამოშალთ პირველი და ბოლო ელემენტები 

// შემდეგ შექმენით ცვლადის ადაც შეინახავთ ზემოთ მოცემული სიიდან ყველა ელემენტს მოთავსებული ერთ სიაში .flat()

// შემდეგ ამ ახალ სიაში დაამატე თავშიდა ბოლოში ელემენტები

// ბოლოს შეამოწმე არის თუ არა მიღებული შედეგი სია

let list = [ [1, 2] , ["goga" , "nika"] , [true , false] , ["gio" , 10] , [true, 10.5] ]
list.pop()
list.shift()
let final = list.flat()
console.log(final)
final.push("Nika")
final.unshift("gamer")


// )შექმენით ორი სია და გააერთიანეთ ისინი ერთმანეთში
let boxses = ["nika" , "creating" , "version" , "goa" , "join"]
let namr = ["mine" , "work" , "random"]
let both = boxses.concat(namr)


// 6)let names = ["goga" , "lasha" , "irakli" , "irma" , "ia" , "ana" , "lulu"]
// თქვენი დავალებაა ამოიღოთ ამ სიიდან LASHA IRAKLI IRMA IA და ამ ელემენტებისაგან 
// შექმნათ ახალი სია , გამოიტანეთ კონსოლში ახალი სია
let names = ["goga" , "lasha" , "irakli" , "irma" , "ia" , "ana" , "lulu"]
let second = names.slice(1 , 5)
console.log(second)




// 7)let names = ["goga" , "lasha" , 10 , false , "irakli" , "irma" , true ,  "ia" , "ana" , "lulu"]
// თქვენი დავალებაა ამ სიიდან ამოშალოთ 10 ,false , irakli , true და ამ ელემენტების 
// მაგივრად ჩაამატოთ "Tbilisi"  , "gori"
// ეს ყვლეაფერი მოხდეს ორიგინალ სიაში
let namess = ["goga" , "lasha" , 10 , false , "irakli" , "irma" , true ,  "ia" , "ana" , "lulu"]
namess.splice(2 , 6 , "Tbilisi"  , "gori") 
console.log(namess)


// 8)let names = ["goga" , "lasha" , 10 , false , "irakli" , "irma" , true ,  "ia" , "ana" , "lulu"]
// ამ სიიდან ამოშალეთ irma true ia ana და გამოიტანეთ ახალი სია სადაც ეს ელემენტები 
// იქნება წაშლილი

let namesd = ["goga" , "lasha" , 10 , false , "irakli" , "irma" , true ,  "ia" , "ana" , "lulu"]
let fuf = namesd.toSpliced(5 , 4)
console.log(fuf)