function evaluateExpression(expression) {
  expression = expression.replace(/\s+/g, '');

  let result = 0;
  let currentNum = 0;
  let operator = "+";

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (!isNaN(char)) {
      currentNum = currentNum * 10 + parseInt(char);
    }

    if (char === "+" || char === "-") {
      if (operator === "+") {
        result += currentNum;
      } else if (operator === "-") {
        result -= currentNum;
      }

      currentNum = 0;
      operator = char;
    }
  }

  if (operator === "+") {
    result += currentNum;
  } else if (operator === "-") {
    result -= currentNum;
  }

  return result;
}

const expression = "7 + 3 - 2";
const result = evaluateExpression(expression);
console.log(result); 