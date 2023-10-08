//copy menu for mobile
function copyMenu() {
    //copy .dpt-cat to .departments
     var dptCategory = document.querySelector('.dpt-cat');
     var dptPlace = document.querySelector('.departments');
     dptPlace.innerHTML = dptCategory.innerHTML;
    
     var mainNav = document.querySelector('.header-nav nav');
     var navPlace = document.querySelector('.off-canvas nav')
     navPlace.innerHTML=mainNav.innerHTML;

     //copy .header-top .wrapper to .thetop-nav 
     var topNav = document.querySelector('.header-top');
     var topPlace = document.querySelector('.off-canvas .thetop-nav')
     topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//show mobile menu
const menuButton = document.querySelector('.trigger'),
      closeButton = document.querySelector('.t-close'),
      addclass = document.querySelector('.site');
menuButton.addEventListener('click', function(){
      addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function(){
    addclass.classList.remove('showmenu')
})

const submenu = document.querySelector('.a-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click'. toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.a-child').classList.remove('expand') : null);
    if (this.closest('.a-child').classList !='expand');
    this.closetst('.a-child').classList.toggle('expand')
}

//slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

  });

const searchButton = document.querySelector('.t-search'),
     tClose =  document.querySelector('.search-close');
     showClass = document.querySelector('.site');
searchButton.addEventListener('click',function(){
  showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click',function(){
  showClass.classList.remove('showsearch')
})

