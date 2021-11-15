export const getUsersAddress = (data) => {
    // Отфильтровываем только те объекты в названиях улиц которых есть число
    let filterSteetbyNumber = data.filter(i => parseInt(i.address.street));
    // Определяем имена людей, у которых улица проживания включает определенное число.
    let allPeopleinMassiv = filterSteetbyNumber.map(i => i.name );
    // Определяем названия улиц, в именах которыъх присутствует число.
    let allStreetsWithNmber = filterSteetbyNumber.map(i => i.address.street);
    return `По адресу ${allStreetsWithNmber} живут пользователи ${allPeopleinMassiv}`
  };


  export const getDoubleUserBonuses = (data) => {
    //   определяем массив чисел равных бонусам, кажого из людей.
let bonuses = data.map(i => Object.values(i.userBonuses));
// определяем только имена каждого из людей.
let users = data.map(i => i.user)

// Находим сумму всех бонусов, всех пользователей.
let sum = 0;
bonuses.forEach(element => {
    sum += element.reduce((a,b) => a+b, 0)
});
return `Пользователи ${users} получат соответственно ${2*sum} бонусов`
};