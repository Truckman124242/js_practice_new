function averagePerformanceCalculation(math, lit, physics) {
const average = (math + lit + physics) / 3

if (average >= 1 && average <= 49) {
    return "Low performance"
} 
else if (average >= 50 && average <= 69) {
    return "Medium performance"
} 
else if (average >= 70 && average <= 89) {
    return "Good performance"
} 
else if (average >= 90 && average <= 100) {
    return "Very good performance"
} 
else {
    return "Invalid input, please make sure the correct grades were entered"
}
}

// console.log(averagePerformanceCalculation(85, 70, 66))

// // Or 
mathScore = 99
litScore = 90
physicsScore = 93
const perfomance = averagePerformanceCalculation(mathScore, litScore, physicsScore)
console.log(perfomance)
