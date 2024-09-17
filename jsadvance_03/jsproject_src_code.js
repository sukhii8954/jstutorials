// ## project 1  


// javascript code
// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach((b) => {
//   // console.log(b);
//   b.addEventListener('click', (e) => {
//     // console.log(e);
//     // console.log(e.target.id);

//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     } else if (e.target.id === 'white') {
//       body.style.backgroundColor = e.target.id;
//     } else if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     } else if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     } else if (e.target.id === 'purple') {
//       body.style.backgroundColor = e.target.id;
//     }
//   });
// });

// ************************************************


// ## PROJECT 2 

// const forms = document.querySelector('form');

// // preventing the default action of form submission
// forms.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const height = parseInt(document.querySelector('#height').value);
//   const wgt = parseInt(document.querySelector('#weight').value);
//   const result = document.querySelector('#results');
//   const msg = document.querySelector("#msg");
//   if (height === '' || height < 0 || isNaN(height)) {
//     result.innerHTML = `Please give a valid height ${height}`;
//   } else if (wgt === '' || wgt < 0 || isNaN(wgt)) {
//     result.innerHTML = `Please give a valid weight ${wgt}`;
//   } else {
//     const bmi = (wgt / ((height * height) / 10000)).toFixed(2);
//     // showing the result calculated
//     result.innerHTML = `<span>${bmi}</span>`;
    
    
// //     determining the Bmi category
//   if(bmi < 18.6){ 
//       msg.innerHTML= `<h3>Underweight :(</h3>`
//   } else if(bmi >= 18.6 && bmi<=24.9){
//      msg.innerHTML= `<h3>Normal Range :)</h3>`
//  } else{
//      msg.innerHTML= `<h3>Overweight :/</h3>`
//  }
// }

 
// });


// ## PROJECT 3 Digital clock()

// HTML CODE:- 
{/* <title>Your Local Time</title>
{/* <div class="center">
      <div id="banner"><span>Your local time</span></div>
      <div id="clock"></div>
    </div>
    <script src="chaiaurcode.js"></script>
  </body> */}

//   css styling code:- 

{/* <style>
  body {
    background-color: #212121;
    color: #fff;
  }
  .center {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  #clock {
    font-size: 40px;
    background-color: orange;
    padding: 20px 50px;
    margin-top: 10px;
    border-radius: 10px;
  }
</style> */}

// JAVASCRIPT CODE :- 

// const time = document.getElementById("clock");
// // const time = document.querySelector('#clock');



// setInterval(()=> {
//   let date = new Date()
//   // console.log(date.toLocaleTimeString()); 
//   time.innerHTML=date.toLocaleTimeString();  
// },1000)  // 1000 = 1 sec


// *********************************

// ## PROJECT 4 :- guess a random number 

// html source code :- 

{/* <div id="wrapper">
<h1>Number guessing game</h1>
<p>Try and guess a random number between 1 and 100.</p>
<p>You have 10 attempts to guess the right number.</p>
</br>
  <form class="form">
      <label2 for="guessField" id="guess">Guess a number</label>
      <input type="text" id="guessField" class="guessField">
      <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
  </form>

  <div class="resultParas">
      <p >Previous Guesses: <span class="guesses"></span></p>
      <p >Guesses Remaining: <span class="lastResult">10</span></p>
      <p class="lowOrHi"></p>
  </div>
</div> */}


// CSS style code :- 
// html {
//   font-family: sans-serif;
// }

// body {
//   width: 300px;
//   max-width: 750px;
//   min-width: 480px;
//   margin: 0 auto;
//   background-color: #212121;
// }

// .lastResult {
//   color: white;
//   padding: 7px;
// }

// .guesses {
//   color: white;
//   padding: 7px;
// }

// button {
//   background-color: #141414;
//   color: #fff;
//   width: 250px;
//   height: 50px;
//   border-radius: 25px;
//   font-size: 30px;
//   border-style: none;
//   margin-top: 30px;
//   /* margin-left: 50px; */
// }

// #subt {
//   background-color: #161616;
//   color: #ffffff;
//   width: 200px;
//   height: 50px;
//   border-radius: 10px;
//   font-size: 20px;
//   border-style: none;
//   margin-top: 50px;
//   /* margin-left: 75px; */
// }

