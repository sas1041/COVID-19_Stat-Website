// Loads all of the onclick functions
window.onload = function() {
    document.getElementById("us-map").onmousemove = setPopup;
    var states = $$(".state path");
    for (var i=0; i<states.length; i++) {
        states[i].onmouseenter = showPopup;
        states[i].onmouseout = hidePopup;
    }
};

// Set position of popup slightly above client cursor y value
function setPopup(e) {
    var popup = document.getElementById("info-box");
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    popup.style.top = (mouseY - parseInt(popup.getStyle('height')) - 35) + "px";
    popup.style.left = (mouseX - (parseInt(popup.getStyle('width')) / 2)) + "px";
}

// Shows popup
function showPopup() {
    var popup = document.getElementById("info-box");

    popup.innerHTML = this.dataset.info;
    popup.style.display = "block"
}

// Hides popup
function hidePopup() {
    var popup = document.getElementById("info-box");

    popup.innerHTML = "";
    popup.style.display = "none"
}

function firstBtn() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("firBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less"; 
        moreText.style.display = "inline";
    }
}

function secondBtn(){
    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("secBtn");
    
    if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnText2.innerHTML = "Read More"; 
        moreText2.style.display = "none";
    } else {
        dots2.style.display = "none";
        btnText2.innerHTML = "Read Less"; 
        moreText2.style.display = "inline";
    }
}