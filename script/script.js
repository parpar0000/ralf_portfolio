var menuItems = document.getElementById("menuItems");
var hamburgerImg = document.querySelector(".hamburger-icon");
var closeImg = document.querySelector(".close-icon");
var navbar = document.getElementById("navbar");

menuItems.style.maxHeight = "0px";

function menuToggle() {
  if(menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "200px";
    hamburgerImg.style.display = "none";
    closeImg.style.display = "inline-block"
  } 
  
  else {
    menuItems.style.maxHeight = "0px";
    hamburgerImg.style.display = "inline-block";
    closeImg.style.display = "none"

  }
  
}
