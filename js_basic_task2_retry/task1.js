let income = 225000
let income_tax = income/100

if (income < 10000) {
    console.log(`The base income is $${income}. Tax will be $${(income_tax * 5)} while the cost with counted tax percent (5%) is $${income - income_tax * 5}`)
}

if (income >= 10000 && income <= 50000) {
    console.log(`The base income is $${income}. Tax will be $${income_tax * 10} while the cost with counted tax percent (10%) is $${income - income_tax * 10}`)
}

 if (income >= 50001 && income <= 100000) {
    console.log(`The base income is $${income}. Tax will be $${income_tax * 15} while the cost with counted tax percent (15%) is $${income - income_tax * 15}`)
}

 if (income >= 100001 && income <= 200000) {
    console.log(`The base income is $${income}. Tax will be $${income_tax * 20} while the cost with counted tax percent (20%) is $${income - income_tax * 20}`) 
}

 if (income > 200000) {
    console.log(`The base income is $${income}. Tax will be $${income_tax * 25} while the cost with counted tax percent (25%) is $${income - income_tax * 25}`)
}