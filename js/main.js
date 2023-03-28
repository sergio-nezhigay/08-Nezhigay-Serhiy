let i;
// Вивести на сторінку в один рядок через кому числа від 10 до 20.
const resultEl = document.querySelector(".result");
let task = "<h1> HomeWork #8";
let output = [];
for (i = 10; i <= 20; i++) {
  output.push(i);
}

task += `<h2>Task1: ${output.join(", ")}</h2>`;

// Вивести квадрати чисел від 10 до 20.
output = [];
for (i = 10; i <= 20; i++) {
  output.push(i * i);
}

task += `<h2>Task2: ${output.join(", ")}</h2>`;

// Вивести таблицю множення на 7.

output = [];
for (i = 1; i <= 10; i++) {
  output.push(`7 x ${i} = ${7 * i}`);
}

task += `<h2>Task3: ${output.join("; ")}</h2>`;

// Знайти суму всіх цілих чисел від 1 до 15.

output = 0;
for (i = 1; i <= 15; i++) {
  output += i;
}

task += `<h2>Task4: Знайти суму всіх цілих чисел від 1 до 15. Результат: ${output}</h2>`;

// Знайти добуток усіх цілих чисел від 15 до 35.

output = 1;
for (i = 15; i <= 35; i++) {
  output *= i;
}

task += `<h2>Task5: Знайти добуток усіх цілих чисел від 15 до 35. Результат: ${output}</h2>`;

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

output = 0;

for (i = 1; i <= 500; i++) {
  output += i;
}

task += `<h2>Task6: Знайти середнє арифметичне всіх цілих чисел від 1 до 500. 
Результат: ${output / 500}`;

output = 0;
for (i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    output += i;
  }
}
task += `<h2>Task7: Вивести суму лише парних чисел в діапазоні від 30 до 80. 
Результат: ${output}`;

output = [];
for (i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    output.push(i);
  }
}
task += `<h2>Task8: Вивести всі числа в діапазоні від 100 до 200 кратні 3. 
Результат: ${output.join(", ")}`;

output = [];
let testNumber = 12;
for (i = testNumber; i >= 1; i--) {
  if (testNumber % i === 0) {
    output.push(i);
  }
}
task += `<h2>Task9: Дано натуральне число (${testNumber}). Знайти та вивести на сторінку всі його дільники.. 
Результат: ${output.join(", ")}`;

output = [];
for (i = testNumber; i >= 1; i--) {
  if (testNumber % i === 0) {
    if (i % 2 === 0) {
      output.push(i);
    }
  }
}
task += `<h2>Task10: Дано натуральне число (${testNumber}). Визначити кількість його парних дільників. 
Результат: ${output.join(", ")}`;

output = 0;
for (i = testNumber; i >= 1; i--) {
  if (testNumber % i === 0) {
    if (i % 2 === 0) {
      output += i;
    }
  }
}
task += `<h2>Task11: Дано натуральне число (${testNumber}). Знайти суму його парних дільників. 
Результат: ${output}`;

output = [];
for (i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    output.push(`${i} x ${j} = ${i * j}`);
  }
  output.push(`<br>`);
}

task += `<h2>Task12: Надрукувати повну таблицю множення від 1 до 10.
Результат: <br>${output.join("<br> ")}`;

resultEl.insertAdjacentHTML("beforeend", task);
