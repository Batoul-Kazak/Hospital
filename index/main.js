let openNavButton = document.getElementById("open-nav-button");
let closeNavButton = document.getElementById("close-nav-button");
let nav = document.getElementById("nav");

openNavButton.onclick = function () {
    nav.className = "";
}

closeNavButton.onclick = function () {
    nav.className = "closed";
}