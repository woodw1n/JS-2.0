// 1. Поиск элементов в массиве   
//  Задача 1.1:  Найди первый элемент больше 10 в массиве `[2, 5, 12, 8, 15]`.  
 const arr = [2, 5, 12, 8, 15];
function firstElembiggerThenten(arr){
    return array.find(element => element > 10);
}

//  Задача 1.2:  Найди индекс первого элемента, который меньше 0, в массиве `[3, -1, 4, -5, 6]`.  
 const arr1 = [3, -1, 4, -5, 6];
function indexOf(arr1){
 return array.findIndex(element =>element>0)   
}

//  Задача 1.3:  Проверь, содержит ли массив `[1, 2, 3, 4, 5]` число 3.  
const arr2 = [1, 2, 3, 4, 5];
function consistOF(arr2){
return array.includes(3)
}

//  2. Фильтрация данных   
//  Задача 2.1:  Оставь в массиве `[7, 2, 10, 5, 8]` только четные числа.  
 const arr3 = [7, 2, 10, 5, 8];
function integers(arr3){
    return array.filter(number => number % 2 === 0)    
}

//  Задача 2.2:  Убери из массива `['яблоко', 'банан', 'груша', 'банан']` все вхождения `'банан'`.  
 const arr4 = ['яблоко', 'банан', 'груша', 'банан'];
 function deliteBanan(arr4){
    return array.filter(item => item !== 'банан');  
 }


//  3. Преобразование массива   
//  Задача 3.1:  Умножь все элементы массива `[1, 2, 3, 4]` на 2.  
const arr5 = [1, 2, 3, 4];
function multiplication(arr5){
return  array.map(number => number * 2)    
}

//  Задача 3.2:  Разверни массив `[[1, 2], [3, 4], [5, 6]]` в `[1, 2, 3, 4, 5, 6]`.  
 const arr6= [[1, 2], [3, 4], [5, 6]];// выравнивание
function straightening(arr6){
    return array.flat()    
}

//  4. Сортировка и перестановка   
//  Задача 4.1:  Отсортируй массив `[5, 1, 8, 3, 2]` по возрастанию.  
 const arr7 = [5, 1, 8, 3, 2];
 function sortingArr(arr7){
    return array.sort((a, b) => a - b)
 }

//  Задача 4.2:  Разверни порядок элементов в массиве `[10, 20, 30, 40]`.  
const arr8= [10, 20, 30, 40];
function clear (arr8) {
 return  array.reverse()  
}

//  5. Изменение содержимого массива   
//  Задача 5.1:  Удали последний элемент из массива `[1, 2, 3, 4, 5]`.  
 const arr9 = [1, 2, 3, 4, 5];
 function deliteLastElement(arr9) {
    array.pop();
    return array;
}

//  Задача 5.2:  Вставь число `100` в начало массива `[10, 20, 30]`.  
 const arr10 = [10, 20, 30];
function insertAtBeginning(arr10, element) {
    array.unshift(element);
    return array;
}

//  6. Агрегирование данных   
//  Задача 6.1:  Найди сумму чисел в массиве `[3, 7, 2, 8]`.  
 const arr11 = [3, 7, 2, 8];
 function sumArray(arr11) {
    return array.reduce((sum, number) => sum + number, 0);
}

//  Задача 6.2:  Найди максимальное число в массиве `[12, 45, 7, 98, 23]`.  
 const arr12 = [12, 45, 7, 98, 23];
function findMax(arr12) {
    return Math.max(array);
}


//  7. Работа со строками и массивами   
//  Задача 7.1:  Преобразуй строку `"яблоко, банан, груша"` в массив.  
 const str = "яблоко, банан, груша";
 function stringToArray(string) {
    return string.split(', ');
}

//  8. Перебор массива   
//  Задача 8.1:  Выведи в консоль каждый элемент массива `[10, 20, 30]`.  
// const arr = [10, 20, 30];
arr.forEach(element => {console.log(element)})


