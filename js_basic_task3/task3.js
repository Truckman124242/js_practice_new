let num1 = 81; 
let num2 = 97;

let minimum = Math.min(num1, num2);
let maximum = Math.max(num1, num2);

console.log(`Even numbers between ${minimum} and ${maximum}:`)

for (let i = minimum; i <= maximum; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

