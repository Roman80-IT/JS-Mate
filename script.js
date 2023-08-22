//            node Lesson_4/script           - запуск через термінал ≡
// $                  node script
//! -----------------------  Task-1  `Simple JS Program`  ------------------------

//* I have 10$ amount
// let amount = 20;

//* Cookies cost 7$ cookiesPrice
//* Candies cost 8$
// let cookiesPrice = 7;
// let candiesPrice = 8;

//* Can I buy both candies and cookies?
// let totalPrice = cookiesPrice + candiesPrice;

// if (amount < totalPrice) {
//   console.log("No, I need more money");
// } else {
//   console.log("Yes, I can buy everything");
// }
//* Yes, I can buy everything
//* No, I need more money

//! -----------------------  Task-2  ------------------------
//* У цьому завданні ти навчишся виводити дані в консоль.
//* Виведемо значення greeting, використовуючи метод console.log. Для цього напиши змінну в круглі дужки методу, наприклад:

// const variable = 123;
// console.log(variable);
// //* в консолі виведеться 123

//* Щоб переглянути значення, надруковані за допомогою console.log, у розділі Результати натисни Дивитися логи.

//! -----------------------  Task-2  ------------------------
//* А тепер знайди помилку в коді.

//* Код, який ми написали в редакторі, не працює 😢 Виправ оголошення змінної так, щоб він запрацював.

//! fix the mistake
//! const books = 5;
//! books = 7;

//? let books = 5;
//? books = 7;

//! -----------------------  Task-2  ------------------------
//* А тепер навчимося створювати змінні та зробимо фруктовий сік!
//* Ми маємо 4 кг яблук і 3 кг груш. Твоє завдання — оголосити 3 нові змінні:
//*    `apples` зі значенням 4;
//*    `pears` зі значенням 3;
//*    `fruits`, значення якої дорівнює сумі змінних apples і pears.

// Наприклад:
// const apples = 4;

//! declare variables with correct values
// const apples = 4;
// const pears = 3;
// const fruits = apples + pears;

//! -----------------------  Task-2  ------------------------
//* А тепер потренуйся закоментовувати наш код.
//* Закоментуй const age і const name, використовуючи однорядкові коментарі (//).

// Наприклад:
// const name = 'Bob';

//! -----------------------  Task-2  ------------------------
//* У цьому завданні тобі потрібно розкоментувати код.
//* Для цього видали символи однорядкового коментаря `//`.
// const name = 'Alice';
// const age = 28;

//! -----------------------  Task-3  ------------------------
//* Змінні можуть зберігати різні дані. Це можуть бути числа, рядки, булеві значення тощо.
//* У цьому завданні ми створимо декілька змінних та запишемо у них дані різних типів.
//*    Оголоси наступні змінні:
//*     - brand зі значенням 'Toyota';
//*     - price зі значенням 22500;
//*     - isSedan зі значенням true;
//*     - wings зі значенням undefined;
//*     - owner зі значенням null.
//* Зверни увагу: для оголошення змінних використовуй ключове слово `const`. Наприклад, якщо потрібно оголосити змінну name зі значенням 'Ivan', це виглядатиме так:
//*         const name = 'Ivan';
//* Також переконайтеся, що ви явно присвоїли значення змінній під час оголошення за допомогою const. Наступний код викличе синтаксичну помилку:
// const surname; //! SyntaxError: Missing initializer in const declaration

// const brand = "Toyota";
// const price = 22500;
// const isSedan = true;
// const wings = undefined;
// const owner = null;
//! -----------------------  Task-4  ------------------------
//* Настав час попрацювати з числами та операторами.
//* У коді є змінні a та b. Твоє завдання: оголоси 4 нові змінні:
//*    `addition` повинна містити суму a та b;
//*    `subtraction`     - різницю a та b;
//*    `division`        - результат ділення a на b;
//*    `multiplication`  - добуток a та b.
// Наприклад:
// const addition = a + b;

// const a = 10;
// const b = 2;
// //! write your code below this line
// const addition = a + b;
// const subtraction = a - b;
// const division = a / b;
// const multiplication = a * b;

//! -----------------------  Task-4  ------------------------
//* А зараз попрацюємо з іншими операторами. У коді є змінні a та b.
//* Твоє завдання: оголоси 2 нові змінні:
//*    exp має містити результат піднесення a до степеня b;
//*    mod має містити остачу від ділення a на b.

// const a = 7;
// const b = 2;
// //! write your code below this line
// const exp = a ** b;
// const mod = a % b;

//! -----------------------  Task-4  ------------------------
//* А тепер попрацюймо з пріоритетом обчислень.
//* У нашому прикладі розстав дужки так, щоб у результаті змінна expression дорівнювала 10.
//* Зверни увагу: тобі не потрібно оголошувати нову змінну. Розстав дужки в існуючому виразі.
//*       const expression = 10 * 7 + 8 - 11 / 4;
//! change code below
// const expression = (10 * (7 + 8 - 11)) / 4;
// const expression = 10 * (7 + 8 - 11) / 4;

