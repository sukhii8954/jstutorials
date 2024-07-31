
// ways to declare number type of variable 

const score = 200;
//  console.log(score);   // output: 200
const bal = new Number(300);
// console.log(bal);      //output:  [Number: 300]
// can convert number into string 
// console.log(bal.toString().length);

// can fix zeros after decimal by using tofixed method 
// console.log(bal.toFixed(2));   // 300.00 as we fixed upto 2 zeros

const num = 32.656;

// to get precise value and upto how much digits 

// console.log(num.toPrecision(3));

// when if we want to make larger number readable in indian std.

const anothernum = 100000000;
// console.log(anothernum.toLocaleString('en-IN')); // 10,00,00,000

// to see max value and min value or any other value related to number in js 
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.EPSILON);

// #################  maths   #######################

// console.log(Math.abs(-56)); // to get absolute value and it converts -ve to +ve
// console.log(Math.round(5.666)); //round off the value

// we can choose if round off to upper value or to lower value

// console.log(Math.floor(4.2)); //gets the lower round off value 4
// console.log(Math.ceil(5.1)); // even a little larger value in points converts 5.something into 6

// console.log(Math.sqrt(25)); // to find squre root of some value 

// console.log(Math.min(3,5,2,20,-3));// finds minimum value
// console.log(Math.max(4,7,100,2,10)); //finds maximum value


// main use of Math method :- 

// console.log(Math.random());  // gets value between 0 and 1
// console.log((Math.random()*10)+1); // gets between 1 to 10 min value = 1 not 0
// console.log(Math.random()*100);  //between 1 to 100

// console.log(Math.floor(Math.random()*10)); // floor value b/w 1 to 10

const min =10;
const max = 20;

// between 10 to 20  , 10 included and get b/w the range 
console.log(Math.floor(Math.random()* (max-min + 1))+min);  