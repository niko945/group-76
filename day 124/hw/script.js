// let = მნიშვნელობის შეცვლა შეგვიძლია
// const = მნიშვნელობის შეცვლა არ შეგვიძლია
// var = პირველად ამას იყენებდნენ და მნიშვნელობების შეცვლა შეგვიძლია

//=====================


let num = 16
let num1 = 2

console.log(num + num1)
console.log(num - num1)
console.log(num * num1)
console.log(num / num1)
console.log(num % num1)
console.log(num ** num1)


//=====================


const name = "Nika"
const surname = "Mdivani"
const address = "Tbilisi"
const country = "Georgia"

console.log("My name is " + name + ", my surname is " + surname + " and I live in " + address + ", " + country)


//=====================

let namq = "   Nika   ";

console.log(namq.trim().toUpperCase())


//=====================


let nama = "   NIKA   "

console.log(nama.trim().toLowerCase())


//=====================


let text = "   Hello,   my name is Nika.   ";

text = text.trim();
text = text.replace("Hello", "Hi");

console.log(text);


//=====================


let message = "JavaScript is hard. JavaScript is interesting. I love JavaScript.";

let newMessage = message.replaceAll("JavaScript", "JS");

console.log(newMessage);


//=====================


let password = "Goga12345"

let result = password.slice(0, 2) + "*".repeat(password.length - 2)

console.log(result)


//=====================


let username = "   GogaChalauri   "

username = username.trim()

console.log(username.slice(0, 5))


//=====================


let texts = "I like cats. Cats are cute. My cat is sleeping."

texts = texts.replaceAll("cats", "dogs")
texts = texts.replaceAll("cat", "dog")

console.log(texts);


//=====================


let sentence = "JavaScript is one of the most popular programming languages"

console.log(sentence.slice(0, 25) + "...")


//=====================


let code = "AB-12-CD-43"

code = code.replaceAll("-", "*")
code = code.slice(0, -2) + "##"

console.log(code)


//=====================


let email = "   goga.chalauri@gmail.com   ";

email = email.trim();

let usernames = email.slice(0, email.indexOf("@"));
usernames = usernames.replaceAll(".", "_");

console.log(usernames);


//=====================


let input = "   Hello!!! My name is Goga!!! I love JS!!!   "

input = input.trim();
input = input.replaceAll("!!!", "!")
input = input.slice(0, 20) + "..."

console.log(input)


//=====================


let phone = " +995-599-12-34-56 "

phone = phone.trim()
phone = phone.replaceAll("-", "")

console.log(phone.slice(-9))


//=====================


let sentencee = "Hello my name is Goga";

console.log(sentencee.length);


//=====================


let textt = "   JavaScript is GREAT!!! JavaScript is POWERFUL!!!   ";

textt = textt.trim();
textt = textt.replaceAll("JavaScript", "JS");
textt = textt.replaceAll("!!!", "!");
textt = textt.slice(0, 30) + "...";

console.log(textt);
