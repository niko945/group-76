// const names = ["giorgi", "Ana", "Guga", "Nino", "Nika"]

// names.forEach((name, index) => {
//     if (name.startsWith("g")) {
//         console.log(name, index)
//     }
// })

// const numb = [12, 7, 4, 19, 0, 29, 6, 5]

// numb.forEach((num) => {
//     if (num % 2 === 0) {
//         console.log(num)
//     }
// })


// const mij = ["hello", 42, true, "JavaScript", "world", 57]

// mij.forEach((item) => {
//     if (typeof item === "string") {
//         console.log(item)
//     }
// })

const names = ["giorgi", "Ana", "Guga", "Nino", "Nika"]

const res = names.map((name) => {
    if (name.length > 5) {
        return name + "გრძელი სახელი"
    } else {
        return name + "მოკლე სახელი"
    }
})

console.log(res)


const numbers = [2, 33, 4, 5, 16, 7]

const trtr = numbers.map((num) => {
    if (num % 2 === 0) {
        return num * 100
    } else {
        return num * 200
    }
})

console.log(trtr)