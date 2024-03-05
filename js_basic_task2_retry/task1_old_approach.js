let income = 353674

if (income < 10000) {
    console.log(`The base income is $${income}. Tax will be $${(income * 0.05)} while the income with counted tax percent (5%) is $${income - income * 0.05}`)
}

if (income >= 10000 && income <= 50000) {
    console.log(`The base income is $${income}. Tax will be $${income * 0.1} while the income with counted tax percent (10%) is $${income - income * 0.1}`)
}

 if (income >= 50001 && income <= 100000) {
    console.log(`The base income is $${income}. Tax will be $${income * 0.15} while the income with counted tax percent (15%) is $${income - income * 0.15}`)
}

 if (income >= 100001 && income <= 200000) {
    console.log(`The base income is $${income}. Tax will be $${income * 0.20} while the income with counted tax percent (20%) is $${income - income * 0.20}`) 
}

 if (income > 200000) {
    console.log(`The base income is $${income}. Tax will be $${income * 0.25} while the income with counted tax percent (25%) is $${income - income * 0.25}`)
}