/*
Задание 7.6.5
Есть объект obj. В одном из ключей объекта — массив. Добавьте в новый массив arrValues значения всех ключей объекта. Если значение — массив, добавьте каждый элемент в массив arrValues.

Выведите получившийся массив в консоль.

Входные данные:

    const obj = {
        some: 'some',
        dom: 'text',
        arr: [1, 2, 3, 4, 5],
        tom: 'there'
    };
Выходные данные: ["some", "text", 1, 2, 3, 4, 5, "there"]
*/

const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
let arrValues = [];
for(let key in obj){
  if(Array.isArray(obj[key])){
    arrValues = arrValues.concat(obj[key])
  } else {
      arrValues.push(obj[key])
    }
}

console.log(arrValues)