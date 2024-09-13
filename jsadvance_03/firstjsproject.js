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

// ## PROJECT 4 :- 