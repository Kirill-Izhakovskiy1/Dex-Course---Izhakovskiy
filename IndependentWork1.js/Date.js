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


/* Задача 1
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

Для вывода используйте alert. */

let dateFebruary = new Date (2012, 2, 20, 3, 12 )
alert(dateFebruary)

/* Задача 2 Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ" */

function getWeekDay(date) {
let days = ['Вс', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
return days[date.getDay()]
}

/* Задача 3 В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2 */

function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
      day = 7;
    }
  
    return day;
  }

  /* Задача 4
  Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях: */

function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
  }



  /* Задача 5 Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль). */

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate()
}

/* Задача 6 Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты. */

function getSecondsToday() {
    let thismoment = new Date();
    let StartToday = new Date(thismoment.getFullYear(), thismoment.getMonth(), thismoment.getDay());
    let difference = +StartToday - +thismoment;
    return Math.round(difference / 1000);
}

