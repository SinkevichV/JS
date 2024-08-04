/*Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль 
(sum - функция сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна 
вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно. */
let a = Number(prompt("Введите число а:"));
let b = Number(prompt("Введите число b:"));

let sum = (a, b)=> a+b;
let dif = (a, b)=> (a>b || a===b)? a - b : b - a;
let mul = (a, b)=> a*b;
let div = (a, b)=> (b===0)? console.log("на ноль делить нельзя") : a/b;


console.log(sum(a, b));
console.log(dif(a, b));
console.log(mul(a, b));
console.log(div(a, b));