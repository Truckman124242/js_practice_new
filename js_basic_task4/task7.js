const inputArray = [30, 20, 60, 30, 40, 20, 40]

const minScore = inputArray.indexOf(Math.min(...inputArray))

const outputArray = inputArray.slice(0, minScore).concat( inputArray.slice(minScore + 1) )

console.log(`Input: ${JSON.stringify(inputArray)}, output: ${JSON.stringify(outputArray)}`)