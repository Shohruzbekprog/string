function createString(N, character) {
  let result = '';
    for (let i = 0; i < N; i++) {
    result += character;
  }
  
  return result;
}
const N = 5;
const character = 'A';
const result = createString(N, character);
console.log(result);
