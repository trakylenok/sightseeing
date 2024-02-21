const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

document.addEventListener('keydown', event => {
    if(event.key === 'ArrowUp') {
        changesSlide('up')

    } else if (event.key === 'ArrowDown') {
        changesSlide('down')
    }
})

function changesSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height + 1}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height }px)`
}

