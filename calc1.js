// Javascript for COVID Calculator 

// Age Ranges: 0-18 (0.5), 19 - 39 (2), 40 - 65 (2), 65+ (3) (CDC)
// BMI can be affected by 2 or 3, depending on their BMI
// Scale is out of 14

var risk = '#';

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
    var element = document.createElement("div");

    var state = document.createElement("h4").appendChild(document.createTextNode(this.dataset.info));
    element.appendChild(state);
    element.appendChild(document.createElement("br"));

    var covidCases = document.createElement("h4").appendChild(document.createTextNode("Covid Cases: ..."));
    element.appendChild(covidCases);
    element.appendChild(document.createElement("br"))

    var covidDeaths = document.createElement("h4").appendChild(document.createTextNode("Covid Deaths: ..."));
    element.appendChild(covidDeaths);
    element.appendChild(document.createElement("br"))

    popup.appendChild(element);
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

function age() {
    document.getElementById("age");
    if (age <= 18)
    {
        risk += 0.5;
    }
    else if (age > 18 || age <= 39)
    {
        risk += 2;
    }
    else if (age > 39 || age <= 65)
    {
        risk += 2;
    }
    else if (age > 65)
    {
        risk += 3;
    }
};

function bmi() {
    document.getElementById("weight");
    document.getElementById("height");
    var bmi = (weight/heightMath.pow(2)) * 703;
    if (bmi > 30)
    {
        risk += 3;
    }
    else if (bmi > 25 && bmi < 29.9)
    {
        risk += 2;
    }
};

function symptoms() {
    if(document.getElementById("symptomYes").checked)
    {
        risk += 2;
    }
};

function contact() {
    if(document.getElementById("contactYes").checked)
    {
        risk +=5;
    }
};

function travel() {
    if(document.getElementById("outsideYes").checked)
    {
        risk += 1;
    }
};

function caclculate() {
    var risk = document.getElementById("span");


    if (risk < 5)
    {
        risk.innerHTML("Based on our calculations, you most likely don't have COVID-19. Still stay cautious with who you come in contact with.");
    }
    else if(risk > 5 && risk < 10)
    {
        risk.innerHTML("Based on our calculations, you should be careful with who you come in contact with because there's a decent chance you have it.");
    }
    else if(risk >= 10)
    {
        risk.innerHTML("Based on our calculations, you are at great risk for having COVID-19. Stay quarantined.");
    }
};