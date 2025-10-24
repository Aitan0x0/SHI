window.addEventListener("scroll", function () {
    console.log(window.scrollY)
    if (window.scrollY > 1) {
        document.querySelector("nav").classList.add("scroll-nav")
    }
    else {
        document.querySelector("nav").classList.remove("scroll-nav")

    }

    if (window.scrollY > 200) {
        document.querySelector(".text-1").style.animationName = "soldan-saga"
        document.querySelector("section h1").style.animationName = "yaranir"
        document.querySelector(".img-1 ").style.animationName = "sagdan-sola-2"
        document.querySelector(".img-2 ").style.animationName = "soldan-saga"
        document.querySelector(".text-2").style.animationName = "sagdan-sola-2"
    }

})

var swiper = new Swiper(".mySwiper", {
   
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      
      },
});








