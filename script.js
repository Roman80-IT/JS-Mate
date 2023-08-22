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
// Як перевірити, що змінна 'amount' більша за 75?
// Пояснення правильного варіанту:
// Правильна відповідь: if (amount > 75) {code ...}, оскільки:

// Умову слід помістити у круглі дужки: Наприклад, (price <90);

// Код, який буде виконуватися, якщо умова вірна, слід помістити у фігурні дужки: Наприклад:

// if (value === true) {
//    console.log('True!');
// }

// Шаблон для if-конструкції:

// if (умова) {
//    код...
// }

// Якщо шаблону не дотримано, програма видасть помилку.

//! -----------------------------------------------------------

// Що буде результатом виконання цього коду?
// const score = 55;

// if (score >= 60) {
//   console.log('Well done!');
// } else {
//   console.log('Try again!');
// }

//! 55 буде надруковано в консолі
//! 'Well done!' буде надруковано в консолі
//? 'Try again!' буде надруковано в консолі
//! Нічого

//! -----------------------------------------------------------
//* Що буде результатом виконання цього коду?
// function getSize(volume) {
//   if (volume < 250) {
//     return "small";
//   } else if (volume < 350) {
//     return "medium";
//   }
// }

// getSize(400);

//? undefined буде повернено
//! 300 буде повернено
//! 'medium' буде повернено
//! 'small' буде повернено

//! -----------------------------------------------------------
//* Що буде результатом виконання цього коду?
// function getPrice(amount) {
//   if (amount < 20) {
//     return amount * 10;
//   } else if (amount < 50) {
//     return amount * 8;
//   }
//   return amount * 5;
// }

// getPrice(50);

//! undefined буде повернено
//! 50 буде повернено
//? 250 буде повернено
//! 400 буде повернено

//! -----------------------------------------------------------
//* Що буде результатом виконання цього коду?
// const score = 59;

// if (score >= 60) {
//   console.log('Well done!');
// }

//? Нічого
//! 'Well done!' буде надруковано в консолі
//! 59 буде надруковано в консолі

//! -----------------------------------------------------------

// Що буде результатом виконання цього коду?
// function getPrice(amount) {
//   if (amount < 20) {
//     return amount * 10;
//   } else if (amount < 50) {
//     return amount * 8;
//   }

//   return amount * 5;
// }

// getPrice(10);

//! 10 буде повернено
//? 100 буде повернено
//! 50 буде повернено
//! undefined буде повернено

//! -----------------------------------------------------------
// Що буде результатом виконання цього коду?
// function getSize(volume) {
//   if (volume < 250) {
//     return 'small';
//   } else if (volume < 350) {
//     return 'medium';
//   }
// }

// getSize(300);

// 'small' буде повернено
//? 'medium' буде повернено
// 300 буде повернено
// undefined буде повернено

//! -----------------------------------------------------------
// Як перевірити, що змінна 'sum' знаходиться в діапазоні від 15 до 35 включно?
// Пояснення правильного варіанту:
// Правильна відповідь: if (sum >= 15 && sum <= 35) {code ...}, тому що:

// Оператор '&&' використовується для перевірки того, що обидві умови вірні. Це означає, що ціна більша або дорівнює 15 ТА менша або дорівнює 35.

// ⛔ Інші варіанти неправильні, тому що:

// Оператор '||' використовується для перевірки того, що хоча б одна умова вірна. Наприклад, if (sum >= 15 || sum <= 35) буде вірно, якщо sum = 1 (бо sum <= 35) АБО якщо sum = 40 (бо sum >= 15).

// Синтаксис if (15 <= sum <= 35) неправильний, тому що Javascript бачить тільки першу умову: 15 <= sum І якщо sum = 36, то вся умова також буде вірною, тому що 15 <= sum. Умова sum <= 35 ігнорується.

// Синтаксис if (35 >= sum >= 15) неправильний, тому що Javascript бачить тільки першу умову: 35 >= sum І якщо sum = 14, то вся умова також буде вірною, тому що 35 >= sum. Умова sum >= 15 ігнорується.

