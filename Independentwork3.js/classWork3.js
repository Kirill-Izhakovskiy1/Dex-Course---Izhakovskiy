// Создать функцию обёртку
// которая в начало каждой строки будет добавлять слово "Hello"
function funcContainer (str1) {
    return function(params) {
      return str1 + "" + params
    }
  }
   const funcChild = funcContainer("Hello") 
  
  // console.log(funcChild("word"));
  // console.log(funcChild("Ben"));
  
  // Создать функцию, которая будет выполняться как func(1)(2)(3)
  
  // console.log("funcСurrying(1)(3)(4) ", funcСurrying(1)(3)(4));
  function funcCurrying(num1) {
    return function (num2) {
      return function (num3) {
        return (num1 + num2 + num3)
      }
    }
  }
  let a;
  let b;
  let c;

  // Создать функцию, которая будет выполняться
  // при вызове func(1,2,3), func(1,2)(3),func(1)(2,3), func(1)(2)(3)
  // и возвращать их сумму
  function funcdifferent(...rest) {
    if (rest.length === 3) {
      return rest.reduce((a,b) => a+b, 0)
    } else {
      return (...rest2) => funcdifferent(...rest, ...rest2)
    }
  }
   console.log("funcСurryingArgs(1,3,4) ", funcdifferent(1, 3, 4));
   console.log("funcСurryingArgs(1,3)(4) ", funcdifferent(1, 3)(4));
   console.log("funcСurryingArgs(1)(3,4) ", funcdifferent(1)(3, 4));
   console.log("funcСurryingArgs(1)(3)(4) ", funcdifferent(1)(3)(4));
  
  // Создать функцию обёртку
  // которая будет принимать количество аргументов
  // и считать сумму передаваемых чисел , после того как кол-во аргументов
  // будет равнятся передаваемому значению
  function funcСurryingCount(num) {
    return function funcСurryingArgs(...rest) {
      if (rest.length >= num) {
        return rest.slice(0, 3).reduce((a, b) => a + b, 0);
      } else {
        return (...rest2) => funcСurryingArgs(...rest, ...rest2);
      }
    };
  }
  
  const funcCurrent = funcСurryingCount(3);
  
   console.log("funcCurrent(1,3,4) ", funcCurrent(1, 3, 4));
   console.log("funcCurrent(1,3)(4) ", funcCurrent(1, 3)(4));
   console.log("funcCurrent(1)(3,4) ", funcCurrent(1)(3, 4));
   console.log("funcCurrent(1)(3)(4) ", funcCurrent(1)(3)(4));
  
  // const func1 = () => {
  //   console.log(func2());
  // };
  
  // const func2 = () => {
  //   console.trace();
  //   return "func2!!!!!!!";
  // };
  
  // func1();
  