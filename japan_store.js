window.addEventListener("scroll", function () {
    console.log(window.scrollY)
    if (window.scrollY > 1) {
        document.querySelector("nav").classList.add("scroll-nav")
    }
    else {
        document.querySelector("nav").classList.remove("scroll-nav")

    }



})
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.querySelector(".cat-show").addEventListener("click", function () {
    document.querySelector(".cat-btns").classList.toggle("show")
})

// products
var products = [
    {
        sekil: "https://media.istockphoto.com/id/1015169214/photo/portrait-of-attractive-asian-woman-wearing-red-kimono.jpg?s=612x612&w=0&k=20&c=f2GFLHxtxxMmo7zD_WZSLA861ntZuyN95BtqmjanqfM=",
        ad: " Red-White Kimono",
        qiymeti: 50,
        category: "Clothing",
        melumat: "This red kimono is a perfect reflection of Japanese culture. Both stylish and comfortable, it embodies the traditions of Japan. Made from silk, it's available in sizes M, L, and XL. Hand wash only. Ideal for formal occasions and special days."
    },
    {
        sekil: "https://media.istockphoto.com/id/529674910/photo/four-different-pairs-of-chopsticks.jpg?s=612x612&w=0&k=20&c=-SLLr1JTNeG1hZRc_WH-J516n6AfUaatqrVFyxRa94E=",
        ad: "Chopsticks set",
        qiymeti: 10,
        category: "Tableware",
        melumat: "This set of four pairs of chopsticks enhances the experience of Japanese meals. Crafted from bamboo, each pair is 23 cm long and features a natural bamboo color. A perfect addition to your Japanese dining experience."
    },

    {
        sekil: "https://media.istockphoto.com/id/1151512222/photo/rice-ball-of-salmon.jpg?s=612x612&w=0&k=20&c=eTXJCnKDoL2MmhbwxRZlWYzs2PJ1--5SvvinotfosiE=",
        ad: "Onigiri",
        qiymeti: 5,
        category: "Food & Drinks",
        melumat: "Onigiri is one of Japan's favorite foods, made from Japanese rice and filled with fish or vegetables. It's a delicious and traditional Japanese sandwich. Ingredients: Rice, Tuna, Vegetables. Available in small and large sizes. Perfect for a light lunch or snack."
    },
    {
        sekil: "https://media.istockphoto.com/id/186838435/photo/japanese-fan.jpg?s=612x612&w=0&k=20&c=7b5TJaeUjEk3tM0Z0nPzwj6PkI2hjjZ32Py7y0ymXP4=",
        ad: "Japanese Fan",
        qiymeti: 15,
        category: "Souvenirs",
        melumat: "This traditional Japanese hand fan is both functional and decorative. It represents Japanese nature and traditions beautifully. Made from paper and bamboo, it features floral and natural motifs. The size is 22 cm when closed and 45 cm when open. Ideal for the spring and summer months."
    },
    {
        sekil: "https://www.justonecookbook.com/wp-content/uploads/2018/10/Tableware-Tiny-Plates.jpg",
        ad: "Tiny Japanese Plates",
        qiymeti: 15,
        category: "Tableware",
        melumat: "These delicate, small Japanese plates are perfect for serving appetizers, sushi, or small portions of traditional Japanese dishes. Crafted from high-quality ceramic, their minimalist design highlights the beauty of Japanese tableware. Ideal for creating an elegant and authentic Japanese dining experience."
    }
    ,
    {
        sekil: "https://cdn.media.amplience.net/i/japancentre/jc_tableware_general_860-560/jc_tableware_general_860-560?w=1140&sm=c&fmt=auto",
        ad: "Japanese Tableware Set",
        qiymeti: 35,
        category: "Tableware",
        melumat: "This elegant Japanese tableware set is perfect for any traditional Japanese meal. It includes various pieces made of high-quality ceramic, offering a minimalist yet stylish design. Ideal for serving sushi, rice, or small side dishes, bringing a piece of Japanese culture to your dining table."
    },
    {
        sekil: "https://drinkupcolumbus.com/wp-content/uploads/2011/03/sake.jpg",
        ad: "Sake",
        qiymeti: 30,
        category: "Food & Drinks",
        melumat: "Sake is a famous Japanese alcoholic beverage, made from high-quality rice and natural yeast. With an alcohol content of 15%, it holds a special place in Japanese culture. The bottle size is 750 ml, and it pairs excellently with sushi, ramen, and other Japanese dishes."
    },
    {
        sekil: "https://cdn.pixabay.com/photo/2017/10/15/11/41/sushi-2853382_640.jpg",
        ad: "Sushi",
        qiymeti: 12,
        category: "Food & Drinks",
        melumat: "Sushi is a popular Japanese dish, combining fresh fish, rice, and vegetables. A great introduction to Japanese cuisine. Ingredients: Fresh salmon, rice, nori. The set includes 6 pieces, with various options available."
    },
    {
        sekil: "https://cdn.pixabay.com/photo/2022/05/10/18/51/ramen-7187811_640.jpg",
        ad: "Ramen",
        qiymeti: 8,
        category: "Food & Drinks",
        melumat: "Ramen, a beloved Japanese dish, is made with a delicious soup base, cabbage, vegetables, and egg. Especially tasty during cold weather. Soup base: Vegetable and miso. Single serving size. Ingredients: Soup, egg, vegetables."
    },
    {
        sekil: "https://cdn.pixabay.com/photo/2020/08/31/17/59/tea-5533178_640.jpg",
        ad: "Japanese Tea Set",
        qiymeti: 20,
        category: "Food & Drinks",
        melumat: "Japanese tea sets are essential for experiencing Japanese tea ceremonies. This set is perfect for those who want to immerse themselves in Japanese culture. Material: Ceramic. The set includes 5 pieces (teapot, 4 cups). Simple and elegant design."
    },
    {
        sekil: "https://cdn.pixabay.com/photo/2017/05/30/12/21/matcha-2356774_1280.jpg",
        ad: "Matcha",
        qiymeti: 10,
        category: "Food & Drinks",
        melumat: "Matcha is a well-known green tea in Japan, famous for its health benefits and cultural significance. It is fresh, rich, and energizing. Type: Ground green tea powder. Serving: 1-2 teaspoons per cup. Benefits: High in antioxidants and rich in vitamins."
    },
    {
        sekil: "https://images.pexels.com/photos/5745777/pexels-photo-5745777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ad: "Kimono",
        qiymeti: 45,
        category: "Clothing",
        melumat: "This beautiful kimono offers an elegant yet casual style, ideal for any occasion. It’s made from high-quality silk with intricate patterns reflecting Japanese culture. Available in multiple sizes. Hand wash only."
    },
    {
        sekil: "https://i.ebayimg.com/00/s/ODMzWDE1MDA=/z/u0sAAOSwAi9fL1F0/$_57.JPG?set_id=8800005007",
        ad: "Japanese Soda",
        qiymeti: 5,
        category: "Food & Drinks",
        melumat: "This refreshing Japanese soda offers a unique and delicious flavor that is a perfect complement to any meal or snack. It features a fizzy, light taste with natural fruit flavors, making it an enjoyable treat on a hot day or after a delicious Japanese meal. Available in various flavors."
    }
    , {
        sekil: "https://www.justonecookbook.com/wp-content/uploads/2019/09/Hiyayakko-3102-I.jpg",
        ad: "Hiyayakko Tofu",
        qiymeti: 8,
        category: "Food & Drinks",
        melumat: "Hiyayakko Tofu is a traditional Japanese dish made from fresh, smooth tofu served cold with toppings such as green onions, grated ginger, and soy sauce. This dish is light, healthy, and perfect for a refreshing appetizer or side dish during warmer weather."
    }
    , {
        sekil: "https://blog.sakura.co/wp-content/uploads/2022/09/sakuraco_hakama-man.png",
        ad: "Hakama",
        qiymeti: 75,
        category: "Clothing",
        melumat: "Hakama is a traditional Japanese garment worn over a kimono, often for formal occasions such as tea ceremonies, martial arts, or festivals. This high-quality hakama is crafted from durable material, designed for both comfort and elegance. Available in various sizes. Perfect for adding a touch of authentic Japanese culture to your wardrobe."
    },
    {
        sekil: "https://blog.sakura.co/wp-content/uploads/2022/03/shutterstock_1399989440-1.png",
        ad: "Soba",
        qiymeti: 12,
        category: "Food & Drinks",
        melumat: "Soba is a traditional Japanese noodle made from buckwheat flour, known for its earthy flavor and nutritious properties. Served either chilled with a dipping sauce or in a hot broth, soba is a versatile and comforting dish perfect for any time of the year. Tasty, healthy, and easy to prepare."
    },
    {
        sekil: "https://images.squarespace-cdn.com/content/v1/5d3ee66abacfa00001df6854/1591672086583-MQ833RFH32Q2UJQF4HDZ/tokyo-food-tours-taiyaki.jpg",
        ad: "Taiyaki",
        qiymeti: 6,
        category: "Food & Drinks",
        melumat: "Taiyaki is a popular Japanese fish-shaped pastry filled with a variety of sweet fillings, such as red bean paste, custard, or chocolate. Crispy on the outside and soft on the inside, Taiyaki makes for a delicious and fun snack or dessert, loved by people of all ages."
    },
    {
        sekil: "https://media-cdn.tripadvisor.com/media/photo-s/1c/93/9f/bc/tempure.jpg",
        ad: "Tempura",
        qiymeti: 15,
        category: "Food & Drinks",
        melumat: "Tempura is a popular Japanese dish of lightly battered and deep-fried vegetables or seafood. Crispy on the outside and tender on the inside, tempura is often served with a dipping sauce and enjoyed as a side dish or main course. A must-try for anyone seeking authentic Japanese flavors."

    },
    {
        sekil: "https://www.tastingtable.com/img/gallery/yakult-is-the-ever-popular-japanese-dairy-drink-you-should-know-about/intro-1688420021.jpg",
        ad: "Yakult",
        qiymeti: 3,
        category: "Food & Drinks",
        melumat: "Yakult is a famous Japanese probiotic dairy drink known for its health benefits. Packed with good bacteria, it aids in digestion and boosts immunity. The sweet, tangy flavor makes it a refreshing and healthy choice, loved by many for its smooth texture and unique taste."
    },
    {
        sekil: "https://images.pexels.com/photos/1532037/pexels-photo-1532037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ad: "Maneki Neko",
        qiymeti: 25,
        category: "Souvenirs",
        melumat: "The famous Maneki Neko, also known as the ‘lucky cat,’ is believed to bring good fortune and prosperity. This charming statue features a cat with a raised paw, traditionally used in Japanese businesses and homes for good luck and wealth. Material: Ceramic. Height: 10 cm. Ideal for adding a touch of Japanese culture to your space."
    },
    {
        sekil: "https://www.justonecookbook.com/wp-content/uploads/2024/03/Kake-Udon-7549-I-1.jpg",
        ad: "Udon",
        qiymeti: 10,
        category: "Food & Drinks",
        melumat: "Udon is a classic Japanese noodle dish, loved for its thick and chewy texture. It's served in a savory broth with vegetables and meat. Ingredients: Udon noodles, broth, vegetables, protein. Perfect for a hearty meal."
    },
    {
        sekil: "https://booksandbao.com/wp-content/uploads/2021/02/kokeshi-dolls.jpg",
        ad: "Kokeshi Dolls",
        qiymeti: 30,
        category: "Souvenirs",
        melumat: "This traditional Kokeshi doll is a handmade Japanese folk art doll, known for its simple, limbless design and painted floral patterns. It makes for a beautiful decorative piece or a thoughtful gift that embodies Japanese craftsmanship. Material: Wood. Height: 20 cm. A perfect souvenir to bring home the spirit of Japan."
    }, {
        sekil: "https://blog.sakura.co/wp-content/uploads/2021/06/shutterstock_131798075-thumbnail.jpg",
        ad: "Mochi",
        qiymeti: 8,
        category: "Food & Drinks",
        melumat: "Mochi is a traditional Japanese sweet made from glutinous rice. It’s chewy, soft, and comes in various flavors, including red bean and matcha. A popular Japanese treat for any occasion. Ingredients: Glutinous rice, red bean paste, matcha. Size: Small pieces, perfect for sharing."
    },
    {
        sekil: "https://cdn.thewirecutter.com/wp-content/media/2020/10/chopsticks-2x1-2048px-9128.jpg?width=2048&quality=75&crop=2:1&auto=webp",
        ad: "Cute Chopsticks",
        qiymeti: 12,
        category: "Tableware",
        melumat: "These cute and colorful chopsticks are perfect for those who want to add a bit of fun to their dining experience. Made from high-quality bamboo, they come in various playful designs. Length: 23 cm. Great for kids or anyone looking to bring some joy to their meals."
    },
];

