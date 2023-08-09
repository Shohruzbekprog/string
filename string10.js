function changeCase(str) {
  let result = ""; // initialize an empty string
  
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i); // get the character at index i
    
    if (char === char.toUpperCase()) {
      result += char.toLowerCase(); // convert uppercase to lowercase
    } else {
      result += char.toUpperCase(); // convert lowercase to uppercase
    }
  }
  
  return result;
}
let input = "HeLLo WoRLd";
let output = changeCase(input);
console.log(output); // Output: "hEllO wOrlD"
