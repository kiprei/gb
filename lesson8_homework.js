function task1() {
    for (let i = 0; i < 11; i++) {
        console.log(`${i} - это ${(i === 0 ? 'ноль' : i % 2 === 0 ? 'четное' : 'нечетное')}`);
    }
}

function task2() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    arr.splice(3, 2);
    console.log(arr);
}

function task3() {
    const arr = randomArray(5, 0, 9);
    console.log(arr);

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let min = arr.sort()[0];
    let hasThree = false;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 3)
        {
            hasThree = true;
            break;
        }
    }

    console.log('Сумма: ' + sum);
    console.log('Минимальное число: ' + min);
    console.log('Тройки: ' + (hasThree ? 'есть' : 'нет'));
}

function task4() {
for (let i = 0; i < 21; i++) {
    let str = '';
    for (let j = 0; j < i; str+='X', j++);
    console.log(str);
    }
}

execute(task1, '1');
execute(task2, '2');
execute(task3, '3');
execute(task4, '4');
