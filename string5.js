const inputString = ("abc");

function reverseString(str) {
  const strArray = str.split("");
    const reversedArray = strArray.reverse();
    const reversedString = reversedArray.join("");
    return reversedString;
}

const reversedString = reverseString(inputString);
console.log("Reversed string:", reversedString);
