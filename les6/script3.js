/*Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел */

let num1 = Number(prompt("Введите первое число"));
let num2 = Number(prompt("Введите второе число"));
let num3 = Number(prompt("Введите третье число"));

function maxNumber(num1, num2, num3) {
    return console.log(`Максимальное число: ${Math.max(num1, num2, num3)}`);
}

maxNumber(num1, num2, num3);