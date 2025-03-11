//  1. Использование`for in`(итерация по индексам массива)  
// Дан массив чисел.Используя`for in`, выведи в консоль индексы элементов массива.
const numbers = [10, 20, 30, 40, 50];
for (let index in numbers) {
  console.log(index);
}
//  2. Использование`for of`(итерация по значениям массива)  
// Дан массив строк.Используя`for of`, выведи в консоль все элементы массива.

const fruits = ["яблоко", "банан", "апельсин", "груша"];
for (let value of fruits){
  console.log(value);
}

// 3. Использование `for` для суммирования чисел в массиве  
// Дан массив чисел.Используя`for`, вычисли сумму всех элементов и выведи результат.

 const numbers1 = [5, 10, 15, 20, 25];
 let sum = 0;
 for (let i = 0; i < numbers1.length; i++) {
     sum += numbers1[i];
 }
 console.log(sum);

// 4. Использование `while` для поиска первого четного числа  
// Дан массив чисел.Используя`while`, найди и выведи в консоль первое четное число.

/*const numbers2 = [1, 3, 7, 8, 9, 12];
let i = 0;
while (i < numbers2.length) {
    if (numbers2[i] % 2 === 0) {
        console.log(numbers2[i]); 
        break; 
    }
    i++;
}*/
// 5. Использование `do while` для вывода всех элементов массива  
// Дан массив чисел.Используя`do while`, выведи в консоль все элементы массива.

const numbers3 = [3, 6, 9, 12, 15];
let i = 0
do {
    console.log(numbers3[i]); 
    i++; 
} while (i < numbers3.length)

// 6. Использование `for` для создания нового массива с удвоенными значениями  
// Дан массив чисел.Используя`for`, создай новый массив, в котором все элементы удвоены.Выведи
//  новый массив в консоль.

 const numbers4 = [2, 4, 6, 8];
 const newNumbers4 =[]
for (let i = 0; i < numbers4.length; i++) {
 newNumbers4.push( numbers4[i]*2)
}
console.log(newNumbers4);


// 1. Отфильтровать и отсортировать пользователей по возрасту
// Дан массив объектов с пользователями. Нужно:  
// - Оставить только пользователей старше 18 лет  
// - Отсортировать их по возрасту (по возрастанию)  
// - Получить массив имён отсортированных пользователей  

const users = [
  { name: "Алексей", age: 25 },
  { name: "Мария", age: 17 },
  { name: "Иван", age: 30 },
  { name: "Ольга", age: 15 },
  { name: "Елена", age: 22 }
];
const filteredUsers = users.filter(user => user.age > 18);
const sortedUsers = filteredUsers.sort((a, b) => a.age - b.age);
const names = sortedUsers.map(user => user.name)
console.log (names)

// 2. Найти средний рейтинг книг определенного жанра
// Дан массив книг. Нужно:  
// - Оставить только книги жанра `"фантастика"`  
// - Посчитать средний рейтинг этих книг  

const books = [
  { title: "Гарри Поттер", genre: "фантастика", rating: 9.2 },
  { title: "1984", genre: "антиутопия", rating: 8.9 },
  { title: "Дюна", genre: "фантастика", rating: 9.5 },
  { title: "Мастер и Маргарита", genre: "драма", rating: 9.0 },
  { title: "Три тела", genre: "фантастика", rating: 8.8 }
];
const filterBooks = books.filter(book => book.genre === "фантастика");
const rating = filterBooks.reduce((sum, book) => sum + book.rating, 0) / filterBooks.length; 
console.log(filterBooks,rating);

// 3. Преобразовать массив товаров: оставить только названия в верхнем регистре  
// Дан массив товаров. Нужно:  
// - Оставить только товары дороже 1000  
// - Получить массив их названий в верхнем регистре  


const products = [
  { name: "Телефон", price: 1500 },
  { name: "Часы", price: 500 },
  { name: "Ноутбук", price: 3000 },
  { name: "Клавиатура", price: 700 }
];
const priceProducts = products.filter(products => products.price > 1000);
const productNamesUpperCase = priceProducts.map(products => products.name.toUpperCase());
console.log(productNamesUpperCase);

// 4. Найти самого молодого сотрудника с зарплатой выше 50000  
// Дан массив сотрудников. Нужно:  
// - Оставить только тех, у кого зарплата выше 50000  
// - Найти самого молодого  
// - Вернуть строку в формате `"Самый молодой: ИМЯ, возраст: ВОЗРАСТ, зарплата: ЗАРПЛАТА"`  
const employees = [
  { name: "Олег", age: 30, salary: 60000 },
  { name: "Анна", age: 25, salary: 55000 },
  { name: "Виктор", age: 40, salary: 70000 },
  { name: "Марина", age: 23, salary: 48000 },
  { name: "Игорь", age: 28, salary: 52000 }
];
const sotrydnik = employees.filter(employees=>employees.salary>55000);
console.log(sotrydnik);
const yanger = employees.sort((a, b) => a.age - b.age)
const yanger1 = sotrydnik.sort((a, b) => a.age - b.age)[0]
console.log(yanger);
console.log(yanger1);
const result = `Самый молодой: ${yanger1.name}, возраст: ${yanger1.age}, 
зарплата: ${yanger1.salary}`;
console.log(result);

// 5. Найти все жанры фильмов без повторений (используем `map`, `flat`, `Set`)  
// Дан массив фильмов. Нужно:  
// - Получить массив всех жанров (каждый фильм может содержать несколько жанров)  
// - Удалить дубликаты  
// - Вернуть массив жанров в алфавитном порядке  


const movies = [
  { title: "Фильм 1", genres: ["драма", "триллер"] },
  { title: "Фильм 2", genres: ["фантастика", "боевик"] },
  { title: "Фильм 3", genres: ["драма", "фантастика"] },
  { title: "Фильм 4", genres: ["ужасы", "триллер"] }
];
const genres = movies.map(movies => movies.genres)
console.log(genres);
const genres1 = [...new Set(genres)]
console.log(genres1);
const genres2 = [genres1.flat()]
console.log(genres2);