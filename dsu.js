var text = document.getElementById("text");
var lesser = document.getElementById("lesser");
var greater = document.getElementById("greater");
lesser.onclick = function() {
    if (text.innerHTML == "WELCOME TO DHA SUFFA UNIVERSITY") {
        text.innerHTML = "&nbsp;&nbsp;&nbsp;BECOME A PART OF THE LARGEST &nbsp;&nbsp;&nbsp;EDUCATION NETWORK";
    } else {
        text.innerHTML = "WELCOME TO DHA SUFFA UNIVERSITY";
    }
}
greater.onclick = function() {
    if (text.innerHTML == "WELCOME TO DHA SUFFA UNIVERSITY") {
        text.innerHTML = "&nbsp;&nbsp;&nbsp;BECOME A PART OF THE LARGEST &nbsp;&nbsp;&nbsp;EDUCATION NETWORK";
        text.style.margin.left = "0px";
        text.style.margin.right = "-4px";
        text.style.margin.bottom = "-5px";
    } else {
        text.innerHTML = "WELCOME TO DHA SUFFA UNIVERSITY";
    }
}