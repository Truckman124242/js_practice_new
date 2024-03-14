function arraySum(...array) {
    return array.reduce((total, num) => total + num, 0)
}

console.log(arraySum(0, 1, 3.4, 3.6, 7, " is a total amount."))