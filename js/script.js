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
    else if (path == "safety.html") {
        document.getElementById("adviceBtn").onclick = showAdvice;
        document.getElementById("protocolBtn").onclick = showProtocol;
    }
    else if (path == "russia.html" || path == "japan.html" || path == "china.html" || path == "uk.html"){
        $("travelBtn").onclick = showTravel;
    }
    else if(path == "calc.html"){
        document.getElementById("formButton").onclick = calculateRisk;
    };
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

// Toggles safety advice
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

// Toggles safety protocols
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

// Shows travel information for countries
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

// Javascript for COVID Calculator 

// Age Ranges: 0-18 (0.5), 19 - 39 (2), 40 - 65 (2), 65+ (3) (CDC)
// BMI can be affected by 2 or 3, depending on their BMI
// Scale is out of 14

// The Older the User, the Higher Risk They are at to COVID
function age() {
    document.getElementById("age");
    if (age <= 18) {
        return 0.5;
    }
    else if (age > 18 || age <= 39) {
        return 2;
    }
    else if (age > 39 || age <= 65) {
        return 2;
    }
    else if (age > 65) {
        return 3;
    }
    else
        return 0;
}

// Adds 2 or 3, depending on if User is overweight or obese
function bmi() {
    var weight = parseInt(document.getElementById("weight"));
    var height = parseInt(document.getElementById("height"));

    var bmi = ((weight/(height * height)) * 703);
    if (bmi > 30) {
        return 3; // obese
    }
    else if (bmi > 25 && bmi < 29.9) {
        return 2; // overweight
    }
    else
        return 0;
}

// Adds 2 to risk if User has Symptoms
function symptoms() {
    if(document.getElementById("symptomsYes").checked) {
        return 2;
    }
    else
        return 0;
}

// Adds 5 to risk if User has been in contact with someone who's had COVID
function contact() {
    if(document.getElementById("contactYes").checked) {
        return 5;
    }
    else
        return 0;
}

// Adds 1 to Risk if User has Traveled
function travel() {
    if(document.getElementById("outsideYes").checked) {
        return 1;
    }
    else
        return 0;
}

// Lets User Knows Their Risk
function calculateRisk(event) {
    event.preventDefault();
    var risk = 0;
    var result = document.getElementById("calcResult");

    console.log(travel());
    risk = travel() + contact() + symptoms() + bmi() + age();

    if (risk < 5) {
        result.innerHTML ="Based on our calculations, you most likely don't have COVID-19. Still stay cautious with who you come in contact with.";
    }
    else if(risk > 5 && risk < 10) {
        result.innerHTML = "Based on our calculations, you should be careful with who you come in contact with because there's a decent chance you have it.";
    }
    else if(risk >= 10) {
        result.innerHTML = "Based on our calculations, you are at great risk for having COVID-19. Stay quarantined.";
    }
}
