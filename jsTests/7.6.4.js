/*
Задание 7.6.4
С помощью цикла нарисуйте в консоли заполненное поле для игры «Крестики-нолики». Выведите результат в консоль.

Выходные данные:
x o x
o x o
x o x
*/

for(let i = 0; i < 3; i++){
    let row = '';
    for(let k = 0; k < 3; k++){
        if((i + k) % 2 === 0){
            row += 'x '
        } else {
            row += 'o '
        }
    }
    console.log(row.trim());
}