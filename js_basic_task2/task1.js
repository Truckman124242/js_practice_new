let str = 54000

if (str < 10000) {
    console.log(`The base income is ${str}$. Tax will be ${((str/100) * 5)}$ while the cost with counted tax percent (5%) is ${str + (str/100) * 5}$`)
}

else if (str >= 10000 && str <= 50000) {
    console.log(`The base income is ${str}$. Tax will be ${((str/100) * 10)}$ while the cost with counted tax percent (10%) is ${str + (str/100) * 10}$`)
}

else if (str >= 50001 && str <= 100000) {
    console.log(`The base income is ${str}$. Tax will be ${((str/100) * 15)}$ while the cost with counted tax percent (15%) is ${str + (str/100) * 15}$`)
}

else if (str >= 100001 && str <= 200000) {
    console.log(`The base income is ${str}$. Tax will be ${((str/100) * 20)}$ while the cost with counted tax percent (20%) is ${str + (str/100) * 20}$`) 
}

else if (str > 200000) {
    console.log(`The base income is ${str}$. Tax will be ${((str/100) * 25)}$ while the cost with counted tax percent (25%) is ${str + (str/100) * 25}$`)
}