function getStringStars(N) {
  if (typeof N !== 'number' || N < 1 || !Number.isInteger(N)) {
    return 'Invalid input! N should be a natural number greater than or equal to 1.';
  }

  const inputString = 'Hello';
  
  let result = '';

  for (let i = 0; i < inputString.length; i++) {
    result += inputString[i];

    if (i < inputString.length - 1) {
      result += '*'.repeat(N);
    }
  }

  return result;
}
console.log(getStringStars(3));
