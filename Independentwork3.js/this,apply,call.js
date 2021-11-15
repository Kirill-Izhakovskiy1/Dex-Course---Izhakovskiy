/* Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

function f(x) {
  alert(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».

В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.


 */
function delay3(f, ms) {

  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };

}

/* Есть функция sum, которая суммирует все элементы массива:

function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

alert( sum([1, 2, 3]) ); // 6 (=1+2+3)
Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:

function sumArgs() {
  /* ваш код */
// }

// alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива
// Для решения примените метод reduce к arguments, используя call, apply или одалживание метода.

// P.S. Функция sum вам не понадобится, она приведена в качестве примера использования reduce для похожей задачи. */function sumArgs() {
    
function sumArgs3() {return [].reduce.call(arguments, function(a, b) {
      return a + b;
    });
}