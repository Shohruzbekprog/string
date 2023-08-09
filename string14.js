function createNewString(N1, N2, S1, S2) {
  let firstSubstring = S1.substring(0, N1);
  let lastSubstring = S2.substring(S2.length - N2);
  let newString = firstSubstring + lastSubstring;
  return newString;
}

let result = createNewString(3, 4, "Hello", "World");
console.log(result);
