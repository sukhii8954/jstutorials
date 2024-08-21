
// console.log(window.document) shows only html body of that window document
// if we use (dir = directory) console.dir(window.document) , if want more information about that page.

// with DOM mamupulation we can get Document ID and can change context , modify it , can add new elements , we can do filtering also  
// Example:- in js
// document.getElementById('idname').innerHTML = "whatever we want to do here"


// difference between innerText and innerContent :- 
  
const val = document.getElementById("title")
val.innerText 
val.innerContent

 val.innerText 
 // output 
//  it show that is displayed on UI only
 'DOM with chai aur code'
 val.textContent
 //output :- it show all the content written in html content 
 'DOM with chai aur code text content'

val.innerHTML
// output 
// it shows even the html text also 
'DOM with chai aur code <span style="display: none;">'
'text content </span>'


/* ******************* querySelector *****************

--> It is used to select a first element from a document ,
 which can be id or class or by any css selector .

--> It can used to select first element within a document 
that matches a specific css selector.

--> After getting reference to an element using queryselector
 we can perform various operations on it, such as modifying
 its content, attributes, or styles.

--> can attach event listeners to elements selected with 
 querySelector to respond to user interactions, like clicks,
mouseovers, or form submissions.

*/ 



/* we can change the style and innetext for example:-

 document.querySelector('ul')
 <ul>​…​</ul>​ 

 const myul = document.querySelector('ul')
 undefined

 myul.querySelector('li')
 <li>​…​</li>​

 const myfirstli = myul.querySelector('li')
 undefined

 myfirstli.style.color
 ''

 myfirstli.style.color="red"
 'red'

 myfirstli.style.padding="10px"


  myfirstli.style.backgroundColor="purple" 
  'purple' 

  myfirstli.innerText="seven"
 'seven'

 */


 /*  ****************** ( QuerySelectrAll) ****************

//  ( To Select multiple elements we use  this)
  
 const templi  =document.querySelectorAll( 'li')
 // it selects all the list and it is like an array that is NodeList.


NodeList(3) [li, li, li]
0: li1: li2: lilength: 3[[Prototype]]


templi[0].style.color = 'red'
// we also select like an array element , by writing index number with it


const myh1 = document.querySelectorAll('h1')
// selecting all heading in the doucment 


NodeList [h1#title.Heading]0: h1#title.Headinglength: 1[[Prototype]]: NodeList
myh1[0].style.color= 'red'

 
 */
