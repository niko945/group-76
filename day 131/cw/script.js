// 1)შექმენით arrow ფუნქცია რომელსაც პარამეტრი არ გადაეცემა და უბრალოდ 
// ბრუნებს მისასალმებელ ტექსტს, გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი კონსოლში

const greet = () => {
    return "hello nika"
}
console.log(greet)


// 2)შექმენი arrow ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი name , 
// შენი დავალებაა რომ დააბრუნო რაიმე ტექსტი რომელშიც ამ პარამეტრს გამოიყენებ, 
// გამოიძახე ფუნქცია სამჯერ სხვადასხვა არგუმენტებით

const name = name => {
    return "hello" + name
}

name(mola)
name(mo1la)
name(mo2la)
// 3)შექმენი  arrow  ფუნქცია ორი პარამეტრით password , email
// ტერნარით შეამოწმე --> თუ password არის 123 და email არის gegimagaria@gmail.com მაშინ 
// გამოიტანე login success სხვა შემთხვევაში გამოიტანეთ error გამოიძახე ფუქნცია სხვადასხვა არგუმენტებით 

const user = (password , email) => {
    if(password == 123 && email == "gegimagaria@gmail.com") {
        return "login success"
    }else {
        return "Error"
    }
}

// 4) შექმენით single line arrow funqcion რომელსაც გადასცემთ ორ პარამეტრს , თქვენი 
// დავალებაა გაიგოთ ამ ორი რიცხვის ნამრავლი , გამოიძახეთ ფუნქცია სხვადასხვა არგუმენტებით , 
// ასევე single line ის შემდეგ ძველი გზაც გამოიყენეთ ამ დავალების შესასრულებლად

const nice = (c , v) => c * v

console.log(nice(6 , 7))

function nice1(a , b) {
    return a * b
}

console.log(nice1(6 , 7))