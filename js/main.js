

/* navbar */

let bars = document.querySelector('.open');
let close = document.querySelector('.close');

if(bars != null && close != null){
  bars.addEventListener('click' , ()=>{
    bars.style.display = 'none';
    close.style.display = 'block';
  })
  close.addEventListener('click' , ()=>{
    bars.style.display = 'block';
    close.style.display = 'none';
  })


  function showBG() {
    let scroll = window.scrollY;
    let isNavTop = scroll < 200;
    // console.log(scroll)
    let nav = document.getElementById('nav');
    // Compare the scroll position to 50
    if ( isNavTop) {
      nav.classList.remove('bgShow');
    } else {
      nav.classList.add('bgShow');
    }
  }
  window.addEventListener('scroll', showBG);


}





const Body = document.getElementsByTagName('body')[0];
let rtlValue = false;
if (Body.style.direction = 'rtl') {
  rtlValue = true;
}

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