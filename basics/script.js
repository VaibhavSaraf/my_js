
/*
console.log('hello world !!!!');

var firstName = 'Vaibhav';
var lastName = 'Saraf';
var age = 21;

console.log(firstName);
console.log(lastName);
console.log('age: ' + age);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
job = 'Teacher';
console.log(job)
*/

/**************************************
* Variable mutation and type coercion
*/

/*
var firstName = 'Vaibhav';
var age = 21;
console.log(firstName + ' ' +age);

var job, isMarried;
job = 'Student';
isMarried = false;

console.log(firstName+' is a '+ age + ' year old '+ job + '. Is he married? ' + isMarried);

// Variable mutation

age = 'twenty eight';

job = 'driver';

alert(firstName+' is a '+ age + ' year old '+ job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName)
*/

/**************************************************** 
* Basic Operator
*/


/*
// Maths Operator
var now = 2018;
var yearVaibhav = now-18;
var yearPratiksha = now-15;
console.log(yearVaibhav);
console.log(yearPratiksha);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators

var x,y;
x=20;
y=30;

var g = x<y;
console.log(g);

var z;
// typeof operator
console.log(typeof x);
console.log(typeof g);
console.log(typeof 'g');
console.log(typeof z);
*/

/*********************
* operator precedence
*/

var now = 2019;
var yearVaibhav = 1997;
var yearPratiksha = 1999;
var fullAge = 18;

var isFullAge = now - yearVaibhav >= fullAge;
console.log(isFullAge);

var ageVaibhav = now - yearVaibhav;
console.log(ageVaibhav);
var agePratiksha = now - yearPratiksha;
var average = (ageVaibhav + agePratiksha) / 2;
console.log(average);

var x,y;

x=y=(3+5)*4-6;

console.log(x,y);

x = 5;
x += 2;
x++;
console.log(x);















































