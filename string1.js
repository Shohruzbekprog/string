function generateUppercaseLetters(n) {
  let result = "";
  
  for (let i = 0; i < n; i++) {
    let charCode = 65 + i;
    let char = String.fromCharCode(charCode);
    result += char;
  }
  return result;
}
let n = 26;
let letters = generateUppercaseLetters(n);
console.log(letters);
