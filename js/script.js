// Loads all of the event functions
window.onload = function() {
    // Gets name of page file to prevent loading errors
    var path = window.location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

    if (path == "index.html") {
        document.getElementById("us-map").onmousemove = setPopup;

        var states = $$(".state path");
        for (var i=0; i<states.length; i++) {
            states[i].onmouseenter = showPopup;
            states[i].onmouseout = hidePopup;
        }
    }

    if (path == "safety.html") {
        document.getElementById("adviceBtn").onclick = showAdvice;
        document.getElementById("protocolBtn").onclick = showProtocol;
    }

    if (path == "russia.html" || path == "japan.html" || path == "china.html" || path == "uk.html"){
        $("travelBtn").onclick = showTravel;
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

function showAdvice() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("adviceBtn");
    
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

function showProtocol() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("protocolBtn");

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

function showTravel() {
    var info = document.getElementById("travelInfo");

    if (info.hasClassName("hide")) {
        info.classList.remove("hide");
        this.innerHTML = "Hide Travel Information"; 
    } else {
        info.classList.add("hide");
        this.innerHTML = "Show Travel Information"; 
    }
}