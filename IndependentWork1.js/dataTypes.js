// Суещствуют 8 основных типов данных: Number, BigInt, Stirng, Object, Null, Undefined, Symboll, Boolean.
// 

let Boolean1 = Boolean('0');
// Обекты хранят в себе коллекции данны, в виде ключ значение. Также в одном ключе в виде значений могут находиться другие ключи, которые тоже в свою очередь имеют значения.
let Objeckt1 = {
    name: "Alexander",
    Age: 32
}

let string1 = "Строка"
// Также существуют обратные кавычки которые позволяют всталять выражение в строку. 
let backQuates = `Здесь вставляется выражение ${Objeckt1.name} `
// Null и Undefind могут показаться похожими типами данных, однако они означают не одно и тоже, таким образом 
// Null обозначает несуществование, пусто или что значение не известно, когда undefind в свою очередь означает, что переменная определена, но значение ей еще не присвоено, поэтому и переводится как "не найдено"
let undefind1
console.log(undefind1) 
// Undefined
let null1 = null
console.log(null1)

let Number1 = 333;
console.log(typeof Number1);
// Number

// Bigint это встроенный объект позволяющий выводить числа большие 2 * 53 - 1
const theBiggestInt = 9007199254740991n
const alsoHuge = BigInt(9007199254740991);

/* 1) Что выведет этот скрипт?

let name = "Ilya"; 

alert( `hello ${1}` ); // ?   --- hello 1

alert( `hello ${"name"}` ); // ?  --- hello name

alert( `hello ${name}` ); // ? --- hello Ilya   */ 


