// 1. Фильтрация по возрасту  
// Дан массив объектов:  
 const users = [
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 22 },
   { name: "David", age: 35 }
 ];
// Получите массив пользователей старше 25 лет.  
const moreThan25 = users.filter(user => user.age > 25);
console.log(moreThan25)

//  2. Поиск по имени  
// Найдите объект пользователя с именем `"Charlie"`.  
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 35 }
// ];
const Charlie = users.find(user => user.name === "Charlie");
console.log(Charlie)



//  3. Добавление свойства в объекты  
// Добавьте каждому пользователю свойство `status: "active"`.  
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 35 }
// ];
const newTerms = users.map(user => {
    return { ...user, status: "active" };
  });






//  4. Сортировка по возрасту (по возрастанию)  
// Отсортируйте массив по возрасту пользователей.  

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 35 }
// ];
const sortUser = users.sort((a, b) => a.age - b.age);///пришлось погуглить
console.log(sortUser);






//  5. Изменение структуры объектов  
// Преобразуйте массив так, чтобы объекты имели структуру `{ fullName: имя, ageInYears: возраст }`.  
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 35 }
// ];
const transformedUsers = users.map(user => {
    return {
      fullName: user.name,
      ageInYears: user.age
    };
  });



//  6. Подсчет количества пользователей с возрастом больше 25  
// Найдите, сколько пользователей старше 25 лет.  
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 35 }
// ];
const userMore25 = users.filter(user => user.age > 25);
const countUserMore25 = users.length;
console.log(countUserMore25);
//  7. Удаление определенных элементов  
// Удалите из массива пользователей с возрастом меньше 30 лет.  
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 35 }
// ];
const users30 = users.filter(user => user.age >= 30);// пришлось погуглить
console.log (users30)
//  8. Поиск индекса пользователя по имени  
// Найдите индекс объекта с именем `"Bob"`.  
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 35 }
// ];
let bob = users.findIndex(user => user.name === "Bob");
console.log(bob)
//  9. Преобразование массива объектов в массив имен  
// Создайте массив, содержащий только имена пользователей.  
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 35 }
// ];
const userNames = users.map(user => user.name);
console.log(userNames);
//  10. Преобразование в объект с именем как ключом  
// Создайте объект вида `{ "Alice": 25, "Bob": 30, "Charlie": 22, "David": 35 }`.  
const usersObject = users1.reduce((obj, user) => { /// разобрался с копилотом
    obj[user.name] = user.age;
    return obj;
  }, {});
  
  console.log(usersObject); 
 const users1 = [
  { name: "Alice", age: 25 },
   { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
   { name: "David", age: 35 }
 ];


//! ### 🔹 Циклы + массивы  

//  11. Сумма четных чисел массива  
// const numbers = [12, 5, 8, 130, 44, 27];
// Найдите сумму всех четных чисел.  

//  12. Поиск наибольшего числа в массиве  
// Найдите максимальное число в массиве `numbers`.  
// const numbers = [12, 5, 8, 130, 44, 27];

//  13. Поиск второго по величине числа  
// Найдите второе по величине число в массиве.  
// const numbers = [12, 5, 8, 130, 44, 27];

//  14. Перевернуть массив без `reverse()`  
// Напишите код, который переворачивает массив без использования `reverse()`.  
// const numbers = [12, 5, 8, 130, 44, 27];

// 15. Удаление дубликатов из массива
// const data = [3, 5, 2, 3, 8, 2, 7, 8, 10];
// Удалите дубликаты, используя цикл.  

//  16. Объединение двух массивов без`concat()`
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// Объедините массивы в один.  

//  17. Нахождение элементов, которых нет во втором массиве
// const a = [1, 2, 3, 4, 5];
// const b = [3, 4, 5, 6, 7];
// Найдите элементы из`a`, которых нет в`b`.  

//  18. Преобразование двумерного массива в одномерный
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// Преобразуйте его в `[1, 2, 3, 4, 5, 6, 7, 8, 9]` без`flat()`.  

//  19. Генерация массива из чисел от 1 до 100  
// Создайте массив `[1, 2, 3, ..., 100]` с помощью цикла.  

//  20. Перемешивание массива(рандомный порядок)  
// Реализуйте алгоритм для перемешивания элементов массива.  
// const numbers = [12, 5, 8, 130, 44, 27];



//! ### 🔹 Методы строк

// 21. Подсчет количества гласных в строке
// const text = "JavaScript is awesome!";
// Подсчитайте количество гласных(`a, e, i, o, u`).  

//  22. Замена пробелов на`-`  
// Замените все пробелы в строке на`-`.  
// const text = "JavaScript is awesome!";

//  23. Разворот строки  
// Переверните строку`"Hello, world!"`.  

//  24. Извлечение цифр из строки
// const str = "User ID: 49876, Age: 27";
// Извлеките все числа в виде массива`[49876, 27]`.



