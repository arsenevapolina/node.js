const EventEmitter = require("events");

class Calculator extends EventEmitter {
  constructor() {
    super();
    this.operations = {
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      divide: (a, b) => {
        if (b === 0) throw new Error("Деление на ноль невозможно");
        return a / b;
      },
    };
    this.symbols = {
      add: "+",
      subtract: "-",
      multiply: "*",
      divide: "/",
    };
    this.setupEventListeners();
  }

  setupEventListeners() {
    Object.keys(this.operations).forEach((operation) => {
      this.on(operation, (a, b) => {
        try {
          const result = this.operations[operation](a, b);
          this.emit("result", operation, a, b, result);
        } catch (error) {
          this.emit("error", error.message);
        }
      });
    });

    this.on("result", (operation, a, b, result) => {
      console.log(
        `Результат: ${a} ${this.symbols[operation]} ${b} = ${result}`
      );
    });

    this.on("error", (message) => {
      console.log("Ошибка:", message);
    });
  }

  executeOperation(operation, a, b) {
    this.emit(operation, a, b);
  }
}

module.exports = Calculator;
