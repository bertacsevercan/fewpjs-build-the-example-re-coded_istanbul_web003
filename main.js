// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likes = document.querySelectorAll(".like-glyph");
const hidden = document.querySelector("#modal");
likes.forEach(like => {
  like.addEventListener("click", function(e){
    mimicServerCall()
    .then(function(resolve){
       console.log(resolve);
       like.innerText = FULL_HEART;
       if(like.className === "like-glyph"){
         like.className = "activated-heart";
       }
       else{
         like.className = "like-glyph";
         like.innerText = EMPTY_HEART;
       }
      
    })
    
    .catch(function(reject){
      console.log(reject);
      hidden.setAttribute("class", "");
      setTimeout(function() {hidden.setAttribute("class", "hidden")}, 5000);
      

    })
  })
})




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
