/* 1) if ("0") {
  alert( 'Привет' );
}

Да, так как любая строка, кроме пустой является true 

2) Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»


*/
let nameJS = prompt('„Какое «официальное» название JavaScript?“', '')
if (nameJS == "«ECMAScript»") {
  alert("Верно")
} else {
  alert("Не знаете? ECMAScript!")
}

// 3) Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

let number15 = +prompt('');

if ( number15 > 0) {
  alert (1);
} 
if (number15 == 0) {
  alert(0);
}
if (number15 < 0) {
  alert(-1);
}
/* 4) Перепишите конструкцию if с использованием условного оператора '?':

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
} */
let result;
(a + b < 4) ? result = 'Мало' : result = "Много"

/* let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
} */

let message;
let login;
login == 'Сотрудник' ? message = 'Привет' : login == 'Директор' 
? message = "Здравствуйте" : login == '' 
? message = "Нет логина" : message = '';