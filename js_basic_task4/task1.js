const numbers = [5, -1, 0, 6, 7, 0, -0.01, 3, 46, 0.01, -34]
let Positive = 0
let Negative = 0
let Zero = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        Positive++
    }
    else if (numbers[i] < 0) {
        Negative++
    } 
    else {
        Zero++
    }
}

console.log("Positive numbers:", Positive)
console.log("Negative numbers:", Negative)
console.log("Zeros:", Zero)