//! -----------------------  Task-5  ------------------------
//* А тепер застосуємо конкатенацію — «склеювання» рядків за допомогою +.
//* Оголоси нову змінну resultString. Її значення «склей» із уже оголошених змінних a, b та c, щоб у результаті утворився рядок 'Concatenation'.
//*    Наприклад:
//*      const a = 'llo';
//*      const b = 'He';
//*      const result = b + a + '!'; // містить рядок 'Hello!'

// const a = "Con";
// const b = "enation";
// const c = "cat";
//! write your code below
// const resultString = a + c + b;

//! -----------------------  Task-5  ------------------------

//* А тепер скористаємося інтерполяцією — вставкою змінних у рядок у зворотних лапках.
//* Оголоси нову змінну resultString. Щоб записати їй значення, використай уже оголошені змінні a та b і зворотні лапки (``). У результаті повинен вийти рядок: Hello, world!.
//* Зверни увагу на пробіл, кому та знак оклику, які повинні бути в результаті.
//*    Наприклад:
//*      const a = 'Hello';
//*      const result = `${a}!!!`; // містить рядок 'Hello!!!

// const a = "Hello";
// const b = "world";
// //! write your code below
// const resultString = `${a}, ${b}!`;

//! -----------------------  Task-6  ------------------------
//* У цьому завданні ти навчишся працювати з логічним оператором OR.
//* Тобі дано код з оголошеними змінними. Зміни значення однієї з них (isHoliday або isVacation) так, щоб canStayHome отримала значення true.
//* Зверни увагу: цей рядок коду змінювати не потрібно:
//*     const canStayHome = isHoliday || isVacation;

//* const isHoliday = false;
//* const isVacation = false;

//* const canStayHome = isHoliday || isVacation; //! don't change this line

// const isHoliday = true;
// const isVacation = false;

// const canStayHome = isHoliday || isVacation; //! don't change this line

//! -----------------------  Task-6  ------------------------
//* У цьому завданні ти навчишся працювати з логічним оператором AND.
//* Тобі дано код з оголошеними змінними. Зміни значення однієї з них (isWaterHot або haveTea) так, щоб canMakeTea отримала значення false.
//* Зверни увагу: цей рядок коду змінювати не потрібно:
//*     const canMakeTea = isWaterHot && haveTea;

// const isWaterHot = true;
// const haveTea = false;

// const canMakeTea = isWaterHot && haveTea; // don't change this line
// console.log(canMakeTea);
//! -----------------------  Task-7  ------------------------
// Настав час попрацювати з функціями.

// У цьому завданні оголоси функцію myFunction за допомогою ключового слова function.

// Наприклад:

// function example() { }
// function myFunction() { }

//! -----------------------  Task-7  ------------------------
// У цьому завданні оголоси функцію hello, використовуючи ключове слово function.

// Всередині функції зроби виклик console.log з аргументом 'Hello, world!'.
//! write code here
// function hello() {
//   console.log("Hello, world!");
// }
// hello();

//! -----------------------  Task-7  ------------------------
//* Оголоси функцію getString, яка не приймає ніяких параметрів.
//* Всередині функції getString:
//* оголоси змінну greeting, використовуючи ключове слово const, присвой їй значення - рядок 'Hello, Mate academy!'.
//* поверни змінну greeting за допомогою ключового слова return.

// function getString() {
//   const greeting = "Hello, Mate academy!";
//   return greeting;
// }

// console.log(getString);
// console.log(getString());
//! -----------------------  Task-7  ------------------------
// А тепер створи функцію greeter, яка:

// приймає параметр name;
// повертає рядок-привітання у вигляді Hi, ${name}! (використай ключове слово return).
// параметр: name = 'Anna'

// Наприклад: greeter("Anna"); // повертає 'Hi, Anna!'

// function greeter(name) {
//   return `Hi, ${name}!`;
// }

//! -----------------------  Task-7  ------------------------
// Ускладнимо попереднє завдання 😎

// Створи функцію greeter, яка:

// приймає параметри name та partOfTheDay;
// повертає рядок-привітання в такому форматі:
// параметри: name = 'Paul', partOfTheDay = 'night'

// greeter('Paul','night'); // повертає рядок 'Good night, Paul!'

// Зверни увагу: параметри name та partOfTheDay передаються в тестах, тобі не потрібно оголошувати їх у коді. Також не забудь додати кому та знак оклику.

// function greeter(name, partOfTheDay) {
//   return `Good ${partOfTheDay}, ${name}!`;
// }
// console.log(greeter("Paul", "night"));

//! -----------------------  Task-7  ------------------------
// У цьому завданні створи функцію double, яка:

// приймає параметр num;
// повертає значення num, помножене на 2.
// Наприклад:

// параметр: num = 5
// double(5); // повертає 10

// // параметр: num = 24
// double(24); // повертає 48

// function double(num) {
//   return num * 2;
// }
// console.log(double(5));

//! -----------------------  Task-8  ------------------------
