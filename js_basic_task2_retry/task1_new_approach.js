let income = 353.35
let tax = 0

if (income < 10000) {
    tax = 0.05
}

if (income >= 10000 && income <= 50000) {
    tax = 0.1
}

 if (income >= 50001 && income <= 100000) {
    tax = 0.15
}

 if (income >= 100001 && income <= 200000) {
    tax =  0.20
}

 if (income > 200000) {
    tax =  0.25
}

let tax_part = income * tax
let taxed_income = income - tax_part
let percent = tax * 100

console.log(`The base income is $${income.toFixed(2)}. Tax will be $${tax_part.toFixed(2)} while the income with counted tax percent (${percent}%) is $${taxed_income.toFixed(2)}`)