console.log('Здесь выводится текст')

// Также существует ряд методов, которые можно вызывать в консоле:

let object = {
    name: "Kirill",
    age: 23
}

console.dir(object) // свойства объекта
;

let user17 ='';

function count() {
    console.count(user17)
    return "hello" + user17
}

user17 = 'Bob'
count();
user17 = 'Alice'
count();
count();
console.count("Alice") /* //"bob: 1"
                        "alice: 1"
                         "alice: 2"
                        //   "alice: 3" */

console.countReset() // Обнуляет значение счётчика с заданным значением.