// if (15 <= sum <= 35) {code...}
// if (sum >= 15 || sum <= 35) {code...}
//? if (sum >= 15 && sum <= 35) {code...}
// if (35 >= sum >=15) {code...}

//! -----------------------------------------------------------
// Як перевірити, що змінна 'status' дорівнює рядку 'user'?
// Пояснення правильного варіанту:
// Правильна відповідь: if (status === 'user') {code ...}, оскільки:

// Оператор '===' використовується для перевірки того, що значення змінної 'status' дорівнює 'user'; 'user' пишеться в лапках, тому що це рядок.

// ⛔ Інші варіанти неправильні, оскільки:

// Оператор '=' використовується для присвоєння значення змінній. Наприклад: let status = 'admin'; // змінна 'status' тепер зберігає рядок 'admin' let status = user; // змінна 'status' тепер зберігає значення змінної 'user'

// Умова if (status === user) без лапок означає, що змінні 'status' та 'user' повинні мати однакові значення. Наприклад: let status = 'online'; let user = 'online'; if (status === user) вірно, тому що 'online' === 'online'

// if (status = user) {code...}
// if (status === 'user') {code...}
//? if (status = 'user') {code...}
// if (status === user) {code...}
//! -----------------------------------------------------------
// Як перевірити, що змінна 'amount' більша за 75?
// Пояснення правильного варіанту:
// Правильна відповідь: if (amount > 75) {code ...}, оскільки:

// Умову слід помістити у круглі дужки: Наприклад, (price <90);

// Код, який буде виконуватися, якщо умова вірна, слід помістити у фігурні дужки: Наприклад:

// if (value === true) {
//    console.log('True!');
// }

// Шаблон для if-конструкції:

// if (умова) {
//    код...
// }

// Якщо шаблону не дотримано, програма видасть помилку.

// if amount > 75 {code...}
//? if (amount > 75) {code...}
// if (amount > 75), code...
// if amount > 75, code...

//! -----------------------  Task-8  ------------------------
// А тепер попрацюємо з умовними операторами.

// За законом, тільки повнолітні можуть купувати алкогольні напої.

// Створи функцію canBuyBeer, яка приймає як параметр ціле число age:

// якщо age більше або дорівнює 18, то функція поверне рядок You can buy beer;
// в іншому випадку функція поверне рядок You can not buy beer.
// Щоб повернути потрібний рядок із функції, використай ключове слово return.

/**
 * @param {number} age
 *
 * @returns {string}
 */

// declare your function below
// function canBuyBeer(age) {
//   if (age >= 18) {
//     return `You can buy beer`;
//   }
//   return `You can not buy beer`;
// }
// console.log(canBuyBeer(17)); // поверне 'You can not buy beer'
// console.log(canBuyBeer(18)); // поверне 'You can buy beer'
// console.log(canBuyBeer(50)); // поверне 'You can buy beer'
//! -----------------------  Task-8  ------------------------
// Усі офіціанти люблять чайові! А один із них поділився з нами секретним рейтингом.

// Реалізуй функцію getTipsRating, яка приймає суму чайових amount та повертає рядок-оцінку відповідно до залишеної суми:

// terrible, якщо amount дорівнює 0 грн;
// poor, якщо amount від 1 до 10 грн включно;
// good, якщо amount від 11 до 20 грн включно;
// great, якщо amount від 21 до 50 грн включно;
// excellent, якщо amount більше 50 грн.
// Наприклад:
/**
 * @param {number} amount
 *
 * @returns {string}
 */
// function getTipsRating(amount) {
//   if (amount === 0) {
//     return "terrible";
//   }

//   if (amount <= 10) {
//     return "poor";
//   }
//   //! додай решту умов...
//   if (amount <= 20 && amount > 10) {
//     return "good";
//   }
//   if (amount <= 50 && amount > 20) {
//     return "great";
//   }
//   return "excellent";
// }

// console.log(getTipsRating(0)); // 'terrible'
// console.log(getTipsRating(1)); // 'poor'
// console.log(getTipsRating(10)); // 'poor'
// console.log(getTipsRating(30)); // 'great'
// console.log(getTipsRating(11)); // 'good'
// console.log(getTipsRating(60)); // 'excellent'
//! -----------------------  Task-8  ------------------------
// Продовжимо працювати з умовними операторами.

