// Получи и выведи в консоль:
// - Заголовок страницы(`document.title`).  
//    - URL текущей страницы(`document.URL`).  
//    - Имя браузера с помощью`navigator`.  
console.log(location.href); 
console.log(`Агент пользователя: ${navigator.userAgent}`);
// Перейди на страницу `"https://example.com"` с помощью`location`.  
//window.location.href = "https://example.com"
// Получи доступ к`document.body`, измени его `backgroundColor` на`lightgray`.  
document.body.style.backgroundColor = "lightgray"
// Выведи в консоль количество узлов(`childNodes.length`) внутри`document.body`.  
console.log(document.body.childNodes.length);

// Получение элементов со страницы
// Найди и выведи в консоль:
// - Элемент с`id="main"`.  
//    - Все элементы с классом`"item"`.  
//    - Все`<p>` на странице.  
//    - Первый элемент с классом`"highlight"`.  
console.log(document.getElementById("main"));
console.log(document.getElementsByClassName("item"));
console.log(document.getElementsByTagName("p"));
console.log(document.querySelector(".highlight"));




// Получи и измени текст первого элемента `<h1>` на`"Новый заголовок"`.  
const firstHeading = document.querySelector("h1");
if (firstHeading) {
    firstHeading.innerHTML = "Новый заголовок";
}


// Создай новый `<p>` с текстом `"Это новый параграф"` и добавь его в конец`document.body`.  
const newParagraph = document.createElement("p");
newParagraph.textContent = "Это новый параграф";
document.body.appendChild(newParagraph);
// Создай новый`<div>`, внутри него добавь `<h2>` с текстом`"Привет, мир!"`, вставь в`document.body`.
const newDiv = document.createElement("div");
const newHeading = document.createElement("h2");
newHeading.textContent = "Привет, мир!";
newDiv.appendChild(newHeading);
document.body.appendChild(newDiv);
// Замени первый `<p>` на странице на новый `<p>` с текстом`"Замененный параграф"`.  
const firstParagraph = document.querySelector("p");
const newParagraph1 = document.createElement("p");
newParagraph.textContent = "Замененный параграф";
if (firstParagraph) {
    firstParagraph.replaceWith(newParagraph1);
}
// Создай 5 `<div>` с текстом`"Блок X"`, где X — это номер блока(1 - 5).Добавь их в`document.body`. 
//for (let i = 1; i <= 5; i++) {
//}
  //  const newDiv1 = document.createElement("div");
  //  newDiv1.textContent = `Блок ${i}`; Uncaught ReferenceError: i is not definedat script.js:56:35
  //  document.body.appendChild(newDiv1)
// Создай новый `<ul>` со списком`["Яблоко", "Груша", "Банан"]`, добавь его в`document.body`.  (использовать цикл)
const list = document.createElement("ul");
const items = ["Яблоко", "Груша", "Банан"];
for (const item of items) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
}
document.body.appendChild(list);

// Найди элемент с `id="content"` и измени его `color` на`"blue"`.  
const contentElement = document.getElementById("content");
if (contentElement) {
    contentElement.style.color = "blue";
}
// Найди все `<p>` и сделай их `fontSize` равным`"18px"`. (использовать цикл) 
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontSize = "18px";
}
// Создай новый`<div>`, установи ему`width: 200px`, `height: 100px`, `backgroundColor:
//  "red"` и добавь в`document.body`.  
const newDiv2 = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "100px";
newDiv.style.backgroundColor = "red";
document.body.appendChild(newDiv2)