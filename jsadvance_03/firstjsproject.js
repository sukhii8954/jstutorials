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


// ## PROJECT 3
