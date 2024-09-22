//  part 2  api request 

// xml request 

 // it is a method through which we can send and recieve data
    //  creating xmlhttpreq 
const xhr = new XMLHttpRequest();
  const requestUrl = 'https://api.github.com/users/hiteshchoudhary';
 // xmlhttprequest creating with open method which takes 2 parameters(method , string)
  xhr.open('GET',requestUrl);    // sending request to access data
     
//  for continous tracking the state of XMLHttpRequest we do this 
   
  xhr.onreadystatechange = function() {
    //  console.log(xhr.readyState);
     if(xhr.readyState===4 && xhr.status === 200){

        // ---> converting string into JSON 
        //  
        // --->  most of the time data response is in the form of string

        // --> data is in converted into JSON = object

        //  console.log(typeof data);
        let data = JSON.parse(this.responseText) 
  
          
        
        const button = document.getElementById('btn')
        const cardDetails = document.getElementById('contain')
        button.innerHTML = 'Button'
        button.style.fontSize = '24px'
        cardDetails.style.display = 'none'

        button.addEventListener('click', ()=>{

            if (cardDetails.style.display === 'none' || cardDetails.style.display === ''){
                cardDetails.style.display = 'block';
            }
            else{
                cardDetails.style.display = 'none'
            }

            // Clear previous card details (to avoid duplication)
            document.getElementById('profile').innerHTML = '';
            document.getElementById('followers').innerHTML = '';
            document.getElementById('para').innerHTML = '';

            const followers = data.followers        
            const about = data.bio
            const avatarUrl = data.avatar_url;
    
            // appending img on UI
            const img = document.createElement('img')
            img.setAttribute('src', avatarUrl)
            document.getElementById('profile').appendChild(img)
    
    
            // appending followers count on UI
            const follows = document.createElement('h3');
            follows.innerHTML = `Followers : ${followers}`;
            document.getElementById('followers').appendChild(follows)
    
            // appending about section on UI
            const p = document.createElement('p')
            p.innerHTML = about
            document.getElementById('para').appendChild(p)
          
       })
        
    }
    }   // it keep the track where it reach the state 2 3 4 
    xhr.send();
    
    
    //   console.log(xhr.readyState); if we do only this it show state 1 only not keep the track of furthur state
    // ---> taking out data which we required from object
    // console.log(data.followers) 
    // console.log(data.avatar_url) 
    // console.log(data.bio) 
    /* when we are talking about currentcontext then we write
    this to that current context */
    // console.log(followers)