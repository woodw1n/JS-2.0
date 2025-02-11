// Нужно вернуть массив только с чётными числами.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let findNumbers = (arr) => arr.filter((item) => item % 2 === 0);
console.log(findNumbers(numbers), "Z#1");

// Нужно вернуть массив строк вида "Число: X".
// X = число из массива на данной итерации
const numbers2 = [10, 20, 30];
let convertArray = (arr) => arr.map((item) => `Число X: ${item}`);
console.log(convertArray(numbers2), "Z#2");

// Нужно найти первое слово, длина которого больше 5 символов.
const words = ["кот", "машина", "дом", "компьютер", "море"];
let firstWordBiggerThanFive = (arr) => arr.find((item) => item.length > 5);
console.log(firstWordBiggerThanFive(words), "Z#3");

// Нужно найти индекс числа 50.
const numbers3 = [10, 20, 30, 50, 60];
let findIndex = (arr) => arr.findIndex((item) => item === 50);
console.log(findIndex(numbers3), "Z#4");

// Нужно проверить, есть ли в массиве хотя бы одно отрицательное число.
const numbers4 = [1, 5, -3, 7];
let negativeNumb = (arr) => arr.some((item) => item < 0);
console.log(negativeNumb(numbers4), "Z#5");

// Нужно объединить два массива в один.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
let doubleArr = arr1.concat(arr2);
console.log(doubleArr, "Z#6");

// Нужно удалить элемент по индексу 2.
const numbers5 = [10, 20, 30, 40, 50];
const deletedNumber = numbers5.splice(2);
console.log(deletedNumber, "Z#7");


//причесать код :Windows: Shift + Alt + F