// jsde kartlar
for (let i = 0; i < products.length; i++) {
    document.querySelector(".products").innerHTML += `<div class="product" cat="${products[i].category}">
                    <div class="product-img">
                        <img src="${products[i].sekil}" alt="">
                    </div>
                    <div class="product-text">
                        <div class="ad-urek">
                            <h3>${products[i].ad} </h3> <i class="fa-solid fa-heart d-block" onclick="fav(this)"></i>
                        </div>
                        <p class="m-0"> ${products[i].qiymeti}$</p>
                        <button class="learn-more-btn" type="button" data-bs-toggle="modal" data-bs-target="#myModal" onclick="learn_more(${i})"> Learn more <span class="media-span">-></span></button>
                        <button class="add-cart-btn" onclick="add_cart(${i})">Add cart!</button>
                    </div>
                </div>
    `
}

// urek ucun
function fav(element) {
    element.classList.toggle("fav")
}


// catagory hissesi
document.querySelectorAll(".cat-btn").forEach(catbtn => {
    catbtn.addEventListener("click", function () {
        document.querySelectorAll(".product").forEach(y => {
            if (catbtn.innerText == y.getAttribute("cat") || catbtn.innerText == "All") {
                y.style.display = "block"
            }
            else {
                y.style.display = "none"
            }
        });
    })



});

