window.onload = function () {
  let swiper

  const $cardsNotActive = document.querySelectorAll('.container__cards_notActive')
  const $containerShow = document.querySelector('.container__show')
  const $cards = document.querySelectorAll('.card')
  const $slider = document.querySelector('.swiper-container')

  window.addEventListener('resize', function () {
    mobileSlider($slider)
    desktopShowIcon()
  })

  desktopShowIcon()
  mobileSlider($slider)

  function desktopShowIcon() {
    for (let i = 0; i <= 1; i++) {
      if (window.matchMedia("(min-width: 1120px)").matches) {
        $cardsNotActive[i].classList.remove('container__cards_notActive')
      } else {
        $cardsNotActive[i].classList.add('container__cards_notActive')
      }
    }
  }

  function showAllIcon() {
    for (let i = 0; i <= $cardsNotActive.length; i++) {
      if ($cardsNotActive[i] && $cardsNotActive[i].classList.contains('container__cards_notActive')) {
        $cardsNotActive[i].classList.remove('container__cards_notActive')
      }
    }
  }

  function disableIcons() {
    if (window.matchMedia("(min-width: 768px)").matches && !window.matchMedia("(min-width: 1120px)").matches) {
      for (let i = $cards.length - 1; i > 5; i--) {
        $cards[i].classList.add('container__cards_notActive')
      }
    } else if (window.matchMedia("(min-width: 1120px)").matches) {
      for (let i = $cards.length - 1; i > 7; i--) {
        $cards[i].classList.add('container__cards_notActive')
      }
    }

  }

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

  function mobileSlider($slider) {

    if (window.innerWidth < 768 && $slider.dataset.mobile === 'false') {
      swiper = new Swiper($slider, {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      })
      $slider.dataset.mobile = 'true'
    }

    if (window.innerWidth >= 768) {
      $slider.dataset.mobile = 'false'

      if ($slider.classList.contains('swiper-container-initialized')) {
        console.log('ddsfdss')
        swiper.destroy()
      }
    }
  }

}
