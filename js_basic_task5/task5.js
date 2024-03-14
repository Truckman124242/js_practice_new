function filteredNumbers(numbers) {
    return numbers.filter(num => num > 0)
}

console.log(filteredNumbers([0.01, -4, "testing", 5, -6]))
//Or
array = [3, -25, 24, 0,"new", 0.01, 5, 7]
onlyPositiveNumbers = filteredNumbers(array)
console.log(onlyPositiveNumbers)