// Ніхто не любить платити податки, але ми всі зобов’язані!

// Створи функцію calculateTaxes, яка приймає ціле число income (твій дохід) та повертає податок, який ти заплатиш. Сума податку залежить від твого доходу:

// до 1000 грн включно — податок 2% від доходу;
// від 1001 грн до 10000 грн включно — податок 3% від доходу;
// більше 10 000 грн — податок 5% від доходу.
//   Наприклад:

// function calculateTaxes(income) {
//   if (income <= 1000) {
//     return income * 0.02;
//   }
//   if (income <= 10000 && income > 1000) {
//     return income * 0.03;
//   }
//   return income * 0.05;
// }
//! ВАРІАНТ 2
// function calculateTaxes(income) {
//   if (income <= 1000) {
//     return income * 0.02;
//   } else if (income <= 10000) {
//     return income * 0.03;
//   } else {
//     return income * 0.05;
//   }
// }

// calculateTaxes(900); // 18 (900 * 0.02), оскільки 900 < 1000
// calculateTaxes(5000); // 150 (5000 * 0.03), оскільки 5000 < 10000 і 5000 > 1001
// calculateTaxes(10500); // 525 (10500 * 0.05), оскільки 10500 > 10000

//! -----------------------  Task-8  ------------------------
// У цьому завданні створи функцію getLargestExpressionResultOfTwo, яка приймає 2 числа: a та b. Ця функція має порівняти результати наступних обчислень та повернути найбільший із них:

// a + b
// a - b
// Зверни увагу:

// числа a та b можуть бути від'ємними;
// не використовуй тернарний оператор чи ключове слово else.
// Наприклад, якщо a = 10 та b = 5, то:

// a + b = 15 — найбільший результат
// a - b = 5
// Але якщо a = 20 та b = -5, то:

// a + b = 15
// a - b = 25 — найбільший результат

/**
 * @param {number} a
 * @param {number} b
 *
 * @returns {number}
 */
// console.log(getLargestExpressionResultOfTwo(10, 5)); // 15
// console.log(getLargestExpressionResultOfTwo(20, -5)); // 25

// function getLargestExpressionResultOfTwo(a, b) {
//   if (a + b > a - b) {
//     return a + b;
//   }
//   return a - b;
// }

//! -----------------------  Task-8  ------------------------
//* У цьому завданні створи ф-цію getLargestExpressionResultOfThree, яка приймає 2 числа: a та b.
//* Ця функція має порівняти результати наступних обчислень та повернути найбільший із них:

// a + b
// a - b
// a * b
// Зверни увагу:

// числа a та b можуть бути від'ємними;
// не використовуй тернарний оператор чи ключове слово else.
// Наприклад, якщо a = 10 та b = 5, то:

// a + b = 15
// a - b = 5
// a * b = 50 — найбільший результат
// Але якщо a = 10 та b = -5, то:

// a + b = 5
// a - b = 15 — найбільший результат
// a * b = -50
// console.log(getLargestExpressionResultOfThree(10, 5)); // 50
// console.log(getLargestExpressionResultOfThree(10, -5)); // 15

/**
 * @param {number} a
 * @param {number} b
 *
 * @returns {number}
 */
// function getLargestExpressionResultOfThree(a, b) {
//   //! write code here
//   if (a * b > a + b && a * b > a - b) {
//     return a * b;
//   }
//   if (a + b > a * b && a + b > a - b) {
//     return a + b;
//   }
//   return a - b;
// }
//! ВАРІАНТ 2
// function getLargestExpressionResultOfThree(a, b) {
//   const sumResult = a + b;
//   const subtractResult = a - b;
//   const multiplyResult = a * b;

//   let largestResult = sumResult;

//   if (subtractResult > largestResult) {
//     largestResult = subtractResult;
//   }
//   if (multiplyResult > largestResult) {
//     largestResult = multiplyResult;
//   }

