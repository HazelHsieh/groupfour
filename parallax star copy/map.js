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

const tabBtns = document.querySelectorAll('.tab');
let contents = document.querySelectorAll('.content');
// contents[0].classList.remove('content-none');

tabBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    let datatype = this.dataset.type
    contents = document.querySelectorAll('.content');
    contents.forEach(function (content) {
      content.classList.add('content-none')
      if (content.dataset.type == datatype) {
        content.classList.remove('content-none')
      }
    })
  })

});
