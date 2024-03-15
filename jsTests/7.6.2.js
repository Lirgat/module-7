/*
Задание 7.6.2
Есть массив:

    const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
Создайте новый массив и запишите в него только уникальные значения из массива arr. Выведите получившийся массив в консоль.

Входящие значения:

    const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
Выходные данные:

    [1, 2, 3, 5, 4, 'they', 'don\'t', 'know', 'that', 'we'];
*/

const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
const refactedArr = Array.from(new Set(arr))

console.log(refactedArr)