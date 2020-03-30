// #1 - #2

var userObj = {
    firstName: "Никита",
    lastName: "Гладуненко",
    age: 27,
    fullName() {
        return `${userObj.firstName} ${userObj.lastName}`;
      }
};
console.log(userObj);
console.log(userObj.fullName());

// #3

function defUpperStr(str) {
    return (str || 'Default text').toUpperCase();
  }
  console.log(defUpperStr('My text'));
  console.log(defUpperStr());

//   #4

function evenFn(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) if (i % 2 === 0) arr.push(i);
    return arr;
}
console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

// #5

function weekFn(cond) {
    let str = '';
    switch (cond) {
        case 1:
            str = 'Понедельник';
            break;
        case 2:
            str = 'Вторник';
            break;
        case 3:
            str = 'Среда';
            break;
        case 4:
            str = 'Четверг';
            break;
        case 5:
            str = 'Пятница';
            break;
        case 6:
            str = 'Суббота';
            break;
        case 7:
            str = 'Воскресенье';
            break;
        default:
            str = null;
    }
    return str;
}
console.log(weekFn(2));
console.log(weekFn(4));
console.log(weekFn(6));
console.log(weekFn(9));
console.log(weekFn(1.5));
console.log(weekFn('2'));

// #6

function ageClassification(num) {
    return num > 0
    ? num > 24
        ? num > 44
            ? num > 65
                ? num > 75
                    ? num > 90
                        ? num > 122
                        ? null
                        : 'долгожители'
                    : 'старчерский возраст'
                : 'пожилой возраст'
            : 'средний возраст'
        : 'молодой возраст'
    : 'детский возраст'
    : null;
}

console.log(1, ageClassification(-1) === null);
console.log(2, ageClassification(1) === 'детский возраст');
console.log(3, ageClassification(24) === 'детский возраст');
console.log(4, ageClassification(24.01) === 'молодой возраст');
console.log(5, ageClassification(44) === 'молодой возраст');
console.log(6, ageClassification(44.01) === 'средний возраст');
console.log(7, ageClassification(65) === 'средний возраст');
console.log(8, ageClassification(65.01) === 'пожилой возраст');
console.log(9, ageClassification(75) === 'пожилой возраст');
console.log(10, ageClassification(75.01) === 'старческий возраст');
console.log(11, ageClassification(90) === 'старческий возраст');
console.log(12, ageClassification(90.01) === 'долгожители');
console.log(13, ageClassification(122) === 'долгожители');
console.log(14, ageClassification(122.01) === null);
console.log(15, ageClassification(150) === null);

// #7

function oddFn(n) {
    let arr = [];
    let i = 0;
    while (i++ < n) if (i % 2 !== 0) arr.push(i);
    return arr;
}
console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));

// #8

function mainFunc(a, b, cb) {
    if (cb && typeof cb === 'function') return cb(a, b);
  
    return false;
}
function cbRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function cbPow(num, pow) {
    return Math.pow(num, pow);
}
function cbAdd(a, b) {
    return a + b;
}
console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(10, 30, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, 'not a func'));