// #guessField {
//   color: #000;
//   width: 250px;
//   height: 50px;
//   font-size: 30px;
//   border-style: none;
//   margin-top: 25px;

//   /* margin-left: 50px; */
//   border: 5px solid #6c6d6d;
//   text-align: center;
// }

// #guess {
//   font-size: 30px;
//   /* margin-left: 90px; */
//   margin-top: 120px;
//   color: #fff;
// }

// .guesses {
//   background-color: #7a7a7a;
// }

// #wrapper {
//   box-sizing: border-box;
//   text-align: center;
//   width: 450px;
//   height: 550px;
//   background-color: #474747;
//   color: #fff;
//   font-size: 25px;
// }

// h1 {
//   background-color: #161616;

//   color: #fff;
//   text-align: center;
// }

// p {
//   font-size: 16px;
//   text-align: center;
// }


//  #newGame {
//   border: 2px solid red;
//   cursor: pointer;
//   width: 200px;
//   height: 41px;
//   margin: auto;
//   display: flex;
//   align-items: center;
// }


// JAVASRIPT  code :- 

// let randomNumber = parseInt(Math.random() * 100 + 1);

// let submit = document.querySelector('#subt');
// let userInput = document.querySelector('#guessField');

// let preGuesses = document.querySelector('.guesses');

// let remainingGuesses = document.querySelector('.lastResult');

// let loworhigh = document.querySelector('.lowOrHi');

// let startOver = document.querySelector('.resultParas');

// const p = document.createElement('p');

// let prevGuess = [];

// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//   submit.addEventListener('click', (e) => {
//     // it is a form so on submit value can run where it is getting call or on server, so we prevent getting that going somewhereelse as we need here
//     e.preventDefault();
//     const guess = parseInt(userInput.value);

//     validateGuess(guess);
//   });
// }

// function validateGuess(guess) {
//   // checking a user enter a valid number or not
//   if (isNaN(guess)) {
//     alert('Please enter a valid Number');
//   } else if (guess < 1) {
//     alert('Please enter a Number greater than 1');
//   } else if (guess > 100) {
//     alert('Please enter a Number less than 100');
//   } else {
//     // pushing guessed number in array to display to user that enter by it.
//     prevGuess.push(guess);
//     if (numGuess === 11) {
//       displayGuess(guess);
//       displayMsg(`Game Over. Random number was${randomNumber}`);
//       endGame();
//     } else {
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   // checking number is equal to random number or not and check higher or lower and based on that displaying msg

//   if (guess === randomNumber) {
//     displayMsg(`you guessed the right Number!!`);
//     endGame();
//   } else if (guess < randomNumber) {
//     displayMsg(`Number is Too low`);
//   } else if (guess > randomNumber) {
//     displayMsg('Number is Too high');
//   }
// }

// function displayGuess(guess) {
//   //update guess remaining

//   // clean the value to enter new value
//   userInput.value = '';

//   // update prev guess and show on DOM
//   preGuesses.innerHTML += `${guess},  `;
//   // number of chances update krenge idhr 
//   numGuess++;
//   // decrementing guesses when 
//   // person did 1 guess then doing minus from 11 as we had assigned 10 chances only  
//   remainingGuesses.innerHTML=`${11-numGuess}`;
// }

// function displayMsg(msg) {
//   //DOM manipulation
//   // display msg on DOM by passing msg in loworHigh
//   loworhigh.innerHTML = `<h3>${msg}</h3>`
// }

// function endGame() {
//   // when chances finished input get empty and disabled so that person can't enter new values
//   userInput.value = '';
//   userInput.setAttribute('disabled','');
//   // adding new button to the paragraph it will display when game end and we want to start a new game
//   p.classList.add('button');
//   p.innerHTML = '<h2 id= "newGame">Start new Game</h2>';
//   startOver.appendChild(p)
//   playGame = false
//   newGame();
// }
// function newGame() {
//   //
//   const newgamebtn= document.querySelector('#newGame')
//   newgamebtn.addEventListener('click',(eve)=>{
//    randomNumber=parseInt(Math.random() * 100 + 1);
//    prevGuess = [];
//    numGuess = 1
//    preGuesses.innerHTML=''
//    remainingGuesses.innerHTML= `${11-numGuess}`;
//    userInput.removeAttribute('disabled')
//    startOver.removeChild(p)
//     playGame=true
//   });
// }

