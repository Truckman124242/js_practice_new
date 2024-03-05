let basicString = "Trying The Test";
let char_to_change = 't';
let char_to_replace = '#'
let changedString = '';

for (let i = 0; i < basicString.length; i++) {
    let currentChar = basicString[i];

    if (currentChar.toLowerCase() === char_to_change.toLowerCase()) {
        changedString += char_to_replace;
    }
    
    else {
        changedString += currentChar;
    }
} 

console.log(`Original text: ${basicString}.`)
console.log(`Text with character '${char_to_change}' being replaced: ${changedString}.`)
