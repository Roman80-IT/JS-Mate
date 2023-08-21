## Основні поняття
Комп’ютерна програма — це текстовий файл, який містить послідовність команд для комп’ютера. Існує багато мов програмування. Кожна з них вимагає від програміста дотримуватись певних правил при написанні програми, щоб комп’ютер зрозумів, як її виконати. Ми з вами будемо вивчати мову Javascript та її правила.

### Команди
Усі програми складаються з команд, якими ти можеш «спілкуватися» з комп’ютером.

Наприклад, `console.log()` використовується для виведення повідомлень у консоль (натисни `F12` та обери закладку `Console`, щоб побачити її, там вже може бути багато повідомлень 😊):

```css
console.log('Hello, world!');
```

**Зверни увагу:** кожну команду завершуй символом `;` — так комп’ютер точно знатиме, що це кінець твоєї команди.

### Коментарі
Коментар — це пояснювальний текст до програми. Він не виконується комп’ютером, а просто допомагає програмісту краще зрозуміти логіку програми.

Коментарі бувають однорядковими та багаторядковими.

Однорядкові коментарі позначаються двома символами слеша `//`. Наприклад:

```css
// надрукуємо в консолі фразу 'Hello, world!'
console.log('Hello, world!');
```

Багаторядкові коментарі позначаються символами `/*` на початку та `*/` в кінці. Наприклад:

```css
/* це багаторядковий коментар
цей рядок не надрукується
і цей теж */
console.log('Hello, world!');
```

### Літерали
Усі програми працюють із даними, наприклад, числами або рядками. Для запису даних використовуються літерали.

Числовий літерал складається з цифр, перед цифрами може стояти знак `-`, якщо число від'ємне, а між цілою та дробовою частинами може стояти `.` Числа пишуться без лапок: `42`, `-5`, `3.14`.

Літерал рядка завжди пишеться в лапках: `'Misha'`, `'Hello, world!'`.

### Змінні
Змінні використовуються для зберігання даних. По суті, це коробка з назвою, у яку ми можемо щось покласти, а потім дістати та використовувати далі у своїй програмі.

Щоб записати у змінну значення, використовується оператор присвоювання — `=`.

У JavaScript ти можеш створювати змінні за допомогою цих двох ключових слів: `let` та `const`.

Розглянемо приклади:
```css
// цій змінній пізніше можна присвоїти інше значення
let age = 37;

// запишемо нове значення
age = 38;

console.log(age); // ми побачимо 38

// цій змінній присвоїти інше значення не вийде
const name = 'Misha';

name = 'Petya'; // видасть помилку
```

**Зверни увагу:** назва змінної має пояснювати, які дані будуть в ній зберігатися. Тому напиши одне або декілька слів англійською мовою, перше слово з маленької літери, а решту — з великої. Також інколи використовують цифри (всередині назви) та символи `_` та `$`.

Наприклад:
```css
// хороша назва
const cookiePrice = 15;

// погані назви
const cookie_price = 15; // в деяких інших мовах так пишуть, але в Javascript так не прийнято 
const priceof1cake = 25; // важко бачити межі слів
const value = 15; // бо не пояснює, що за value
```

### Вирази
В програмі ми часто щось обчислюємо. Для цього змінні та літерали поєднуються за допомогою операторів. Наприклад:

```css
const radius = 10;
const circleSquare = 3.14 * radius * radius;

console.log(circleSquare); // 314
```

Щоб обчислити значення виразу, потрібно:

Підставити замість змінних їх значення.
Виконати вказані дії.
Наприклад:
```css
// оголосимо змінну cookiePrice і присвоїмо їй значення 15
const cookiePrice = 15;

console.log(20 - cookiePrice); // 5
```

Розглянемо ще один приклад:
```css
const price = 25;
const amount = 5;
const discount = 10;
const result = price * amount — discount;

console.log(result); // 115
```
