// 1)მომხმარებელს შემოატანინეთ რაიმე რიხცხვი
// შემდეგ switch ით შეამოწმე -->
// თუ ეს რიცხვი არის მეტი 0 ზე და არის ლუწი გამოიტანე --> positive even
// თუ ეს რიცხვი არის 0 ზე მეტი და არის კენტი--> positive odd
// თუ ეს რიცხვი არის 0 ზე ნაკლები და ლუწი --> negative even
// თუ ეს რიცხვი არის 0 ზე ნაკლები დაკენტი --> negative odd
// სხვა შემთხვევაში --> 0

// let num = prompt("please enter num: ")

// switch (true) {
//     case num > 0 && num % 2 == 0:
//         console.log("positive even")
//         break
//     case num > 0 && num % 2 == 1:
//         console.log("positive odd")
//         break
//     case num < 0 && num % 2 == 0:
//         console.log("negative even")
//         break
//     case num < 0 && num % 2 == 1:
//         console.log("negative odd")
//         break
//     default:
//         console.log("zero")
// }



// 2)შექმენით ფუნქცია სახელად sayMyInfo() თქვენი დავალებაა რომ ფუნქციამ კონსოლში 
// გამოიტანოს თქვენი სახელი გვარი ასაკი და მისამართ
// გამოიძახეთ ფუნქცია სამჯერ და ნახეთ შედეგი კონსოლში აუცილებლად 

// function sayMyInfo() {
//     console.log("Nika mdivani" + " " + "16 wlis" + " " + "tbilisis")
// }
// sayMyInfo()


// 3)შექმენი ფუქნცია გადაეცი სამი პარამეტრი name surname parchusPrice
// შენი დავალებაა ფუნქციამ დააკონსოლოს შემდეგი ტექსტი --> hello my name is  ... my surname is ... and 
// parchusPrice is ... ! წერტილების მაგივრად ჩასვით პარამეტრები
// გამოიძახეთ ფუნქცია სამჯერ სხვადასხვა არგუმენტებით

function info(name , surname , parchusPrice) {
    console.log(`hello my name is ${name} my surname is ${surname} and  parchusPrice is ${parchusPrice} !`)
}

info("nika" , "Mdivani" , "PC")