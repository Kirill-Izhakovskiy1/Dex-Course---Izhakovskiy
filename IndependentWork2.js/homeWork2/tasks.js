export const sum = (f, s) => {
    //TODO: Должны складываться только строки и числа
    // Постарайтесь сложить как можно больше пар и обойти NaN случаи
    let a = parseFloat(f);
    let b = parseFloat(s)
    a = a ? a: 0;
    b = b ? b :0;
    return a + b
  };
  
  export const showPrice = (price, discount) => {
    const discountedPrice = price - (price * discount) / 100;
  
    //TODO: Привести цену к виду: 10.00 р.
    // округлять до копеек в сторону магазина
    return Math.ceil(discountedPrice);
  };
  
  export const findSuccess = (bankResponse) => {
    //TODO: Проверьте что в строке есть 'Success' без учёта регистра
    const bankResult = [
      "purchaseFailed",
      "refusedRespone",
      "insufficientFunds",
      "Success",
      "Not Success",
      "Some success response",
      "SomeSuccessResponse"
    ];
    function s (b) {
      return b.toLowerCase().includes('Success'.toLowerCase()) ? "Yes" : "No"; }
    console.log(s(String(bankResult)));
  
  };
  
  export const dateToString = (date) => {
    //TODO: Преобразовать дату к Вчера/Сегодня/Завтра или год:месяц:день
    let acceptedDate = new Date(date);
    let todayDate = new Date;
 let sumOfacceptedDate = acceptedDate.getFullYear() + acceptedDate.getMonth() + acceptedDate.getDate();
 let sumoftodayDate = todayDate.getDate() + todayDate.getMonth() + todayDate.getDate() 
sumOfacceptedDate == sumoftodayDate ? "Сегодня": sumOfacceptedDate + 1 == sumoftodayDate ? "Завтра" : sumOfacceptedDate - 1 == sumoftodayDate ? 'Вчера' :
`${acceptedDate.getFullYear()}:${acceptedDate.getMonth() + 1}:${acceptedDate.getDate()}`};


 let forSorting = [
    "ёж",
    "язь",
    "Евгений",
    "як",
    "август",
    "Ярик",
    "Анна",
    "йод"
  ];
  export const sort = (data) => {
    //TODO: Отсортируйте массив строк по алфавиту
   
    return data.sort();
    
  };
  alert(sort(forSorting));
  
  