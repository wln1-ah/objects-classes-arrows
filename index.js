const propName = 'foo';

const obj = {
    key1: 'value',
    '@randomKeyName': '',
    [propName]: '', // still valid way to create property on an object
};

const wasSuccessful = delete obj['@randomKeyName']; // returns boolean of if it worked or failed

for (var i = 0; i < arr.length; i++) {
    arr[i];
}

arr.foo = 'bar';

for (const index in arr) {
    console.log(index, arr[index]); // ..., ('foo', 'bar')
}

for (const key in obj) {
    console.log(key, obj[key]); // ('key', undefined), ('foo', undefined)
}

obj.hasOwnProperty('@randomKeyName'); // false

obj['@randomKeyName'] = undefined;

obj.hasOwnProperty('@randomKeyName'); // true


for (const key in obj) {
    console.log(key, obj[key]); // ('key', 'value'), ('foo', ''), ('@randomKeyName', undefined)
}



const bookFragment = {
    title: 'Words of Radiance',
    pages: 2045,
    weight: 5
};

const book = {
    author: 'Brandon Sanderson',
    publishDate: new Date(),
    pages: 1690,
};

const newBook = {
    ...book,
    ...bookFragment,
    pages: 1,
};

const newObject = Object.assign({}, book, bookFragment);
// Object.assign(newObject, bookFragment);

for (const key in bookFragment) {
    key; // 'title', 'pages'
    bookFragment[key]; // 'Words of Radiance', 2045
    
    book[key] = bookFragment[key];
}

book; // { ..., pages: 2045, ... }


const arr1 = [ 'foo', 'bar' ];

const arr2 = [ 1, 2 ];

const combinedArr = [
    ...arr1,
    ...arr2,
];

combinedArr; // [ 'foo', 'bar', 1, 2 ]




function higherOrder(callback) {
    callback();
}


higherOrder(() => {});





function createPerson(name) {
    return {
        name,
        sayName() {
            console.log(this.name);
        },
    };
}







function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function sayName() {
    console.log(this.name);
};


class Person {
    // name = '';

    constructor(name) {
        // var this = {};
        // adds prototype to that object

        // runs code in constructor
        this.name = name;

        // returns the new object
    }

    sayName() {
        console.log(this.name);
    }
}



var bob = new Person('Bob');

bob.sayName(); // 'Bob'




// const obj = new Object();
const obj = {};

// Object.prototype.


// const arr = new Array(
//     1,
//     2,
//     3,
//     4,
//     5,
// );

const arr = [
    1,
    2,
    3,
    4,
    5,
];


