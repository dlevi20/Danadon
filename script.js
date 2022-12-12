const essentialCheck = document.getElementById('disabledCheck').disabled = true;

function removeCookies() {
    document.getElementById('cookiesId').style.display = "none";
}

/*var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});*/

if (window.innerWidth > 800) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });
} else {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });
}

function closeOverlay(){
  document.getElementById('navbar-overlay').style.display = 'none'
  body.style.overflow = 'visible'
  document.getElementById('subscription').style.display = 'flex'
  document.getElementById('navbar').style.display = 'block'
}

const menuOverlay = document.getElementById('menuOverlay')
const body = document.body
const subscription = document.getElementsByClassName('subscription')

menuOverlay.addEventListener('click', openOverlay)

function openOverlay(){
  document.getElementById('navbar-overlay').style.display = 'block'
  body.style.overflow = 'hidden'
  document.getElementById('subscription').style.display = 'none'
  document.getElementById('navbar').style.display = 'none'
}