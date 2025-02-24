"strict"

import data from "./data.json"  with { type: "json" };


document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel")
  const slides = document.querySelectorAll(".slide")
  const indicators = document.querySelectorAll(".indicator")

  let currentSlide = 0

  data.images.forEach((img, index) =>{
    carousel.insertAdjacentHTML("beforeend", `<div class="slide"><img src="${img}" alt=""></div>`);
    
  })

  const updateIndicators = () => {
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentSlide)      
      
      indicator.innerHTML= `<img src=${data.images[index]} alt="">`
    })
  }

  const handleScroll = () => {
    const slideWidth = carousel.clientWidth
    currentSlide = Math.round(carousel.scrollLeft / slideWidth)
    updateIndicators()
  }

  carousel.addEventListener("scroll", handleScroll)

  // Initial update
  updateIndicators()
})