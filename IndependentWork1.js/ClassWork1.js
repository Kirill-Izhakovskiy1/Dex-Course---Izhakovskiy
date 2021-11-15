export const getHolidayPrizes = (name, date, salary) => {
    let thisDay = new Date();
    let nameDate = new Date(name);
  
    if (
      thisDay.getDay() === nameDate.getDay() &&
      thisDay.getMonth() === nameDate.getMonth()
    ) {
      let day = nameDate.getDay();
      let month = nameDate.getMonth() + 1;
      let prime = Math.ceil(+salary / 10 + day * month);
      return `У ${name} сегодня праздник, его премия составляет ${prime} рублей`;
    }
  };