//   return largestResult;
// }

//! -----------------------  Task-8  ------------------------
// У цьому завданні створи функцію getLargestExpressionResult, яка приймає 2 числа: a та b. Ця функція має порівняти результати наступних обчислень та повернути найбільший із них:

// a + b
// a - b
// a * b
// a / b
// Зверни увагу:

// числа a та b можуть бути від'ємними;
// не використовуй тернарний оператор чи ключове слово else.
// Наприклад, якщо a = 10 та b = 5, то:

// a + b = 15
// a - b = 5
// a * b = 50 — найбільший результат
// a / b = 2
// Але якщо a = 10 та b = -5, то:

// a + b = 5
// a - b = 15 — найбільший результат
// a * b = -50
// a / b = -2
/**
 * @param {number} a
 * @param {number} b
 *
 * @returns {number}
 */
// console.log(getLargestExpressionResult(10, 5)); // 50
// console.log(getLargestExpressionResult(10, -5)); // 15

// function getLargestExpressionResult(a, b) {
//   if (a * b > a + b && a * b > a - b && a * b > a / b) {
//     return a * b;
//   }
//   if (a + b > a * b && a + b > a - b && a + b > a / b) {
//     return a + b;
//   }
//   if (a - b > a * b && a - b > a + b && a - b > a / b) {
//     return a - b;
//   }
//   return a / b;
// }
//! ВАРІАНТ 2
// Ось більш короткий та компактний варіант функції без використання Math.max(), тернарних операторів та ключового слова else:

// function getLargestExpressionResult(a, b) {
//   const results = [a * b, a + b, a - b, a / b];
//   let largestResult = results[0];

//   for (const result of results) {
//     if (result > largestResult) {
//       largestResult = result;
//     }
//   }

//   return largestResult;
// }

//! -----------------------  Task-9  ------------------------
// node script
// Настав час навчитися працювати з циклами.
// У цьому завданні дана функція printNumbers, яка повинна виводити в консоль числа від start до end включно.
// Але зараз вона містить нескінченний цикл та при виклику видає помилку Task timed out (Час очікування задачі вичерпано). Це відбувається через те, що умова виходу з цього циклу ніколи не виконується, та i <= end завжди вірно.
// Додай, будь ласка, крок циклу, щоб виправити це.
//! fix the infinite loop

// function printNumbers(start, end) {
//   for (let i = start; i <= end; ) {
//     console.log(i);
//   }
// }

// function printNumbers(start, end) {
//   for (let i = start; i <= end; i += 1) {
//     console.log(i);
//   }
// }

// printNumbers(1, 5);
//! -----------------------  Task-9  ------------------------
// А тепер допишемо умову зупинки циклу.

// Доповни код у редакторі так, щоб він виводив у консоль числа від 1 до N включно. Для цього замість коментаря /* stop condition */ напиши правильну умову зупинки циклу.

// function printNumbers(N) {
//   for (let i = 1 /* stop condition */; ; i++) {
//     console.log(i);
//   }
// }

// function printNumbers(N) {
//   for (let i = 1; i <= N; i++) {
//     console.log(i);
//   }
// }
// printNumbers(3);

//! -----------------------  Task-9  ------------------------
//* Ускладнимо попереднє завдання.
//* Доповни код у редакторі так, щоб він виводив у консоль числа від 1 до N включно, але з кроком step.
//* Наприклад, якщо N = 7 та step = 3, то в консолі ми побачимо такі числа:

// 1
// 4
// 7

// Зверни увагу: тобі треба дописати початкове значення /* start value */, умову зупинки циклу /* stop condition */ та крок циклу /* loop step */ замість коментарів.

// function printNumbersWithStep(N, step) {
//   for (;;) /* start value */ /* stop condition */ /*loop step*/ {
//     console.log(i);
//   }
// }

// function printNumbers(N, step) {
//   for (let i = 1; i <= N; i += step) {
//     console.log(i);
//   }
// }
// printNumbers(7, 3);

//! -----------------------  Task-9  ------------------------
// У цьому завданні реалізуй функцію printNumbersBackwards, яка приймає додатне число N і виводить у консоль числа від N до 1 включно.

