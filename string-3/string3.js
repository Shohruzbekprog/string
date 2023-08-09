const inputString = prompt("Enter a string:");

const firstCharacter = inputString.charAt(0);
const lastCharacter = inputString.charAt(inputString.length - 1);

const firstCharacterCode = firstCharacter.charCodeAt(0);
const lastCharacterCode = lastCharacter.charCodeAt(0);

console.log(`UTF-16 code of first character (${firstCharacter}): ${firstCharacterCode}`);
console.log(`UTF-16 code of last character (${lastCharacter}): ${lastCharacterCode}`);
