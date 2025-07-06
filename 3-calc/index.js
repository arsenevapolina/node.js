const add = require("./add");
const subtract = require("./subtract");
const multiply = require("./multiply");
const divide = require("./divide");

const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log("Использование: node index.js <число1> <операция> <число2>");
  console.log("Доступные операции: +, -, *, /");
  process.exit(1);
}

const num1 = parseFloat(args[0]);
const operation = args[1];
const num2 = parseFloat(args[2]);

if (isNaN(num1) || isNaN(num2)) {
  console.log("Ошибка: Введите корректные числа");
  process.exit(1);
}

let result;

try {
  switch (operation) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      console.log("Ошибка: Неподдерживаемая операция. Используйте +, -, *, /");
      process.exit(1);
  }

  console.log(`Результат: ${num1} ${operation} ${num2} = ${result}`);
} catch (error) {
  console.log("Ошибка:", error.message);
  process.exit(1);
}
