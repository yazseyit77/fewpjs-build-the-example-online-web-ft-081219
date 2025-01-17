// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
var myElement = document.querySelectorAll("footer > ul > li > span");

myElement.forEach(element => {
  element.onclick = function (e) {
    if (element.innerText === EMPTY_HEART) {
      element.innerText = FULL_HEART;
      element.style.color = "red";
      // console.log('tikladi')
    } else {
      element.innerText = EMPTY_HEART;
      // console.log('tikladi2')
    }
  }
})

// myElement.onclick = function (e) {
//   if (myElement.innerText === EMPTY_HEART) {
//     this.innerText = FULL_HEART;
//     // console.log('tikladi')
//   } else {
//     this.innerText = EMPTY_HEART;
//     // console.log('tikladi2')
//   }
// }


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
