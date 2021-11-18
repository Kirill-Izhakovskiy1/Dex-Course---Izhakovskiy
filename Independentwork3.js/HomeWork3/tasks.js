export const processCartData = (cartData) => {
    //TODO: Нужно добавить поле discount(oldPrice - price)
    // убрать поле oldPrice
  
    return cartData.map((i) => {
      i["discount"] = i.oldPrice - i.price;
      i.oldPrice = null;
      return i;
    });
  };
  
  export const makeCartItemCopy = (cartItem) => {
    //TODO: сделать копию элемента "Пицца с анчоусами"
    // После увеличить кол-во добавленного ингредиента
    if (cartItem.name !== "Пицца с анчоусами") return cartItem;
    let copyItem = Object.assign({}, cartItem);
    copyItem.addedIngredients.forEach((i) => (i.count += 1));
    return copyItem;
  };
  
  export const calcSum = (cartData) => {
    //TODO: посчитать суммы по типам товаров и их цены
    // let countmap = new Map();
    // let sumMap = new Map();
    // for ( let i = 0; i < cartData.length; i++) {
  
    // }
    return {
      total: {
        count: cartData.length,
        sum: cartData.map((i) => i.price).reduce((a, b) => a + b, 0)
      },
      water: {
        count: cartData.filter((i) => i.type === "water").length,
        sum: cartData
          .filter((i) => i.type === "water")
          .map((i) => i.price)
          .reduce((a, b) => a + b, 0)
      },
      pizza: {
        count: cartData.filter((i) => i.type === "pizza").length,
        sum: cartData
          .filter((i) => i.type === "pizza")
          .map((i) => i.price)
          .reduce((a, b) => a + b, 0)
      },
      other: {
        count: cartData.filter((i) => i.type === "other").length,
        sum: cartData
          .filter((i) => i.type === "other")
          .map((i) => i.price)
          .reduce((a, b) => a + b, 0)
      }
    };
  };
  
  export const getCartItemsByDate = (cartData, date) => {
    //TODO: выбрать покупки сделанные за выбранную дату
    if (date === "") {
      return cartData;
    }
    return cartData.filter((i) => i.date === date);
  };
  
  export const repeatOrder = (cartData, date) => {
    //TODO: нужно повторить заказ за выбранную дату
    // дублиовать соответствующие элементы
    // поставить в начало спиcка
    // дату текущую
    // поменять id на уникальный
    /* let copy =[];
   let filtereData = cartData.filter(i => i.date === date)
   let newclone = {}
   filtereData.map(i => {for (let b in i) {
     newclone[b] = i[b]
   }})
   return cartData */
//    let newclone = {}
    // let copy =[];
   let filtereData = cartData.filter(i => i.date === date)
   let copeMassiv = filtereData.map(i => Object.assign({},i))
   let copeMassivwithuniqueID= copeMassiv.map(i=> i.id === Math.floor(Math.random() * 2000))
   return cartData.unshift(...copeMassivwithuniqueID);
  };
  
  export const addItem = (cartData, item) => {
    //TODO: увеличить кол-во товара в полученном элементе
    item.count += 1;
    return cartData;
  };
  
  export const checkPromo = (cartData) => {
    //TODO: нужно проверить корзина подходит под правила промоакции
    // проверить что суммарно в корзине больше 1000р
    // что есть пункт больше чем на 500р
    // что нет скидочных товаров
    return {
      total: cartData.map((i) => i.price).reduce((a, b) => a + b, 0),
      oneBigPosition: cartData.filter((i) => i.price > 500).length,
      notDiscounted: cartData.filter((i) => i.discount === null)
    };
  };