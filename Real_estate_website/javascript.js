const mainImg = document.getElementById('main-img');
const secondaryImg = document.getElementsByClassName('change-img');

secondaryImg[0].onclick = function(){
    mainImg.src = secondaryImg[0].src;
}
secondaryImg[1].onclick = function(){
    mainImg.src = secondaryImg[1].src;
}
secondaryImg[2].onclick = function(){
    mainImg.src = secondaryImg[2].src;
}



var MenuItems = document.getElementById('MenuItems');

MenuItems.style.maxHeight = "0px";

function toggleBar() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px"
    }
    else {
        MenuItems.style.maxHeight = "0px"
    }
}