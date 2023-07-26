function task11() {
    const arr = [1, 2, 3];

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function task12() {
    var n = random();
    const arr = [];

    for (let i = 0; i < n - 1; i++) {
        arr.push(random(-100, 100));
    }

    console.log(arr.length);
}

function task13() {
    const arr = ['a', 'b', 'c'];

    for (let i = 0; i < arr.length; i++) {
        arr[i] = i + 1;
    }

    console.log(arr.length);
}

function task21() {
    const arr = [1, 2, 3];

    for (let i = 0; i < arr.length; i++) {
        arr[i]++;
    }
    console.log(arr);
}

function task22() {
    const arr = [];
    arr[3] = 'a';
    arr[8] = 'b';

    console.log(arr.length);
}

function task23() {
    const arr = [1, 2, 3];
    arr.push(4, 5);
    arr.pop();
    arr.pop();

    console.log(arr.length);
}

function task31(start, end) {
    for (let i = start; i < end; i++) {
        console.log(i);
    }
}

function task32(start, end) {
    for (let i = start; i < end; i+=2) {
        console.log(i);
    }
}

function task33(from, to) {
    for (let i = from; i >= to; i--) {
        console.log(i);
    }
}

function task34(end) {
    let num = random();
    console.log(`Число: ${num};`);
    let i = 0;
    while (num <= end) {
        num *= 3;
        i++;
    }

    console.log(`Число: ${num}; Количество итераций: ${i}`);

}

function task41(lower, upper) {
    const arr = [2, 5, 9, 15, 1, 4];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > lower && arr[i] < upper) {
            console.log(arr[i]);
        }
    }
}

function task42(start, end) {
    let sum = 0;
    for (let i = start; i < end; i++) {
        sum += (i % 2 === 0 ? i : 0);
    }

    console.log(sum);
}

function task43() {
    const arr = randomArray(6, 1, 10);
    let sum = 0;
    for (let i = 0; i < arr.length; sum+=arr[i++]);
    console.log(sum);
}

function task44(start, end) {
    let string = '-';
    for (let i = start; i <= end; i++) {
        string += `${i}-`;
    }

    console.log(string);

}

function task45(stopNumber) {
    const arr = randomArray(7, 1, 10);
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] === stopNumber) {
            break;
        }

        console.log(arr[i]);
    }
}

function task51() {
    const arr = randomArray();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] = Math.pow(arr[i], 2);
        }

        if (arr[i] % 3 === 0) {
            arr[i] = Math.pow(arr[i], 3);
        }
    }

    console.log(arr);
}

function task52() {
    const arr = [[1, 2, 3], [4, 5, 6]];
    let str = '[';
    let num = 1;
    for (let i = 0; i <= 1; i++) {
        str += `[`;
        for (let j = 1; j <= 3; j++) {
            str += (num++) + ',';
        }
        str += `],`;
    }

    str += ']';
    console.log(str);
}

function task53() {
    const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
    let num = 0;
    for (let i = 0; i < arr.length; arr[i++] === 3 ? num++ : 0);
    console.log(num);
}

function task54() {
    const arr = [1, 2, 3, 4, 5];
    arr.splice(1, 2);

    console.log(arr);

}

// execute(task11, '1.1');
// execute(task12, '1.2');
// execute(task13, '1.3');
// execute(task21, '2.1');
// execute(task22, '2.2');
// execute(task23, '2.3');

// execute(task31(11, 34), '3.1');
// execute(task32(1, 100), '3.2');
// execute(task33(100, 0), '3.3');
// execute(task34(1000), '3.4');

// execute(task41(3, 10), '4.1');
// execute(task42(2, 100), '4.2');
// execute(task43(), '4.3');
// execute(task44(1, 9), '4.4');
// execute(task45(0), '4.5');

execute(task51, '5.1');
execute(task52, '5.2');
execute(task53, '5.3');
execute(task54, '5.4');
