function countNumbersInLine(line) {
  let count = 0;

  for (const char of line) {
    if (!isNaN(Number(char))) {
      count++;
    }
  }

  return count;
}

const line = "Hello 123 World!";
const numCount = countNumbersInLine(line);
console.log(numCount);
