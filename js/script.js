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