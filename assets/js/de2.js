var btnopen = document.getElementById("btn");

var shoppingcart = document.getElementById("model")

var btnclose = document.getElementById("btnclose")

btnopen.onclick = function () {

    shoppingcart.style.display = "block"; 

}
btnclose.onclick = function () {
    shoppingcart.style.display = "none";
}
var btnsubnav = document.getElementById("btn-subnav")

var subnav = document.getElementById("subnav")

btnsubnav.onclick = function () {

    subnav.style.display = "block";

}

var btnsetting = document.getElementById("setting")

var navsetting = document.getElementById("navsetting")

btnsetting.onclick = function(){
    navsetting.classList.toggle("active")
}

var btnsearch = document.getElementById("btn-search")

var search = document.querySelector(".search")

btnsearch.onclick = function () {
    search.classList.toggle("active")
}

document.onclick = function (e) {
    console.log(e.target.id)
    if (e.target.id != "btn" && e.target.id != "setting" && e.target.id != "btn-search" && e.target.id != "btn-subnav" && e.target.id != "input__search" ){
        shoppingcart.style.display = "none";
        navsetting.classList.remove("active");
        search.classList.add("active");
        subnav.style.display = "none";
    }
}
