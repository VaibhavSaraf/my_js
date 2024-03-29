
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
 * Turnury operator
 

var firstName = 'John';
var age = 16;
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch statement
var job = prompt('what is your job?');
switch(job){
    case 'teacher':
        console.log('its teacher');
        break;
    case 'driver':
        console.log('its driver');
        break;
    case 'designer':
        console.log('its designer');
        break;
    default:
        console.log('its default');
}
*/

/************************
 * Truthy and falsy values and equality operators
 */

//falsy values : undefined, null, 0, '',NaN

/* truthy values: NOT falsy values
***********************************

var height=23;
if(height || height === 0){
    console.log('variable is defined');
} else {
    console.log('variable has NOT been defined');
}
*/

//  Equality operators
/*
if(height == '23'){
    console.log('The == operator does type coercion!');
}
*/

/*********************************
 * Functions
 

function calculateAge(birthYear){
    return 2020 - birthYear;
}
console.log(calculateAge(1998));

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement>0){
        console.log(firstName + ' retires in '+ retirement+ ' years.');
    } else{
        console.log(firstName + ' is already retired.')
    }
    
}

yearsUntilRetirement(1997,'Vaibhav');
yearsUntilRetirement(1951,'Pratiksha');
*/

/*********************
 * Function Statements and Expression
 
//Function declaration

//Function Expression
var whatDoYouDo = function (job, firstName){
    switch(job) {
        case 'teacher' : 
            return firstName + ' teaches kids how to code';
        case 'driver' :
            return firstName + ' drives uber';
        case 'designer' :
            return firstName + ' designs websites';
        default :
            return firstName + ' does nothing!!!';
    }
}
console.log(whatDoYouDo('teacher', 'Vaibhav'));
*/

/**********************************************
 * Arrays

var names = ['Vaibhav', 'Pratiksha', 'Pranav'];
var years = new Array(1990,1969,1948);
names[2] = 'Yash' ;
names[names.length]='Sanam'
console.log(names);

// Different data types

var saraf = ['Vaibhav','Smith',1998,'teacher',true];

saraf.push('blue');
console.log(saraf);
saraf.unshift('Mr.');
console.log(saraf);

saraf.pop();
console.log(saraf);
saraf.pop();
saraf.pop();
console.log(saraf);
var saraf = ['Vaibhav','Smith',1998,'teacher',true];
console.log(saraf);
saraf.shift();
console.log(saraf);
var saraf = ['Vaibhav','Smith',1998,'teacher',true];
console.log(saraf.indexOf(23));
var isDesigner=saraf.indexOf('designer') === -1 ? 'Vaibhav is NOT designer' : 'Vaibhav is designer';
console.log(isDesigner);
*/

/******************************************************
 * Objects and properties


var myInfo = {
    firstName: 'Vaibhav',
    lastName: 'Saraf',
    birthYear: 1997,
    family: ['Vaishanvi','Pinu didi','Rucha','Raj'],
    job: 'student',
    isSingle: true
};

console.log(myInfo.firstName);
console.log(myInfo['lastName']);
var x = 'birthYear';
console.log(myInfo[x]);

myInfo.job = 'data scientist';
myInfo['isSingle'] = false;
console.log(myInfo);

var vaishu = new Object();
vaishu.firstName = 'Vaishanvi';
vaishu.Maths = 98;
console.log(vaishu);
 */

/******************************************************
 * Objects and methods
 

var myInfo = {
    firstName: 'Vaibhav',
    lastName: 'Saraf',
    birthYear: 1997,
    family: ['Vaishanvi','Pinu didi','Rucha','Raj'],
    job: 'student',
    isSingle: true,
    calculateAge: function(birthYear){
        return 2020 - this.birthYear;
    }
};

console.log(myInfo.calculateAge());
*/


/******************************************************
 * Loops and Iteration
 */

// console.log('Loops and Iteration');

/**
 * for loop

 var saraf = ['Vaibhav','Smith',1998,'teacher',true];
 for(var i = 0; i<saraf.length;i++){
     console.log(saraf[i]);
 }
*/

/**
 * While loop

var i=0;
while(i<saraf.length){
    console.log(saraf[i]);
     i++;
}
*/
/*
var saraf = ['Vaibhav','Smith',1998,'teacher',true,'blue'];
for(var i = 0;i<saraf.length;i++) {
    if (typeof saraf[i]!=='string') continue ;
    console.log(saraf[i]);
}
*/











