window.onload = function() {
  let swiper

  const $cardsNotActive = document.querySelectorAll('.container__slider_notActive')
  const $containerShow = document.querySelector('.container__show')
  const $cards = document.querySelectorAll('.swiper-slide')
  const $slider = document.querySelector('.swiper-container')


  window.addEventListener('resize', function () {
    mobileSlider($slider)
    desktopShowIcon()
  })
  $containerShow.addEventListener('click', function () {
    if (this.children[1].innerHTML === 'Скрыть') {
      this.children[0].src = './img/iconDown.svg'
      this.children[1].innerHTML = 'Показать все'
      disableIcons()
    } else {
      this.children[0].src = './img/iconUp.svg'
      this.children[1].innerHTML = 'Скрыть'
      showAllIcon()
    }
  })
  mobileSlider($slider)
  desktopShowIcon()

  function mobileSlider($slider) {
    if (window.innerWidth < 768 && $slider.dataset.mobile === 'false') {
      swiper = new Swiper($slider, {
        slidesPerView: 'auto',
        slidesOffsetBefore: 16,
        spaceBetween: 16,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      })
      $slider.dataset.mobile = 'true'
    }
    if (window.innerWidth >= 768) {
      $slider.dataset.mobile = 'false'
      if ($slider.classList.contains('swiper-container-initialized')) {
        swiper.destroy()
      }
    }
  }

  function desktopShowIcon() {
    for (let i = 0; i <= 1; i++) {
      if (window.matchMedia("(min-width: 1120px)").matches) {
        $cardsNotActive[i].classList.remove('container__slider_notActive')
      } else {
        if($containerShow.children[1].innerHTML === 'Скрыть') {
          showAllIcon()
        }
        $cardsNotActive[i].classList.add('container__slider_notActive')
      }
    }
  }

  function showAllIcon() {
    for (let i = 0; i <= $cardsNotActive.length-1; i++) {
      if ($cardsNotActive[i] && $cardsNotActive[i].classList.contains('container__slider_notActive')) {
        $cardsNotActive[i].classList.remove('container__slider_notActive')
      }
    }
  }

  function disableIcons() {
    if (window.matchMedia("(min-width: 768px)").matches && !window.matchMedia("(min-width: 1120px)").matches) {
      for (let i = $cards.length - 1; i > 5; i--) {
        $cards[i].classList.add('container__slider_notActive')
      }
    } else if (window.matchMedia("(min-width: 1120px)").matches) {
      for (let i = $cards.length - 1; i > 7; i--) {
        $cards[i].classList.add('container__slider_notActive')
      }
    }

  }
}