// Наприклад, якщо N = 5, функція повинна вивести такі числа:

// 5
// 4
// 3
// 2
// 1

// function printNumbersBackwards(N) {
//   for (let i = N; i >= 1; i -= 1) {
//     console.log(i);
//   }
// }
// printNumbersBackwards(5);

//! -----------------------  Task-9  ------------------------
// node script
// Рухаємось далі! Тепер навчимося реалізовувати складніші цикли.

// Одного разу ведучий на весіллі вирішив розважити гостей і встановив правило: кожен гість вимовляє тост, і всі присутні п'ють за здоров'я молодих.

// Наприклад:

// коли приходить перший гість, він п'є на самоті;
// коли приходить другий — п'ють удвох;
// третій — п'ють утрьох і так далі.
// Якщо гостей 5, то всього знадобиться 15 порцій (1 + 2 + 3 + 4 + 5).

// Якщо 10, то 55 порцій (1 + 2 + 3 + ... + 10).

// Реалізуй функцію getDrinks, яка приймає numberOfGuests — скільки всього буде гостей, і повертає необхідну кількість порцій.

// Ще приклади:

// getDrinks(0); // 0 - нема гостей - нема і порцій
// getDrinks(2); // 1 + 2 = 3
// getDrinks(6); // 1 + 2 + 3 + 4 + 5 + 6 = 21

// Як підсумовувати числа в циклі ти можеш подивитися в розділі теорії Сума чисел від 1 до n.

/**
 * @param {number} numberOfGuests
 *
 * @returns {number}
 */
// function getDrinks(numberOfGuests) {
//   //! write code here
//   let sum = 0;
//   for (let i = 1; i <= numberOfGuests; i += 1) {
//     sum += i;
//   }
//   return sum;
// }
//! ВАРІАНТ 2
// function getDrinks(numberOfGuests) {
//   return (numberOfGuests * (numberOfGuests + 1)) / 2;
// }

// console.log(getDrinks(5));
//! -----------------------  Task-9  ------------------------
// А тепер напишемо цикл із кроком 😎

// Як ти вже знаєш, для конкурсу з напоями знадобилося безліч порцій. Тому ведучий вирішив змінити правила.

// Молодята обирають ціле додатне число step, і тепер тост говорить не кожен гість, а тільки перший і кожен, хто приходить через обрану кількість (step) гостей після попереднього тосту. При цьому, як і раніше, п'ють усі присутні.

// Наприклад:

// якщо step = 1, то, як і раніше, тост говорить кожен гість, що прийшов;
// якщо step = 2, то 1-й, 3-й, 5-й тощо;
// якщо step = 3, то 1-й, 4-й, 7-й, 10-й тощо.
// Реалізуй функцію getDrinksWithStep, яка приймає numberOfGuests і step та повертає потрібну кількість порцій.

// Ще приклади:

// getDrinksWithStep(10, 3); // 1 + 4 + 7 + 10 = 22
// getDrinksWithStep(0, 5); // 0 - нема гостей — нема і порцій
// getDrinksWithStep(5, 3); // 1 + 4 = 5
// getDrinksWithStep(18, 10); // 1 + 11 = 12

// Як знайти суму у циклі з кроком ти можеш подивитися у розділі теорії Цикл із кроком.
/**
 * @param {number} numberOfGuests
 * @param {number} step
 *
 * @returns {number}
 */
// function getDrinksWithStep(numberOfGuests, step) {
//   //! write code here
//   let sum = 0;
//   for (let i = 1; i <= numberOfGuests; i += step) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(getDrinksWithStep(10, 3));
// console.log(getDrinksWithStep(0, 5));
// console.log(getDrinksWithStep(5, 3));
// console.log(getDrinksWithStep(18, 10));

//! -----------------------  Task-9  ------------------------
// В Mate bank є можливість покласти гроші на депозит під певний відсоток і отримати прибуток через деякий час.

// Наприклад, якщо покласти 10000 на 3 роки під 4% річних, отримаємо:

