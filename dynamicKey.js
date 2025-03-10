
// ### 1.  Создание объекта с динамическим ключом 
// Напишите функцию `createObject(key, value)`, которая принимает строку `key` и значение `value`, затем возвращает объект с этим
//  ключом и значением.
function createObject(key, value) {
    const obj = {};
    obj[key] = value;
    return obj;
}
console.log(createObject('name', 'Alice'));
// Пример вызова: 
// console.log(createObject('name', 'Alice'));
// Ожидаемый результат: 
// { name: 'Alice' }
 
// ### 2.  Изменение значения в объекте по динамическому ключу 
// Напишите функцию `updateObject(obj, key, value)`, которая принимает объект `obj`, строку `key` 
// и новое `value`. Функция должна обновить объект, добавив или изменив указанное свойство.
function updateObject(obj, key, value){
    obj[key] = value;
    return obj 
 }
const person = { name: 'Bob', age: 30 };
 updateObject(person, 'age', 31);
 console.log(person);
//  Ожидаемый результат: 
// { name: 'Bob', age: 31 }


// ### 3.  Получение значения из объекта по динамическому ключу 
// Напишите функцию `getValue(obj, key)`, которая принимает объект `obj` и строку `key`, затем возвращает
//  значение свойства с таким ключом.

function getValue(obj, key) {
    return obj[key]; 
}
 const user = { username: 'admin', password: '1234' };
console.log(getValue(user, 'username'));

//  Ожидаемый результат: 
// 'admin'
 


// ### 4.  Удаление свойства по динамическому ключу 
// Напишите функцию `deleteProperty(obj, key)`, которая принимает объект `obj` и строку `key`, 
// затем удаляет указанное свойство из объекта.
function deleteProperty(obj, key){
    delete obj[key]; 
    return obj;
}

const car = { brand: 'Toyota', model: 'Camry', year: 2020 };
deleteProperty(car, 'year');
console.log(car);
 
//  Ожидаемый результат: 
// { brand: 'Toyota', model: 'Camry' }
 


// ### 5.  Проверка наличия ключа в объекте 
// Напишите функцию `hasKey(obj, key)`, которая принимает объект `obj` и строку `key`, затем возвращает `true`, если ключ есть в объекте, и `false`, если нет.
function hasKey(obj, key){
    return key in obj;
}

const book = { title: '1984', author: 'George Orwell' };
 console.log(hasKey(book, 'author')); // true
console.log(hasKey(book, 'year')); // false
 
/// хотелось бы еще раз прогнать эту тему.
