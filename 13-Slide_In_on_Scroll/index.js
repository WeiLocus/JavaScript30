const sliderImages = document.querySelectorAll('.slide-in')

window.addEventListener('scroll',debounce(checkSlide))

function debounce(func, wait = 20, immediate = true) {
  let timeout
  return function() {
    let context = this

    // 定義later，會在延遲時間結束後執行
    const later = function() {
      timeout = null
      if (!immediate) {
        func.apply(context, arguments)
      }
    }

    // 是否需要立即執行原本的函數
    const callNow = immediate && !timeout

    clearTimeout(timeout)

    timeout = setTimeout(later,wait)
    if(callNow) {
      func.apply(context, arguments)
    }
  }
}


function checkSlide(e) {
  // console.log('window.scrollY',window.scrollY)
  // console.log(window.innerHeight)

  sliderImages.forEach( slideImage => {
    // half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2

    // bottom of the image
    const imageBottom = slideImage.offsetTop + slideImage.height

    const isHalfShown = slideInAt > slideImage.offsetTop
    const isNotScrolledPast = window.scrollY < imageBottom

    if (isHalfShown && isNotScrolledPast) {
      slideImage.classList.add('active')
    } else {
      slideImage.classList.remove('active')
    }
  })
}
