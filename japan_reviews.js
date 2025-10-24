window.addEventListener("scroll", function () {
    console.log(window.scrollY)
    if (window.scrollY > 1) {
        document.querySelector("nav").classList.add("scroll-nav")
    }
    else {
        document.querySelector("nav").classList.remove("scroll-nav")

    }
})

var value = 0
document.querySelectorAll(".stars_review i").forEach((star, index) => {
    star.classList.add("star_active")
    // console.log( star.getAttribute("value"))
    star.addEventListener("click", function stars() {
        // console.log(index)
        document.querySelectorAll(".stars_review i").forEach(s => {
            s.classList.remove("star_active")
        });

        for (let i = 0; i <= index; i++) {
            document.querySelectorAll(".stars_review i")[i].classList.add("star_active")
        }

    })
});


document.querySelector(".review_btn").addEventListener("click", function () {
    // console.log(    document.querySelector("#name").value.trim())
    var name_inpt = document.querySelector("#name").value.trim()
    var url_inpt = document.querySelector("#profile").value.trim()
    var comment = document.querySelector("#comment").value.trim()

    // console.log(document.querySelectorAll(".stars_review i.star_active").length)
    // console.log(document.querySelector(".stars_review").innerHTML)

    if (url_inpt == "") {
        url_inpt = "https://i.pinimg.com/1200x/2c/47/d5/2c47d5dd5b532f83bb55c4cd6f5bd1ef.jpg"
    }
    if (comment == "" || name_inpt == "") {
        alert("Please fill in the name and comment fields!");

    }
    else {
        document.querySelector(".comments").innerHTML += `   <div class="comment">
                    <div class="profile d-flex"><img
                            src="${url_inpt}" alt="">
                        <h3 class="mb-0 ms-3 text-white">${name_inpt}</h3>
                    </div>
                    <div class="stars">${document.querySelector(".stars_review").innerHTML}</div>
                    <p>"${comment}"</p>

                </div>`
        document.querySelector("#name").value = ""
        document.querySelector("#profile").value = ""
        document.querySelector("#comment").value = ""


    }



})