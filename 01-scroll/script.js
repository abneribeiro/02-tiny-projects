document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel")
  const slides = document.querySelectorAll(".slide")
  const indicators = document.querySelectorAll(".indicator")

  let currentSlide = 0

  const updateIndicators = () => {
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentSlide)      
      let url = (slides[index].children[0].getAttribute("src"));
      
      indicator.innerHTML= `<img src=${url} alt="">`
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