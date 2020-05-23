// SIMPLE FUNCTION
const simpleFuntion = function () {
  console.log('Hello World!');
}
simpleFuntion();

// SIMPLE ARROW FUNCTION
const simpleArrowFunction = () => {
  console.log("Hello World!");
}
simpleArrowFunction();

// ONE LINE ARROW FUNCTION
const hello = () => console.log('Hello');

hello();

// ONE LINE ARROW FUNCTION WITH ONE PARAMITTER
const hello = name => console.log(`Hello ${name}`);

hello('Raihan Ahmad');

// ONE LINE ARROW FUNCTION WITH ONE PARAMITTER WITH RETURN
const hello = name => `Hello ${name}`;

console.log(hello('Raihan Ahmad'));

// ARRO FUNCTION WITH TWO PARAMITTER
const hello = (firstName, lastName) => `Hello ${firstName} ${lastName}`;

console.log(hello('Raihan', 'Ahmad'));

// ARROW FUNCTION WITH OBJECT
const hello = () => ({
  message: 'Test'
});

console.log(hello());

const user = ["Raihan", "Nasim", "Polash"];

// GENERAL FUNCTION
const nameLength = user.map(function (name) {
  return name.length;
})

// SHORTER WITH ARROW FUNCTION
const nameLength = user.map((name) => {
  return name.length;
});

// SHOTEST WAY
const nameLength = user.map(name => name.length);

console.log(nameLength);\