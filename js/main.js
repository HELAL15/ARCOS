


const Body = document.getElementsByTagName('body')[0];
let rtlValue = false;
if (Body.style.direction = 'rlt') {
  rtlValue = true;
}

$('.owl-carousel').owlCarousel({
  rtl: rtlValue,
  loop:true,
  margin:1,
  nav:true,
  dots: false,
  autoplay:false,
  autoplayTimeout:5000,
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