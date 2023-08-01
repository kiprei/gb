//Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.
function task1() {
    const numbers = {
        keyin1: 1,
        keyin2: 2,
        keyin3: 3,
        keyin4: 4,
        keyin5: 5,
        keyin6: 6,
        keyin7: 7,
    };

    Object.values(numbers)
        .filter(value => value >= 3)
        .forEach(value => console.log(value));
}

//Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.
function task2() {
    const post = {
        author: "John", // вывести этот текст
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2, // вывести это число
                },
            },
            {
                userId: 5, // вывести это число
                userName: "Jane",
                text: "lorem ipsum 2", // вывести этот текст
                rating: {
                    likes: 3,
                    dislikes: 1,
                },
            },
        ],
    };

    const comments = post.comments;
    console.log(post.author);
    console.log(comments[0].rating.dislikes);
    console.log(comments[1].userId);
    console.log(comments[1].text);
}

//Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach
function task3() {
    const products = [
        {
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];

    console.log('Before: ' + products.map(product => product.price));
    products.forEach(product => product.price *= 0.85);
    console.log('After: ' + products.map(product => product.price));
}

// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.
function task4() {
    const products = [
        {
            id: 3,
            price: 127,
            photos: ["1.jpg", "2.jpg"],
        },
        {
            id: 5,
            price: 499,
            photos: [],
        },
        {
            id: 10,
            price: 26,
            photos: ["3.jpg"],
        },
        {
            id: 8,
            price: 78,
        },
    ];

    console.log(products.filter(product => product.photos?.length > 0));
    console.log(products.sort((curr, next) => curr.price - next.price));
}

// необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями
function task5() {
    const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

    if (en.length != ru.length) {
        console.log('Даны массивы разной длины');
        return;
    }

    en.map((item, i) => en[i] = getPairObject(item, ru[i]));
    console.log(en);
}

function getPairObject(key, value) {
    const obj = {};
    obj[key] = value;
    return obj;
}

execute(task1, '1');
execute(task2, '2');
execute(task3, '3');
execute(task4, '4');
execute(task5, '5');