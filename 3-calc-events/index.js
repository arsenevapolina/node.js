const Calculator = require("./calculator");

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

const calculator = new Calculator();

const operationMap = {
  "+": "add",
  "-": "subtract",
  "*": "multiply",
  "/": "divide",
};

try {
  const operationName = operationMap[operation];
  if (!operationName) {
    console.log("Ошибка: Неподдерживаемая операция. Используйте +, -, *, /");
    process.exit(1);
  }
  calculator.executeOperation(operationName, num1, num2);
} catch (error) {
  console.log("Ошибка:", error.message);
  process.exit(1);
}
