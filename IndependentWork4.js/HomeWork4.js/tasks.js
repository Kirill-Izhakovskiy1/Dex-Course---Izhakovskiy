//TODO: Напишите функцию счётчик вызовов, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, кол-во вызовов
let count = 0;
export const counter = (name, fn) => {
count++;
console.log(count);
return fn;
};

//TODO: Напишите функцию логгер, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, её параметры результат и название
export const logger = (name, fn) => {
    return function (...rest) {
        console.log(` ${name}:`, ...rest);
        return fn.apply(this);
    };
};

//TODO: Напишите функцию каррирования, должна принимать функцию, а возвращать функцию
// Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c)
// Должна работать для любого кол-ва аргументов
export const curry  = fn => {
  const testCurry = (...args) => {
    return x => {
      if (!x) {
        return args.reduce((acc, a) => {
          return fn.call(fn, acc, a)
        }, 0);
      }
      return testCurry(...args, x);
    };
  };
  return testCurry();
};

const iSum = curry((x, y) => x + y);
console.log(iSum(1)(3)(4)(2)());

