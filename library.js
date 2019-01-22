/*****************************************
 ***** Javascript CheatSheet LIBRARY *****
 *****************************************/

// // log to console
// //single line comment
// /*
// multi
// line
// comment
// */
// //console
// console.log('Hello world');
// console.log(1994);
// console.log(true);
// var greeting = 'hello';
// console.log(greeting);
// console.log(1,2,3,4);
// console.log({a:1, b:2});
// console.table({a:1, b:2});
// console.error("Error expected");//error appears Red
// console.clear();
// console.warn('this is a warning');//warning appears yellow
// console.time('Hello');
// console.log('Hello world');
// console.log('Hello world');
// console.log('Hello world');
// console.log('Hello world');
// console.log('Hello world');
// console.log('Hello world');
// console.timeEnd('Hello');
// //variables (var, let, const)
// var name = 'Kurt Miller';  //using var or let you can reassign variables
// console.log(name);         //outputs Kurt Miller
// name = 'steve smith';       
// console.log(name);         //outputs steve smith

// //init var
// var greeting
// greeting = 'hello';
// console.log(greeting);

// //variables can include letters, numbers, _, and $
// //cannot start with a number!
// //camelCase (multi word variables)
// var firstName = 'john'; //cameCase
// var first_name = 'john'; //underscore
// var Firstname = 'john'; //Pascalcase good practice to use for creating Classes and Constructors

//highlight all code and CTRL+ / comments everything out
// let name; //easier to make temporary changes
// name = 'Kurt Miller';  //using var or let you can reassign variables
// console.log(name);         //outputs Kurt Miller
// name = 'steve smith';       
// console.log(name);

//const is permanent
// const name = 'Kurt';
// console.log(name);
//cannot reassign
// have to assign a value

// const person = { // object
//     name: 'john',
//     age: 30,
//     desc: 'Young Male'
// }
// person.name = 'Sara';
// person.age = 32;
// console.log(person);

// const numbers = [1,2,3,4,5]; //set number array
// numbers.push(6,7,8,9); //pushes numbers and adds to array
// console.log(numbers);

// Primitive Data types
// string
// const name = 'John Doe';
// //number
// const age = 45;
// // boolean
// const hasKids = true;
// // null
// const car = null;
// // undefined
// let test;
// // symbole
// const sym = Symbol();
// console.log(typeof name, typeof age, typeof hasKids, typeof car, typeof test, typeof sym);

// Referance Data types
//Array
// const hobbies = ['movies', 'music']
// // object literal
// const address = {
//     address1: '29 Beechwood',
//     city: 'Philadelphia',
//     state: 'PA',
//     zipCode: 19355
// }

// console.log(address);


// // Number to string
// let val;
// val = String(555);
// val = String(4+4);
// //Boolean to string
// val = String(true);
// //Date to string
// val = String(new Date());
// // Array
// val = String([1,2,3,4]);

// // to string method
// val = (5).toString();
// val = (true).toString();

// //String to numbers
// val = Number('5');
// val = Number(true); //1
// val = Number(false); //0
// val = Number(null); //0
// val = Number('hello'); //NaN (Not a Number)

// //Parse int
// val = parseInt('100');
// val = parseFloat('100.30');

// //output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed());

//Type Coersion
// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1 + val2);

// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 50;
// let val;
// //simple Math
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.8);
// val = Math.ceil(2.4);//round up
// val = Math.floor(2.9);//round down
// val = Math.sqrt(64);
// val = Math.abs(-5);
// val = Math.pow(8, 2);
// val = Math.min(2, 33, 64, 1, 99, 8);
// val = Math.max(-2, 100, 99, 5, 36, 1000);
// val = Math.random();//prodcues a random number (with decimals)
// val = Math.floor(Math.random() * 20 + 1);//Random number between 1 and 20 (whole numbers)

// console.log(val);

// const firstName = 'William';
// const lastName = 'Miller';
// const age = 25;
// const str = 'Hello there My name is Kurt';
// const tags = 'web design,web development,programming';

// let val;
// val = firstName + lastName;

// //Concatenation (spacing words)
// val = firstName + ' ' + lastName;

// //Append (addon)
// val = 'Kurt ';
// val += 'Miller';

// val = 'Hello, My name is ' + firstName + ' and i am ' + age;

// //Escaping
// val = 'That\'s awesome, I can\'t wait'; 

// // length
// val = firstName.length;

// //concat
// val = firstName.concat(' ', lastName);

// // Change Case
// val = firstName.toUpperCase();
// val = lastName.toLowerCase();

// val = firstName[1];

// //indeOf()
// val = firstName.indexOf('m');
// val = firstName.lastIndexOf('l');

// //char at
// val = firstName.charAt('2');
// // Get last character
// val = firstName.charAt(firstName.length - 1);

// //Get substring
// val = firstName.substring(0, 4);

// //slice
// val = firstName.slice(0,4);
// val = firstName.slice(-3);

// //split string to array
// val = str.split(' ');
// val = tags.split(',');

// //replace
// val = str.replace('Kurt', 'Brad');

// //includes()
// val = str.includes('Hello');

// console.log(val);

// const name = 'Kurt';
// const age = 25;
// const job = 'Programmer';
// const city = 'Philadelphia';
// let html;

// //Without template strings (es5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '<li>City: ' + city + '</li></ul>';

// html = '<ul>' +
//        '<li>Name: ' + name + '</li>' +
//        '<li>Age: ' + age + '</li>' +
//        '<li>Job: ' + job + '</li>' +
//        '<li>City: ' + city + '</li>'+
//        '</ul>';

