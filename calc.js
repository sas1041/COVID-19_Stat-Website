// Javascript for COVID Calculator 

// Age Ranges: 0-18 (0.5), 19 - 39 (2), 40 - 65 (2), 65+ (3) (CDC)
// BMI can be affected by 2 or 3, depending on their BMI
// Scale is out of 14

var risk = '#';

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