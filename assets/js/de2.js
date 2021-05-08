var btnopen = document.getElementById("btn");

var shoppingcart = document.getElementById("model")


document.onclick = function (e) {
    if(e.target.id=="btn"){
    shoppingcart.style.display = "block";
    }
    else if (e.target.id == "model"){
        shoppingcart.style.display = "block";
    }
    else{
        shoppingcart.style.display = "none";

    }
}

var btnsubnav = document.getElementById("btn-subnav")
var subnav = document.getElementById("subnav")


// btnsubnav.onclick = function (e) {
//     subnav.style.display="block"
// }
window.onclick = function(e){
    console.log(e.target.id)
    if (e.target.id =="btn-subnav") {
        subnav.style.display = "block"
    }
    else 
    {
        subnav.style.display = "none"
    }
}