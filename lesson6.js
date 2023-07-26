const powCube = number => Math.pow(number, 3);
const getNdfl = salary => salary * 0.13;
const getMax = (num1, num2, num3) => Math.max(num1, num2, num3);

const multiply = (num1, num2) => num1 * num2;
const substract = (num1, num2) => num1 >= num2 ? num1 - num2 : num2 - num1;
const summ = (num1, num2) => num1 + num2;
const divide = (num1, num2) => num1 / num2;


function task1() {
    console.log(powCube(2) + powCube(3));
}

function task2() {
    let salary = Number(prompt('Введите размер вашей заработной платы'));
    if (isNaN(salary)) {
        alert('Ошибка ввода, введенное значение не является числом');
        return;
    }

    if (salary < 0) {
        alert('Заработная плата не может быть меньше 0');
        return;
    }

    console.log('Размер заработной платы за вычетом налогов равен ' + (salary - (getNdfl(salary))));
}

function task3() {
    let num1 = Number(prompt('Введите первое число'));
    let num2 = Number(prompt('Введите второе число'));
    let num3 = Number(prompt('Введите третье число'));

    console.log('Максимальное число: ' + getMax(num1, num2, num3));
}

function task4() {
    let num1 = random(-10, 10);
    let num2 = random(-10, 10);

    console.log('Сложение: ' + summ(num1, num2));
    console.log('Разность: ' + substract(num1, num2));
    console.log('Умножение: ' + multiply(num1, num2));
    console.log('Деление: ' + divide(num1, num2));
}

execute(task1, '1');
execute(task2, '2');
execute(task3, '3');
execute(task4, '4');
