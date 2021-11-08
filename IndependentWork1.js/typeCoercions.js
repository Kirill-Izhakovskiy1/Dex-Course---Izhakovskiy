// Строковое преобразование.
let value = true;
alert(typeof value); // boolean

let value1 = String(value); // теперь value это строка "true"
alert(typeof value); // string 

// Численное преобразование
// 1) Происходит при математических операциях между числами, записанными как строки:
// 2) Также можно использовать функцию Number(value), для преобразования

let string =  "123";
alert(typeof string); // String

let number = Number(string);
alert(typeof number) // Number

// Однако если строка не может быть приведена к числу то мы поучаем специальное значение NaN;
let age = Number("Любая строка вместо числа");
alert(typeof Number); // Number

alert( Number(null)) // 0;
alert(Number('123')) //123;
alert (Number('123z')) // NaN;
alert(Number(true)) // 1;
alert(Number(false)) // 0;

// Логическое преобразование
alert(Boolean(1)) // true
alert(Boolean(0)) // true
alert(Boolean('String')) // true
alert(Boolean('')) // false