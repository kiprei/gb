function task21() {
    const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    const arr2 = [1, 2, 3, 4, 5, 6, 7];

    const week = {};
    for (let i = 0; i < 7; i++) {
        week[arr2[i]] = arr1[i];
    }

    console.log(week);
}

function task22() {
    const obj = { x: 1, y: 2, z: 3 };

    for (const key in obj) {
        obj[key] = Math.pow(obj[key], 2);
    }

    console.log(obj);
}

function task3() {
    const obj = {
        key1: {
            key1: 1,
            key2: 2,
            key3: 3,
        },
        key2: {
            key1: 4,
            key2: 5,
            key3: 6,
        },
        key3: {
            key1: 7,
            key2: 8,
            key3: 9,
        },
    }

    console.log(
        Object.values(obj)
            .map(item => Object.values(item).reduce((sum, a) => sum + a, 0))
            .reduce((partialSum, a) => partialSum + a, 0)
    );
}


function task4() {
    const riddles =
    {
        question: 'Зимой и летом одним цветом?',
        answer: 'елка',
        askQustion: function (userAnswer) {
            console.log(
                this.answer != userAnswer.toLowerCase()
                    ? 'Вы проиграли'
                    : 'Молодец');
        }
    };

    riddles.askQustion(prompt(riddles.question));
}

// execute(task21, '2.1');
// execute(task22, '2.2');
execute(task4, '3');