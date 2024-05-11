const theBody = document.querySelector('body');
const openNav = document.querySelector('.menu-bar button');
const closeNav = document.querySelector('.close-nav button');
const Navbar = document.querySelector('.navbar');

// Function to handle body scroll behavior when the mobile navigation menu opens and closes
function bodyScroll() {
    // If the navigation bar is shown, hide the body scroll by adding 'hide-scroll' class to the body
    if (Navbar.classList.contains('show')) {
        theBody.classList.add('hide-scroll');
    } 
    // If the navigation bar is hidden and 'hide-scroll' class is present in the body, remove it to show the body scroll
    else if (theBody.classList.contains('hide-scroll')) {
        theBody.classList.remove('hide-scroll');
    }
}

// Function to toggle the visibility of the navigation bar and handle body scroll accordingly
function showHide() {
    Navbar.classList.toggle('show'); // Toggling the 'show' class on the navigation bar
    bodyScroll(); // Calling bodyScroll function to handle body scroll behavior
}

// Attaching event handlers to openNav and closeNav buttons to trigger the showHide function when clicked
openNav.onclick = showHide;
closeNav.onclick = showHide;

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

// Returns true if the specified element has been scrolled into the viewport.
function isElementInViewport(elem) {
    var rect = elem.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkAnimation() {
    var $aboutUs = $('.about-us');
    var $elem = $aboutUs[0];

    // Obtener la posición del div about-us en relación con el viewport
    var rect = $elem.getBoundingClientRect();

    // Calcular la posición del div about-us en relación con el viewport
    var isAbove = rect.bottom <= 0;
    var isBelow = rect.top >= window.innerHeight;

    // Si nos estamos acercando al div about-us desde arriba (hacia abajo)
    if (!isAbove && !isBelow) {
        // Agregar la clase myanimation solo cuando nos acercamos al div desde arriba
        $aboutUs.addClass('animation-1');
    } else {
        // Quitar la clase myanimation cuando nos alejamos del div
        $aboutUs.removeClass('animation-1');
    }
}

$(window).scroll(function(){
    checkAnimation();
});