const evenOrOdd = function (num) {
    if (typeof(num) !== "number") {
        const numberFrom_num = parseInt(num)
        if (typeof(numberFrom_num) !== "number") {
        return "Виникла помилка - не вдалось перетворити строку на число";
        } else if (typeof(numberFrom_num) === "number" && !isNaN(numberFrom_num)) {
            return numberFrom_num % 2 === 0 ? `${numberFrom_num} є парним числом` : `${numberFrom_num} не є парним числом`
    } }
    if (num === 0) {
        return "0 є парним числом"
    } else if (num % 2 === 0) {
        return `${num} є парним числом`
    } else {
        return `${num} є непарним числом`
    }  

};

console.log(evenOrOdd()) // => “Виникла помилка - num має бути числом”
console.log(evenOrOdd(null)) // => “Виникла помилка - num має бути числом”
console.log(evenOrOdd(0)) // => “0 є парним числом”
console.log(evenOrOdd(1)) // => “1 є непарним числом”
console.log(evenOrOdd(77)) // => “77 є непарним числом”
console.log(evenOrOdd(88)) // => “88 є парним числом”
// 👇 Ось це нове 👇
console.log(evenOrOdd("11")) // => “11 є непарним числом”
console.log(evenOrOdd("A99")) // => “Виникла помилка - не вдалось перетворити строку "A99" на число” 
console.log(evenOrOdd("$99.99")) // => “Виникла помилка - не вдалось перетворити строку "$99.99" на число” 
