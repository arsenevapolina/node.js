const EventEmitter = require("events");

class WordProcessor extends EventEmitter {
  constructor() {
    super();
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.on("processWord", (word) => {
      console.log("Исходное слово:", word);

      const letters = word.split("");
      console.log("Буквы:", letters);

      const reversed = letters.reduce((acc, letter) => letter + acc, "");
      console.log("Результат reduce (edon):", reversed);

      const simpleReverse = word.split("").reverse().join("");
      console.log("Простой reverse:", simpleReverse);

      this.emit("wordProcessed", word, reversed);
    });

    this.on("wordProcessed", (original, result) => {
      console.log(`Обработка завершена: "${original}" -> "${result}"`);
    });
  }

  processWord(word) {
    this.emit("processWord", word);
  }
}

const processor = new WordProcessor();
processor.processWord("node");
