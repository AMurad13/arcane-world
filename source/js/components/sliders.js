import Swiper from "../vendor/swiper";
import vars from "../_vars";

const {
  eventsSection, 
  projectsSection,
  streamsSection,
  homeSection
} = vars;

const initSlider = (options, section) => {
  const slider = section.querySelector(".swiper");

  new Swiper(slider, {
    ...options
  })
}

if (homeSection) {
  initSlider({
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,      
    }
  }, homeSection)
}

if (eventsSection) {
  initSlider({
      slidesPerView: 1,
      spaceBetween: 20      
    },
    eventsSection
  )
}

if (projectsSection) {
  initSlider({
    slidesPerView: 1,
    spaceBetween: 10    
  }, projectsSection)
}

if (streamsSection) {
  initSlider({
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 28
  }, streamsSection)
}