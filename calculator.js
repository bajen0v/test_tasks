// Написать функцию для подсчёта результата выражения. На вход приходит строка с арифметическим выражением. Внутри выражения записываются вещественные числа (в качестве разделителя целой и дробной части используется точка), разделённые математическими операторами (+ − * /). Между числом и оператором может стоять пробел. В конце строки стоит знак «равно».
// Пример:
// 3.5 +4*10-5.3 /5 =
// Результат выражения вычисляется последовательно. Приоритет операций не учитывается. Результат выводить с точностью до 2 знаков после запятой.
// Примечания:
// 1. Для вычисления нельзя пользоваться функцией eval().
// 2. Для разбора выражения использовать регулярные выражения.

let input = '3.5 +4*10-5.3 /5 ='
const numbersPattern = /\d*[.]\d{1,2}|\d{1,2}/g
const arithmeticsPattern = /[=+\/*-]/g;

const actions = {
  '+': (prev, cur) => prev + cur,
  '-': (prev, cur) => prev - cur,
  '*': (prev, cur) => prev * cur,
  '/': (prev, cur) => prev / cur,
}

function calcCreator(
  numbersPattern,
  arithmeticsPattern,
  actions
){
  return function(str){
    const numbers = str.match(numbersPattern);
    const arithmeticActions = str.match(arithmeticsPattern)
    const result = numbers.reduce((prev,cur,index) => {
      let arithmeticAction = arithmeticActions[index-1]
      cur = Number(cur)
      prev = Number(prev)
  
      return actions[arithmeticAction](prev,cur)
    })
    return result
  }
}

const calculator = calcCreator(
  numbersPattern,
  arithmeticsPattern,
  actions
)

console.log(calculator(input));