// перший рік: 10000 + 4% = 10400 (10000 + 10000 * 0.04);
// другий рік: 10400 + 4% = 10816 (10400 + 10400 * 0.04);
// третій рік: 10816 + 4% = 11248.64 (10816 + 10816 * 0.04);
// чистий прибуток: 11248.64 - 10000 = 1248.64.
// Твоє завдання: напиши функцію calculateProfit, яка приймає 3 параметри:

// amount — початкова сума, яку ми кладемо на депозит;
// percent — річна відсоткова ставка;
// period — кількість років (час, на який гроші кладуться на депозит).
// Функція повинна розрахувати та повернути суму чистого прибутку за весь час.

// Приклади (ми перевіряємо тільки цілу частину):

// console.log(calculateProfit(1000, 5, 1)); // 50
// console.log(calculateProfit(12500, 3, 12)); // 5322

/**
 * @param {number} amount
 * @param {number} percent
 * @param {number} period
 *
 * @returns {number}
 */
// function calculateProfit(amount, percent, period) {
//   //! write code here
//   let sum = amount;
//   for (let i = 1; i <= period; i += 1) {
//     sum = sum + (sum * percent) / 100;
//   }
//   return sum - amount;
// }

// function calculateProfit(amount, percent, period) {
//   //! write code here
//   let sum = 0;
//   for (let i = 1; i <= period; i += 1) {
//     sum = amount + (amount * percent) / 100;
//   }
//   return sum - amount;
// }

//! -----------------------  Task-10  ------------------------
// Починаємо практикувати рядки.

// Напиши функцію getStringLength, яка приймає рядок input і повертає його довжину (кількість символів у ньому).

/**
 * @param {string} input
 *
 * @returns {number}
 */
// function getStringLength(input) {
//   //! write code here
//   return input.length;
// }
// console.log(getStringLength(`input`));
//! -----------------------  Task-10  ------------------------
// У цьому завданні ти перевіриш, чи містить рядок вказаний підрядок.

// Створи функцію isSubstring, яка приймає 2 параметри: phrase та part. Вона повинна повертати true, якщо phrase містить part, або false — якщо ні.

// Зверни увагу: функція повинна враховувати регістр.

// Наприклад:

// console.log(isSubstring("string", "s")); // true
// console.log(isSubstring("string", "ring")); // true
// console.log(isSubstring("string", "bring")); // false
// console.log(isSubstring("string", "Str")); // false, бо 'str' і 'Str' — різні рядки

/**
 * @param {string} phrase
 * @param {string} part
 *
 * @returns {boolean}
 */
// function isSubstring(phrase, part) {
//   //! write code here
//   return phrase.includes(part);
// }

//! -----------------------  Task-10  ------------------------
// У цьому завданні ти навчишся використовувати цикл for of для перебору рядка.

// Реалізуй функцію countMs, яка приймає рядок text та повертає кількість літер `m` у ньому (як великих, так і маленьких).

// Наприклад:

// console.log(countMs("document")); // 1
// console.log(countMs("Mermaid")); // 2 — потрібно рахувати і 'm', і 'M'
// console.log(countMs("code")); // 0

// Приклад циклу for of ти можеш знайти в розділі теорії Перебір без індексу.

/**
 * @param {string} text
 *
 * @returns {number}
 */
// function countMs(text) {
//   let count = 0;
//   for (const a of text) {
//     if (a.toLowerCase() === `m`) {
//       count += 1;
//     }
//   }
//   return count;
// }

//! -----------------------  Task-10  ------------------------
// letter;
//! -----------------------  Task-10  ------------------------

//! -----------------------  Task-10  ------------------------

//! -----------------------  Task-10  ------------------------

//! -----------------------  Task-10  ------------------------

//! -----------------------  Task-10  ------------------------

//! -----------------------  Task-10  ------------------------

//! -----------------------  Task-10  ------------------------

//! -----------------------  Task-10  ------------------------

//! -----------------------  Task-10  ------------------------

//! -----------------------  Task-10  ------------------------

//! -----------------------  Task-10  ------------------------

//! -----------------------  Task-10  ------------------------
