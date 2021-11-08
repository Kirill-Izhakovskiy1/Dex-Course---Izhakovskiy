let DateNow =  new Date();
console.log(DateNow);

let Date1970 = new Date(0)
// За ноль принимается дата 01.01.1970
// Для того что бы получить дату ранее 01.01.1970 необхоимо убавлять определенное кличество часовю.
let Date1969 = new Date(-24 * 3600 * 1000)
// Также можно устанавливать дату через строку, в следующем виде:
let dateString = new Date("2021-11-06")
console.log(dateString);
// Объект Date также предусматривает указание времени вплоть то мс, в следующем порядке
// new Date(year, month, date, hours, minutes, seconds, ms)
let detaleDate =  new Date(2010, 0, 1, 0, 0, 0, 0);
console.log(detaleDate)
// 1 Jan 2010, 00:00:00
// Также существуют методы получения деталей компонента

let dateHour = new Date();
console.log(dateHour.getHours());
// Позволяет выводить данный час в конкретном часовом поясе.
// Также есть методы позвляющие выводить данный год: 
console.log(dateHour.getFullYear());
// данный месяц:
console.log(dateHour.getMonth());
// данный день:
console.log(dateHour.getDate());
// данную минуту:
console.log(dateHour.getMinutes);
// данную секунду:
console.log(dateHour.getSeconds());
// данную милисекунду:
console.log(dateHour.getMilliseconds())
// данный день недели:
console.log(dateHour.getDate())


let today = new Date();

today.setHours(0);
alert(today); // выводится сегодняшняя дата, но значение часа будет 0

today.setHours(0, 0, 0, 0);
alert(today); // также выводится сегодняшняя дата, но время будет ровно 00:00:00.