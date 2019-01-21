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