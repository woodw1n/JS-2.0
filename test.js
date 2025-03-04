function test() {
  let a = 10;
  if (true) {
    let a = 20;
    console.log(a);
  }
  console.log(a);
}
test();

///////////////////

function outer() {
  let a = "Hello";
  function inner() {
    console.log(a);
  }
  return inner;
}
const fn = outer();
fn();


///////////////////

function test() {
  console.log(a);
  let a = 5;
}
test();

///////////////////

{
  let a = 10;
}

console.log(a);


///////////////////

{
  var a = 10;
}
console.log(a);


///////////////////

function foo() {
  var b = 20;
}
foo();
console.log(b);

///////////////////


function example() {
  x = 10;
}
example();
console.log(x);

///////////////////


let x = 1;
function test() {
  let x = 2;
  {
    let x = 3;
    console.log(x);
  }
}
test();

///---

//Hoisting (Поднятие переменных и функций)**

console.log(a);
var a = 5;

///////////////////

console.log(b);
let b = 10;


///////////////////

hoistMe();
function hoistMe() {
  console.log("Я вызвана!");
}

///////////////////

console.log(typeof foo);
var foo = 42;


///////////////////

function hoisting() {
  console.log(a);
  var a = 10;
}
hoisting();


/////////////////// 

console.log(x);
let x = 5;


//`this` в объектах**

const obj = {
  name: "Alice",
  sayHi: function () {
    console.log(this.name);
  }
};
obj.sayHi();


///////////////////

const obj = {
  name: "Alice",
  sayHi: function () {
    console.log(this.name);
  }
};
const greet = obj.sayHi;
window.greet();


///////////////////  

const obj = {
  name: "Alice",
  sayHi: () => {
    console.log(this.name);
  }
};

const obj2 = {
  name: "Mark",
};
obj2.sayHi = obj.sayHi

console.log('obj', obj)
console.log('obj2', obj2)
obj2.sayHi();


///////////////////

function showThis() {
  console.log(this);
}
showThis();


///////////////////  

const obj = { name: "Bob" };

function showThis() {
  console.log(this.name);
}
showThis();


///////////////////

const user = {
  name: "Charlie",
  sayName: function () {
    console.log(this.name);
  }
};
const func = user.sayName;
func();


///////////////////

const obj = {
  name: "Anna",
  inner: {
    sayHi: function () {
      console.log(this.name);
    }
  }
};
obj.inner.sayHi();