/* Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true

Ответ: Так, как instanceof не учитывает саму функцию при проверке, а только prototype, а прототипы равны, так как были приравнены в 6 строчке.*/