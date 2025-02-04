// Создайте переменные для хранения вашего имени, возраста и города проживания. Выведите их в консоль.

let userName = "Виталий";
const age = 29;
let currentCity ="Минск"
console.log (userName)
console.log(age)
console.log(currentCity)

// Создайте переменные разных типов данных: строка, число, булевый тип, массив и объект. Выведите тип каждой переменной в консоль с помощью typeof.
let str ="Родина"
let num = 69;
let bool = true;
let mass = [3, 6, 8, 9, 12];
let obj = alert()
console.log(typeof (str))
console.log(typeof num)
console.log(typeof bool)
console.log(typeof mass)
console.log(typeof obj)

// Создайте объект, который будет содержать свойства: name, age, city. Добавьте метод greet, который будет выводить приветствие с использованием свойств объекта. Пример: "Привет, меня зовут [name], мне [age] лет и я из [city]".


let info = {
    name: 'vitalik',
    age:29,
    city: 'Minsk',
    greet(){
    return `Привет, меня зовут ${this.name}, мне ${this.age} лет и я города ${this.city}`
    }
    }
    console.log(info.greet);
console.log(`Привет, меня зовут ${info.name}, мне ${info.age} лет и я из ${info.city}`);
    

// Напишите функцию, которая принимает два параметра: width и height, и возвращает площадь прямоугольника. Используйте эту функцию для вычисления площади нескольких прямоугольников.

let a = function(width,height){
    return(width*height)
    }
   console.log( a(2,3));
    
   let maltiply = function(width,height){
    let result = width*height;
    return result
    }
   console.log( maltiply(5,6) );

// Создайте объект car с свойствами: brand, model, year, и методом getInfo, который возвращает строку с информацией о машине.
    let car = {
    brand:'renault',
    model:'Laguna 3',
    year: 2010,
    getInfo() {
        return `brand ${car.brand},model ${car.model}, year ${car.year}`
    }
    }
    console.log(car.getInfo());

    // Напишите функцию isEligibleForScholarship, которая принимает объект студента (свойства: name, gpa,
    //  extracurricularsCount) и возвращает true, если GPA больше 3.5 и количество внеучебных мероприятий 
    // больше 2, и false в противном случае.

    let studentCard ={
        name: "vitalik",
        gpa: 2,
        extracurricularsCount: 23,
    }
function getIsEligibleForScholarship(studentCard){
 if (studentCard.gpa>3.5 && studentCard.extracurricularsCount>2){
    console.log(true);
 }else {
    console.log(false);
 }
}
getIsEligibleForScholarship(studentCard);  
// в чем проблема , почему вылазиит андефайнд
// выводили   console.log (getIsEligibleForScholarship(studentCard))
// какой записью лучше пользоваться?

function isElig(student) {
    return student.gpa > 3.5 && student.extracurricularsCount > 2;
}
// потому что сравнения работают через булиевые
const student = {
    name: "петя",
    gpa: 3,
    extracurricularsCount: 3
};
console.log(isElig(student)); 


// Создайте функцию checkPassword, которая принимает объект пользователя
//  (свойства: password, confirmPassword) и проверяет, соответствует ли пароли друг другу.
//  Если пароль неверный, функция должна возвращать сообщение о том, что пароль неверен, и предлагать 
// пользователю ввести его снова.
let currentUser ={
    password: prompt('your Password'),
    confirmPassword: prompt('confirm your Password'),
}
function checkPassword(currentUser) { 
    if (currentUser.password===currentUser.confirmPassword){
    alert( 'password correct');
 }else {
    alert('password incorrect');
    currentUser.confirmPassword = prompt ('confirm your Password')
 }
}
checkPassword(currentUser)


// Напишите функцию canAccess, которая принимает объект пользователя (свойства: role, isLoggedIn) 
// и возвращает true, если пользователь имеет доступ (например, роль "admin" или "editor" и статус 
// isLoggedIn равен true), и false в противном случае.
 /* попытка №1
let newUser ={
    role:confirm('if press ok-you admin,if press cancel-you editor'),
    isLoggedIn:NaN,
}
function canAccess(newUser) { 
    if (newUser.role==true){
        newUser.isLoggedIn===true;
     }else {
        newUser.isLoggedIn===false;
        newUser.rolePassword = prompt ('check your role')
     }
    }*/
//попытка№2
   /*let newUser1 ={
        role:confirm('if press ok-you admin,if press cancel-you editor'),
        isLoggedIn:confirm('if press ok-you loggedin,if press cancel-you loggedout'),
    }
    function canAccess(newUser1) { 
        if (newUser1.role==newUser1.isLoggedIn){
            alert( 'access allowed');
         }else {
            alert( 'Access denied');
         }
        }
        canAccess(newUser1)



Это уже копилот Получается не понял задания
        function canAccess(user) {
            return (user.role === "admin" || user.role === "editor") && user.isLoggedIn;
        }
        
        // Пример использования
        const user1 = {
            role: "admin",
            isLoggedIn: true
        };
        
        const user2 = {
            role: "viewer",
            isLoggedIn: true
        };
        
        const user3 = {
            role: "editor",
            isLoggedIn: false
        };
        
        console.log(canAccess(user1)); // true
        console.log(canAccess(user2)); // false
        console.log(canAccess(user3)); // false


// Напишите функцию convertTemperature, которая принимает температуру в градусах Цельсия и возвращает 
// объект с двумя свойствами: celsius и fahrenheit, где fahrenheit - это температура в градусах Фаренгейта.

//(2 °C × 9/5) + 32 = 35,6 °F*/

let tCelsius= prompt("введите температуру в цельсиях");
function convertTemperature(tCelsius) {
tFarenheit=(tCelsius*9/5)+32
let newTemp ={
    a:tCelsius,
    b:tFarenheit,
}
return newTemp
}
console.log(convertTemperature(tCelsius));



// Создайте функцию startCalculator, которая выполняет следующие действия:
// Запрашивает у пользователя два числа.
// Запрашивает у пользователя оператор (например, +, -, *, /).
// Проверяет, что введенные значения являются числами.
// Проверяет, что оператор является одним из допустимых (+, -, *, /).
// Выполняет соответствующую арифметическую операцию и выводит результат.
// Обрабатывает возможные ошибки, такие как деление на ноль.*/



function startCalculator() {
    let firstNum = Number(prompt('ВВеди первое число'))
    let secondNum = Number(prompt('ВВеди второе число'))
    let operator = (prompt('ВВеди оператор'))
    let result
    switch (operator) {
      case "*":
        result = firstNum * secondNum;
        break;
      case "+":
        result = firstNum + secondNum;
        break;
      case "-":
        result = firstNum - secondNum;
        break;
      case "/":
        if (num2 !== 0) {
            result = firstNum / secondNum;
        } else {
          alert( "На ноль делить нельзя");
        }
    }
  }
  console.log(startCalculator())

  
// не работает..
  