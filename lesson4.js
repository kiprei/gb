let task1 = () => {
    let num1 = Number(prompt('Введите первое число'));
    let num2 = Number(prompt('Введите второе число'));

    if (isNaN(num1) || isNaN(num2))
        alert('Ошибка ввода, одно или оба из введенных значений не является числом');

    if (num1 > 1)
        alert('Первое число не соответствует условию "<= 1"');
    if (num2 < 3)
        alert('Второе число не соответствует условию ">= 3"');
};

let task2 = () => {
    let test = true;
    test === true ? console.log('+++') : console.log('---')
};

let task3 = () => {
    let day = random(1, 31);
    let decade = Math.min(Math.ceil(day / 10), 3);
    console.log(`День ${day} попадает в ${(decade === 1 ? "первую" : decade === 2 ? "вторую" : "третью")} декаду`);
};

let task4 = () => {
    let offerNumber = random(1, 10000000);
    let number = parseInt(prompt('Введите число', offerNumber));
    let hundreds = Math.floor((number % 1000) / 100);
    let tens = Math.floor((number % 100) / 10);
    let units = number % 10;
    console.log(`В числе ${number} количество сотен: ${hundreds}; десятков: ${tens}; единиц ${units}`);
};

task1();
task2();
task3();
task4();

function random(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}