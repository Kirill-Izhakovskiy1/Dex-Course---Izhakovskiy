// 1) Что выведет код ниже?

// alert( null || 2 || undefined );

//  Решение:

// Будет выведено 2, так как это первое значение, которое равняется true.

// 2) Что выведет код ниже?

// alert( alert(1) || 2 || alert(3) );

// Решение:  Будет выведено 1, затем 2
// 3) Что выведет код ниже?

// alert( 1 && null && 2 );

// Выведется ли alert?

//  if ("0") {
    // alert( 'Привет' );
//   }

// Ответ: да, так как любое значение строки кроме пустой, является true в js

/* 4) Что выведет код ниже?

alert( alert(1) && alert(2) );
// Выведет 1, а потом undefined
   
   5) Что выведет код ниже?

alert( null || 2 && 3 || 4 );
Ответ: 3, так, как приоритет && выше чем ||, а из 2 и 3 результат 3 

   6) Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

«Включительно» означает, что значение переменной age может быть равно 14 или 90.*/

//  if (age >= 14 && age <= 90) 

// 7) Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

// if (age < 14 && age > 90)
// if (!(age>= 14 && age<=90))

/* 8) Какие из перечисленных ниже alert выполнятся?

Какие конкретно значения будут результатами выражений в условиях if(...)?
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

Выполнятся первое и третье, так как во втором -1 && 0 приводится к нулю и в логическом контексте равняется false*/
/* 9) Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».
Блок-схема: */

let user = prompt('Кто это?', '' )
if (user == 'Админ') {
    let password = prompt('Пароль?', '');
    if ( password == 'Я главный') {
        alert ('Здравствуйте') 
    } else if (password = '' || null) {
        alert ('Отменено')
    }
    else {(alert('Неверный пароль'))} }
    else if (user == '' || user ==null) {
        alert ('Отменено')
 } else {alert ('Я вас не знаю')}

