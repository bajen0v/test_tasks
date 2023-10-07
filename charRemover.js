// CHAR REMOVER Написать функцию, на вход которой приходит строка, состоящая из нескольких слов. Слова разделены пробельными символами (пробел, табуляция) и знаками препинания (?!:;,.). Нужно вернуть строку, в которой будут удалены все символы, повторяющиеся хоть в одном из слов более одного раза. Игнорировать регистр: СЛОВО = слово
// Пример:
// Ввод: У попа была собака Результат: У о был собк
// Примечание:
// Не использовать регулярные выражения.


let str = 'У!?,.  попа была  !!,. собака'

function charRemover(string) {

  let stringArr = string.split('') // array of char
  const punctuationFilter = stringArr.filter(el => (el === ' ') || el.toLowerCase() !== el.toUpperCase())
  let arrayOfWodrds = punctuationFilter.join('').split(' ').filter(el => el)  
  
  
  let res = arrayOfWodrds.join(' ')
    // 
  
  for(let word of arrayOfWodrds){
    for(let i = 0; i < word.length; i++) {
      for(let k = word.length-1; k > i; k--) {
        if(word[i] === word[k]) {
          res = res.replaceAll(word[k], '')
        }
       }
      }
   }
return res
}

const charRemove = charRemover(str)
console.log(charRemove)
