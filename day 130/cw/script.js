// 1)შექმენით ფუნქცია სახელად displayCar რომელსაც გადაეცემა სამი პარამეტრი --> brand , year , color
// ფუნქციამ უნდა დააბრუნოს ინფორმაცია ავტომობილის შესახებ სადაც გამოიყენებ სამივე პარამეტრს
// პარამეტრებს მიანიჭეთ default მნიშვნელობები 
// ბოლოს გამოიძახეთ ფუნქცია ოთხჯერ რომ ნახოთ შედეგი -->
// 1)მხოლოდ ერთი არგუმენტით
// 2)მხოლოდ პირველი და მეორე არგუმენტით
// 3)სამივე არგუმენტით
// 4)0 არგუმენტით
// 2)შექმენით ფუნქცია რომელსაც გადაეცემა რაიმე ორი პარამეტრი სადაცც შეინახავ რაიმე რიცხვებს
// შემდეგ შეამოწმე ფუნქციაში --> თუ პირველი რიცხვი მეტია მეორეზე დააბრუნე first is bigger////// თუ 
// მეორე რიცხვი მეტია პირველ რიცხვზე დააბრუნე --> second is bigger სხვა შემთხვევაში დააბრუნე equal 
// გამოიყენე ternary
//  გამოიძახე ფუნქცია სხვადასხვა არგუმენტებით
function displayCar(brand = "BMW", year = 2023, color = "Black") {
    return `Brand: ${brand}, Year: ${year}, Color: ${color}`
}

console.log(displayCar("Buggati"))
console.log(displayCar("Mercedes", 2022))
console.log(displayCar("konesagg", 2024, "Red"))
console.log(displayCar())




function goodo(oir, seit) {
    return oir > seit ? "first is bigger" : oir < seit ? "second is bigger" : "equal"
}

console.log(goodo(10, 5))
console.log(goodo(3, 8))
console.log(goodo(7, 7))
console.log(goodo(20, 15))


// 3)შექმენი function expression, სახელად calculatePrice.
// ფუნქციამ მიიღოს 3 პარამეტრი:
// product
// price
// quantity = 1
// ფუნქციის პირობები:
// თუ price არის 0 ან უარყოფითი, გამოიტანე:
// Invalid price
// თუ quantity არის 0 ან უარყოფითი, გამოიტანე:
// Invalid quantity
// სხვა შემთხვევაში გამოთვალე პროდუქტის სრული ფასი:
// price * quantity
// თუ სრული ფასი არის 100-ზე მეტი ან ტოლი, მომხმარებელს მიეცეს 10% ფასდაკლება.

const calculatePrice = function (product, price, quantity = 1) {
    if (price <= 0) {
        return "Invalid price"
    }else if (quantity <= 0) {
        return "Invalid quantity"
    }
    
    let total = price * quantity
    if (total >= 100) {
        total -= 10
    }
    console.log("Product:", product)
    console.log("Total:", total)
}
calculatePrice()
