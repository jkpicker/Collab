const slider = document.querySelector('.slider')
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const slides = document.querySelectorAll('.slider-image')
const bottom = document.querySelector('.bottom')

let currentSlideIndex = 0
let sliderWidth = slider.clientWidth
let paginationCircles = []
// window -> вікно всього браузеру, resize -> відслідкування змін розміру вікна браузера
window.addEventListener('resize', () => {
	sliderWidth = slider.clientWidth // отримуємо актуальну ширину слайдеру
	showSlide()
})

function createPaginations() {
	const div = document.createElement('.div')
	div.className ='pagination-circle'
	bottom.appendChild(div)
	paginationCircles.push(div)
}
//2
// function addPaginations() {}
//3
// function  addActiveSliderClass() {}
// 4
// function  removeActiveSliderClass() {}
//5
// function changeSlider() {}
//6
// function  showSlide() {}
//7
// function nextSlide() {}
//8 
// function previousSlide() {}

