import { compareText } from "./data"; 
 
// Написать 2 функции, 
// первая обработает ответ от compareText (положительный и отрицательный) 
// TODO: первая функция использует then и catch 
const getData = (str) => { 
  return compareText(str) 
    .then(responce => { 
      // console.log(responce) 
    }) 
    .catch(err =>{   
    throw new Error() 
    } 
    ) 
}; 
// TODO: вторая использует try и catch 
// TODO: Если ответ положительный вывести в консоль: "Success: ..." 
// TODO: Если ответ отрицательный вывести в консоль: "Error: ..." (тескт ошибки) 
const processingData = async (str) => { 
  try  
  {await getData(str)  
    console.log("Success") 
  }  
  catch(err) { 
   console.log("Error:", err) 
  } 
}; 
processingData("короткий текст"); 
processingData("длинный тексттттттттттт"); 
 
// Используя конструкции then catch 
// к положительному ответу добавьте " :)" 
// к ответу с ошибкой добавьте " :(" 
// Если длина ответа меньше 20 символов, то нужно добавить "(" или ")" в зависимости от ответа, 
// скобочки нужно добавлять пока длинна не станет равна 20 
// TODO: на каждое действи должна быть отдельная конструкция then или catch 
// Например первый then для добавления " :)", второй для подсчёта количества символов и добавления недостающих 
const getResponse = async (str) => { 
  return compareText(str) 
    .then(response =>  {return str + " :)"}) 
    .then(response =>  { 
      while (response.length < 20) { 
        response += ")" 
      } 
      return response 
    }) 
    .catch(err => { 
      str += " :(" 
      while (str.length < 20 ) { 
        str += "(" 
      } 
      return str; 
    }) 
} 
 
getResponse("короткий текст").then(response => console.log(response)); 
getResponse("Длинный текстттт").then(response => console.log(response)); 
 
// Написать функцию, которая принимает url и выводит в консоль ответ 
// TODO: обработать ошибки и вывести в консоль "Ошибка" 
// TODO: ошибка если тстатус меньше 200 и больше 299 
const getDataFromAPI = async (url) => { 
 
  try { 
    let response = await fetch(url); 
     
    if (response.status < 200 || response.status >299) { 
        console.log("Ошибка1 ", response.status) 
    } 
    else { 
      console.log(await response.json()) 
    } 
     
  } catch(err) { 
    console.log("Ошибка1 ") 
        
  } 
}; 
 
getDataFromAPI("https://randomuser.me/api"); 
getDataFromAPI("https://randomuser123.me/api"); 
getDataFromAPI("https://randomuser.me/api123");