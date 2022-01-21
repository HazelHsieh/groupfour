//map 
let allPath = document.querySelectorAll('.all-path');
allPath.forEach(function (path) {
  path.addEventListener('click', function (e) {
    reset()
    e.target.classList.add('clicked')
  })
})
function reset() {
  allPath.forEach(function (path) {
    path.classList.remove('clicked')
  })
}
allPath[5].classList.add('clicked');


const tabBtns = document.querySelectorAll('.tab');
let guideContents = document.querySelectorAll('.guide-content');
// guideContents[0].classList.remove('guide-content-none');
let contents = document.querySelectorAll('.content');
contents[0].classList.remove('content-none');



tabBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    contentsReset()
    let datatype = this.dataset.type
    guideContents = document.querySelectorAll('.guide-content');
    guideContents.forEach(function (guideContent) {
      guideContent.classList.add('guide-content-none')
      if (guideContent.dataset.type == datatype) {
        guideContent.classList.remove('guide-content-none')
      }
      guideContent.addEventListener('click', function (e) {
        guideContentType = e.target.dataset.type;
        contents.forEach((content) => {
          if (content.dataset.type == guideContentType) {
            content.classList.remove('content-none')
            guideContent.classList.add('guide-content-none')
          }
        })

      })
    })
  })
});
function contentsReset() {
  contents.forEach((content) => {
    content.classList.add('content-none')
  })
}


//map 
// let allPath = document.querySelectorAll('.all-path');
// allPath.forEach(function (path) {
//   path.addEventListener('click', function (e) {
//     reset()
//     e.target.classList.add('clicked')
//   })
// })
// function reset() {
//   allPath.forEach(function (path) {
//     path.classList.remove('clicked')
//   })
// }

// const tabBtns = document.querySelectorAll('.tab');
// let guideContents = document.querySelectorAll('.guide-content');
// // guideContents[0].classList.remove('guide-content-none');
// let contents = document.querySelectorAll('.content');
// // contents[0].classList.remove('content-none');


// tabBtns.forEach((btn) => {
//   btn.addEventListener('click', function () {
//     let datatype = this.dataset.type
//     guideContents = document.querySelectorAll('.guide-content');
//     guideContents.forEach(function(guideContent){
//       guideContent.classList.add('guide-content-none')
//       if(guideContent.dataset.type == datatype) {
//         guideContent.classList.remove('guide-content-none')
//         // console.log(guideContent);
//       }
//     })
//   })
// });




// const tabBtns = document.querySelectorAll('.tab');
// let guideBtns = document.querySelectorAll('.guide-content');

// guideBtns.forEach((e) => {
//   e.addEventListener('click', function () {
//     let datatype = this.dataset.type
//     contents = document.querySelectorAll('.content');
//     contents.forEach(function(content){
//       content.classList.add('content-none')
//       if(content.dataset.type == datatype) {
//         content.classList.remove('content-none')
//       }
//     })
//   })

// });


