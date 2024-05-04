let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// config param
let countItem = items.length;
let itemActive = 0;

// event next click
next.onclick = function() {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
}

//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 6000)

function showSlider() {
  //remove item active old
  let itemActiveOld = document.querySelector('.slider .list .item.active');
  itemActiveOld.classList.remove('active');

  items[itemActive].classList.add('active');
}