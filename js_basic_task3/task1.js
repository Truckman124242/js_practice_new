let basicString = "     TESTING, car, BUS, try, door    ";
let char_to_replace = '*';
let changedString = ''

for (let i = 0; i < basicString.length; i++) {
    let currentChar = basicString[i];

    if (currentChar.toLowerCase() === 'a' || currentChar.toLowerCase() === 'o' || currentChar.toLowerCase() === 'e' 
    || currentChar.toLowerCase() === 'i' || currentChar.toLowerCase() === 'u' || currentChar.toLowerCase() === 'y') {
        changedString += char_to_replace;
    }

    else {
        changedString += currentChar;
    }
} 
console.log (`Original text: ${basicString.trim()}`)
console.log(`Text with vowels being replaced: ${changedString.trim()}.`)
