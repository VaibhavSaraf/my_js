
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

/*
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
*/
// Coding Challenge 1
/*
var BMIMark,massMark,heightMark;
var BMIJohn,massJohn,heightJohn;

massMark = prompt('Enter the mass of Marks');
heightMark = prompt('Enter the height of Mark');

BMIMark = massMark / (heightMark**2);
console.log(BMIMark);

massJohn = prompt('Enter the mass of John');
heightJohn = prompt('Enter the height of John');

BMIJohn = massJohn / (heightJohn**2);
console.log(BMIJohn);

var compare = BMIMark>BMIJohn;
console.log('Is mark\'s BMI higher than John\'s ? '+compare);
*/

/******************************************
* If/Else Statements

var firstName = 'Vaibhav';
var civilStatus = 'Single';

if (civilStatus === 'Married'){
    console.log(firstName+' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)')
}

var isMarried = true;
if (isMarried){
    console.log(firstName+' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)')
}
*/

/***********************************
 * Boolean logic


var firstName = 'Vaibhav';
var age = 16;
if(age<13){
    console.log(firstName + ' is a boy.')
} else if (age >=13 && age<=20){
    console.log(firstName + ' is a teenager.')
}else{
    console.log(firstName + ' is a man.')
}
 */

/***********************************
 * Boolean logic
 */

var firstName = 'John';
var age = 16;
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);






