// function hello(){
//     return 'hello';
// }
// //Template Strings
// html = `
//  <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${2+2}</li>
//     <li>${hello()}</li>
//     <li>${age > 30 ? 'Over 30' : ' Under 30'}</li>
// </ul>
//  `;
// document.body.innerHTML = html;

//Create arrays
// const numbers = [43,56,33,23,44,36,5];
// const numbers2 = new Array(22,44,33,76,54);
// const fruit  = ['apple', 'banana', 'organg', 'pear'];
// // const mixed = [22, 'is', true, undefined, null, {a:1, b:1}, new Date()];

// // console.log(numbers, numbers2, , mixed);

// let val;

// //get array length
// val = numbers.length;
// // check if is array
// val = Array.isArray(numbers);
// // Get a single value
// val = numbers[3];
// val = numbers[0];
// // instert into array
// numbers[2] = 100;
// // find index of value
// val = numbers.indexOf(36);

//MUTATING ARRAYS
//add on to end of existing array
// numbers.push(250);
// //add on to front of array
// numbers.unshift(120);
// //take off from end
// numbers.pop();
// //take off from front
// numbers.shift();
// //splice out values
// numbers.splice(1,3);
// //Reverse
// numbers.reverse();
// //End mutating arrays

//concatenate array
// val = numbers.concat(numbers2);

// //sort array
// val = fruit.sort();
// // val = numbers.sort();

// // //user the "compare function"
// // val = numbers.sort(function(x, y){
// // return x-y;
// // });
// // //reverse sort
// // val = numbers.sort(function(x, y){
// //     return y-x;
// // });

// //Find 
// function over50(num){
//     return num > 50;
// }

// val = numbers.find(over50);

// console.log(numbers);
// console.log(val);

// const person = {
//     firstName: 'Kurt',
//     lastName: 'Miller',
//     age: 25,
//     email: 'kurtmilla1994@gmail.com',
//     hobbies: ['music', 'sports', 'golf'],
//     address: {
//         city: 'Philadelphia',
//         state: 'PA'
//     },
//     getBrithYear: function(){
//         return 2019-this.age;
//     }
// }

// let val;

// val = person;
// //Get specific value
// val = person.lastName;//prefferred method
// val = person['firstName'];
// val = person.age;
// val = person.hobbies;
// val = person.address.state;
// val = person.getBrithYear();

// console.log(val);

// const people = [
//     {name: 'john', age: 30},
//     {name: 'Joe', age: 15},
//     {name: 'Nancy', age: 40},
// ];

// for(let i = 0; i < people.length; i++){
//     console.log(people[i].name);
// }

// /*********************
// *****DATES AND TIMES**/
// let val;
// const today = new Date();
// let birthday = new Date('1-7-1994 11:30:15');
// birthday = new Date('January 7 1994');
// birthday = new Date('1/7/1994');

// val = today.getMonth();//Months are 0 based (January = 0)
// val = today.getDate(); 
// val = today.getDay();//Days are 0 based (Sunday = 0)
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setYear(1999);
// birthday.setTime(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);

// console.log(birthday);
// /********END***********
// ***DATES AND TIMES****/

//SWITCHES faster than if else statements
// const color = 'blue';

// switch(color){
//     case 'red':
//     console.log('Color is Red');
//     break;
//     case 'blue':
//     console.log('Color is Blue');
//     break;
//     default:
//     console.log('Color is not Red or Blue');
//     break;
// }

// let day;
// switch(new Date().getDay()){
//     case 0:
//     day = 'sunday';
//     break;
//     case 1:
//     day = 'monday';
//     break;
//     case 2:
//     day = 'Tuesday';
//     break;
//     case 3:
//     day = 'Wednesday';
//     break;   
//     case 4:
//     day = 'Thursday';
//     break;    
//     case 5:
//     day = 'Friday';
//     break;    
//     case 6:
//     day = 'Saturday';
//     break;
// }

// console.log(`Today is ${day}`);

//FUCNTION DECLARATION
// function greet(userName = 'John', lastName = 'Doe'){
//     //console.log('Hello');
//     return 'Hello ' + userName + ' ' + lastName; 
// }

// //console.log(greet());
// //FUCNTION EXPRESSIONS
// const square = function(x = 3){
//     return x*x;
// };

// //console.log(square());

// //Immidiately invokable function expressions - IIfes

// (function(name){
//     console.log('Hello '+ name);
// })('Brad');

//Property Methods
// const todo = {
//     add: function(){
//         console.log('Add todo..');
//     },
//     edit: function(id){
//         console.log(`Edit todo ${id}`);
//     }
// }

// todo.delete = function(){
//     console.log('Delete todo...');
// }

// todo.add();
// todo.edit(25);
// todo.delete();

//LOOPS and ITERATIONS
//Loop through array
//  const cars = ['Ford', 'Chevy', 'Dodge', 'Jeep'];


// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// FOR EACH()
// cars.forEach(function(car, index){
//     console.log(`${index} : ${car}`);
// });

//MAP
// const users = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Sara'},
//     {id: 3, name: 'Karen'},
//     {id: 4, name: 'Steve'}
// ];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);

// FOR IN LOOP
// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 40
// }
// for(let x in user){
//     console.log(`${x} : ${user[x]}`);
// }

//prompt
// const input = prompt();
// alert(input);

//Confirm
// if(confirm('Are you sure')){
//     console.log('YES');
// } else {
//     console.log('NO');
// }

let Val;
//OUTER HEiGHT and Width
val = window.outerHeight;
val = window.outerWidth;


// Scroll Points
val = window.scrollY;

// Location object
val = window.location;
val = window.location.hostname;
val = window.location.search;

// //redirect
// window.location.href = 'http://google.com';
// //reload
// window.location.reload();
console.log(val);
