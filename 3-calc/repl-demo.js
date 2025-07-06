const word = "node";
console.log("Исходное слово:", word);

const letters = word.split("");
console.log("Буквы:", letters);

const reversed = letters.reduce((acc, letter) => letter + acc, "");
console.log("Результат reduce (edon):", reversed);

const simpleReverse = word.split("").reverse().join("");
console.log("Простой reverse:", simpleReverse);