// search hissesi
document.querySelector(".input-search").addEventListener("keyup", function () {
    document.querySelectorAll(".product").forEach(x => {
        if (!x.querySelector("h3").innerText.toLowerCase().includes(document.querySelector(".input-search").value.toLowerCase()))
            x.style.display = "none"
        else {
            x.style.display = "block"
        }
    });
})

// modalin ici 
function learn_more(index) {
    document.querySelector(".modall").innerHTML = ` <div class="modal-mezmun">

                <h1 class="text-center"> <i class="fa-solid fa-vihara decor "> </i></h1> <i class="fa-solid fa-xmark close-i" onclick="close_modal()"></i>
                <div class="row d-flex justify-content-center">
                    <div class="col-5">
                        <img src="${products[index].sekil}"
                            alt="">
                    </div>
                    <div class="col-12 mt-2 ">
                        <h2 class="text-center"><strong>${products[index].ad}</strong></h2>
                        <div class="melumat">
                            <p>${products[index].melumat}
                            </p>
                        </div>
                    </div>
                </div>
            </div>`

    document.querySelector(".modall").style.display = "flex"

}

// modali baglamaq
function close_modal() {
    document.querySelector(".modall").style.display = "none"
}

// carta elave et
var total = 0
function add_cart(index) {
    document.querySelector(".cart-products").innerHTML += `
  <div class="cart-product">
                    <img src="${products[index].sekil}"
                        alt=""> <div class="cart-text"><h3>${products[index].ad}</h3> <h3><span>${products[index].qiymeti} </span> $</h3>  <i class="fa-solid fa-trash" onclick=product_trash(this)></i></div>
                </div>
`


    total += products[index].qiymeti
    document.querySelector(".total-h2 span").innerHTML = total
    document.querySelector(".say span").innerHTML = document.querySelectorAll(".cart-products .cart-product").length
}

// clear all buttonu
document.querySelector(".claer-all-btn").addEventListener("click", function () {
    document.querySelector(".cart-products").innerHTML = ""
    total = 0
    document.querySelector(".total-h2 span").innerHTML = total
    document.querySelector(".say span").innerHTML = document.querySelectorAll(".cart-products .cart-product").length

})


// trash funksiyasi
function product_trash(i) {
    i.parentElement.parentElement.remove()
    total -= Number(i.parentElement.children[1].children[0].innerText)
    document.querySelector(".total-h2 span").innerHTML = total
    document.querySelector(".say span").innerHTML = document.querySelectorAll(".cart-products .cart-product").length

}


