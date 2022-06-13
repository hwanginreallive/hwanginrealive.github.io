//shopping bag

var btnopen = document.getElementById("btn");

var shoppingcart = document.getElementById("model")

var btnclose = document.getElementById("btnclose")

btnopen.onclick = function () {

    shoppingcart.style.display = "block"; 

}
btnclose.onclick = function () {
    shoppingcart.style.display = "none";
}

//subnav 

var btnsubnav = document.getElementById("btn-subnav")

var subnav = document.getElementById("subnav")

btnsubnav.onclick = function () {

    subnav.style.display = "block";

}

//setting

var btnsetting = document.getElementById("setting")

var navsetting = document.getElementById("navsetting")

btnsetting.onclick = function(){
    navsetting.classList.toggle("active")
}

//search

var btnsearch = document.getElementById("btn-search")

var search = document.querySelector(".search")

btnsearch.onclick = function () {
    search.classList.toggle("active")
}

//click outside remove element

document.onclick = function (e) {
    console.log(e.target.id)
    if (e.target.id != "btn" && e.target.id != "setting" && e.target.id != "btn-search" && e.target.id != "btn-subnav" && e.target.id != "input__search" ){
        shoppingcart.style.display = "none";
        navsetting.classList.remove("active");
        search.classList.add("active");
        subnav.style.display = "none";
    }
}


//change slider

var next = document.querySelector(".btn--next")

var prev = document.querySelector(".btn--prev")

var slider = document.querySelector(".slider")

console.log(slider.style.background)
next.onclick = function () {
    slider.style.backgroundImage = "url(./assets/images/slider-2.jpg)"
}
prev.onclick = function () {
    slider.style.backgroundImage = "url(./assets/images/slider-1.jpg)"
}