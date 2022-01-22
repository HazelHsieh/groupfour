//首頁
const translate = document.querySelectorAll('.translate');
const big_title = document.querySelector('.big-title');
const header = document.querySelector('header');
const shadow = document.querySelector('.shadow');
const content = document.querySelector('.content');
const section = document.querySelector('section');
const image_container = document.querySelector('.imgcontainer');
const opacity = document.querySelectorAll('.opacity');
const border = document.querySelector('.border');


let header_height = header.offsetHeight;
let section_height = section.offsetHeight;



window.addEventListener('scroll', () => {
  //畫面下拉
  let scroll = window.pageYOffset;
  let sectionY = section.getBoundingClientRect();

  translate.forEach(element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });

  opacity.forEach(element => {
    element.style.opacity = scroll / (sectionY.top + section_height);
  })

  big_title.style.opacity = - scroll / (header_height / 2) + 1;
  shadow.style.height = `${scroll * 0.5 + 300}px`;

  content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
  image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

  //裝飾線
  border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})


// 新增文章
const tabElements = document.querySelectorAll('.tab');
const pageElements = document.querySelectorAll('.page');
const contentElements = document.querySelectorAll('.content');



//tabElements.forEach 是按鈕都選一次
//(function (tabElement,index) 元素加index是索引值，對應到contenElemnts，才不會對應不到
tabElements.forEach(function (tabElement, index) {

  //觸發tabElement 監聽事件
  tabElement.addEventListener('click', function () {

    //tabElements.forEach 是按鈕都選一次
    tabElements.forEach(function (tabElement) {

      //
      tabElement.classList.remove('active')
    })
    //tabElemen可以換成this   this指用在addEventListener點擊的時候
    tabElement.classList.add('active');

    //contentElements.forEach 是按鈕都選一次
    contentElements.forEach(function (contentElement) {
      contentElement.classList.remove('active')
    });


    contentElements[index].classList.add('active');
  });
});


