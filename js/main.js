

/* navbar */

let bars = document.querySelector('.open');
let close = document.querySelector('.close');
let menu = document.getElementById('menu');
let close_menu = document.querySelector('.close-menu');

if(bars != null && close_menu != null ){
  bars.addEventListener('click' , ()=>{
    bars.style.display = 'none';
    menu.classList.add('active');
  })

  close_menu.addEventListener('click' , ()=>{
    bars.style.display = 'block';
    menu.classList.remove('active');
  })

  function showBG() {
    let scroll = window.scrollY;
    let isNavTop = scroll < 50;
    let nav = document.getElementById('nav');
    if ( isNavTop) {
      nav.classList.remove('bgShow');
    } else {
      nav.classList.add('bgShow');
    }
  }
  let nav = document.getElementById('nav');
  if(nav != null){
    window.addEventListener('scroll', showBG);
  }


}



let filter = document.querySelectorAll('.filter-btn');


filter.forEach((btn) => {
  btn.addEventListener('click', () => {
      filter.forEach((btn) => {
          btn.classList.remove('active');
      })
      btn.classList.add('active')
  })
})


document.addEventListener("DOMContentLoaded", function () {
  const groupButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".articles .card-main");

  groupButtons.forEach(function (button) {
      button.addEventListener("click", function () {
          const groupToShow = this.value;

          
          cards.forEach(function (card) {
              card.style.display = "none";
          });

          if (groupToShow === "all") {
            
            cards.forEach(function (card) {
                card.style.display = "block";
            });
        } else {
            
            const groupCards = document.querySelectorAll("[value=" + groupToShow + "]");
            groupCards.forEach(function (card) {
                card.style.display = "block";
            });
        }
      });
  });
});





const Body = document.getElementsByTagName('body')[0];
let rtlValue = false;
if (Body.style.direction = 'rtl') {
  rtlValue = true;
}


$('.owl-carousel.project-info').owlCarousel({
  rtl: rtlValue,
  navText:["<i class='fa fa-angle-right mx-2'></i><div class='owl-btn'><span>(اسم المشروع)</span><h4 class=''>العمل التالي</h4></div>", "<div class='owl-btn'><span>(اسم المشروع)</span><h4 class=''>العمل السابق</h4></div><i class='fa fa-angle-left mx-2'></i>"],
  loop:true,
  margin:1,
  nav:true,
  dots: false,
  autoplay:false,
  autoplayTimeout:2500,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})


$('.owl-carousel.services').owlCarousel({
  rtl: rtlValue,
  loop:true,
  margin:25,
  nav:false,
  dots: false,
  autoplay:true,
  autoplayTimeout:2500,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2
      }
  }
})

$('.owl-carousel').owlCarousel({
  rtl: rtlValue,
  loop:true,
  margin:1,
  nav:true,
  dots: false,
  autoplay:true,
  autoplayTimeout:2500,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})

