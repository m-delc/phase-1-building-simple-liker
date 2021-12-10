// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


// document.addEventListener("DOMContentLoaded", () =>{
//   document.addEventListener('click', EMPTY_HEART =>{

//   })

// }



// mimicServerCall(EMPTY_HEART)





// setTimeout(() => document.getElementById("modal").hidden, 3000); 


// document.getElementById("modal").hidden = true;


// document.addEventListener('click', EMPTY_HEART) 

// const userAction = document.addEventListener()

// const emptyHeart = mimicServerCall

// const modal = document.getElementById('modal')
// modal.className = hidden






// function testFunc() {
//   let likes = document.getElementsByClassName('like')
//   for (let el of likes) {
//     el.addEventListener('click', () => {
//       const heart = el.getElementsByTagName('span')[0]
//       const modal = document.getElementById('modal')
//       const modalMessage = document.getElementById('modal-message')

//       if (heart.textContent === FULL_HEART) {
//         heart.textContent = EMPTY_HEART
//         heart.classList.remove('activated-heart')
//         return
//       }

//       mimicServerCall()
//       .then(() => {
//         heart.classList.add('activated-heart')
//         heart.textContent = FULL_HEART
//       })
//       .catch(error => {
//         modal.classList.remove('hidden')
//         modalMessage.textContent = error 

//         setTimeout(() => {
//           modal.classList.add('hidden')
//         }, 5000)
//       })
//     })
//   }
// }





// this works, don't delete
// this works, don't delete
// this works, don't delete
// this works, don't delete
// this works, don't delete
document.addEventListener('DOMContentLoaded', () => {
  const clickEmptyHeart = document.querySelector('.like-glyph')
  clickEmptyHeart.forEach(heart => heart.addEventListener('click', func1))
})

function func1(e){
  mimicServerCall()
  .then(() => {
    const heart = e.target
    if (heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART
      heart.classlist.add('activated-heart')
    }
    else if (heart.innerText === FULL_HEART){
      heart.innerText = EMPTY_HEART
      heart.classList.remove('activated-heart')
    }
  })
  .catch(error => {
    const modal = document.getElementById('modal')
    const modalMsg = document.getElementById('modal-message')
    modal.classList.remove('hidden')
    modalMsg.innerText = error
    setTimeout(() => {
      modal.classList.add('hidden')
    }, 3000)
  })
}
// this works, don't delete
// this works, don't delete
// this works, don't delete
// this works, don't delete
// this works, don't delete






// // 12-3 reattempt 

// document.querySelector('DOMContentLoaded', () => {
//   const clickEmptyHeart = document.querySelector('span#like-glyph')
//   clickEmptyHeart.forEach(heart => )

// })




















//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
