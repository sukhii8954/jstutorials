

// task 1 - 

  //  const sayDate = (str) => {
  //    console.log(str , Date.now());
  //  }
  // //  const intervalId= setInterval( sayDate,1000 ,"hi")


  //   document.querySelector("#start").addEventListener('click', ()=>{
  //          const intervalId= setInterval( sayDate,1000 ,"hi")
            
  //           document.querySelector("#stop").addEventListener('click',()=>{
  //              clearInterval(intervalId);
  //           })
  //   })


  // task 2 - 

    // let intervalId;
    //  const randomColor = ()=> {
    //      const hex = "0123456789ABCDEF"
    //      let color = "#"

    //      for(let i = 0 ; i< 6 ; i++){
    //        color +=  hex[Math.floor(Math.random() * 16)];  // positions of color
    //       }
    //       return color;
    //  };
    // //  console.log(randomColor());

    //      const start = ()=> {

    //         if(!intervalId){  // if interval id is 0 then we add some value to it
    //           intervalId =  setInterval(changeBgColor, 2000)
    //         }
    //        const changeBgColor = ()=>{
    //          document.body.style.backgroundColor =randomColor();
    //         };
    //      }
          
           
    //       const stopChangeBgColor = ()=> {
    //              clearInterval(intervalId);
    //              intervalId = null;
    //       }

        
    //     document.querySelector("#start").addEventListener('click',start);

    //     document.querySelector("#stop").addEventListener('click',stopChangeBgColor);
     
      
               
      // task 3 - 

// const insert = document.getElementById('insert');
// window.addEventListener('keydown', (e) => {
//   insert.innerHTML = `
//   <div class='color'>
//   <table>
//   <tr>
//     <th>Key</th>
//     <th>Keycode</th>
//     <th>Code</th>
//   </tr>
//   <tr>
//     <td>${e.key ===' '? 'Space':e.key}</td>
//     <td>${e.keyCode}</td>
//     <td>${e.code}</td>
//   </tr>

// </table>
//   </div>
//   `;
// });



  
