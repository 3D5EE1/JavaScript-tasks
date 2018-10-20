// Напишите простой калькулятор, который считывает с пользовательского ввода три строки: первое число, второе число и операцию,
// после чего применяет операцию к введённым числам ("первое число" "операция" "второе число") и выводит результат на экран.
// 
// Поддерживаемые операции: +, -, /, *, mod, pow, div, где
// mod — это взятие остатка от деления,
// pow — возведение в степень,
// div — целочисленное деление.
// 
// Если выполняется деление и второе число равно 0, необходимо выводить строку "Деление на 0!".
// 
// Обратите внимание, что на вход программе приходят вещественные числа.


var a = Number(prompt("введите первое число"));
var b = Number(prompt("введите второе число"));
var c = prompt("выберите действие: +, -, *, /, mod, pow, div");

switch (c) {
    case "+" : document.write(a + b);
    break;
    case "-" : document.write(a - b);
    break;
    case "*" : document.write(a * b);
    break;
    case "/" : document.write(a / b);
    break;
    case "mod" : document.write(a % b);
    break;
    case "pow" : document.write(a ** b);
    break;
    case "div" : document.write(Math.floor(a / b));
    break;
    default : document.write("неверная операция");
    break;
}


