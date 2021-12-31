/*
function moveMainRight() {
    document.getElementsByClassName("main_right")[0].style.left = window.outerWidth-10;
}
*/

window.onload = function(event) {
    var control_left = document.getElementById("control_margin_left");
    var main = document.getElementsByTagName("main")[0];
    var contents = document.getElementById("adjust_main_contents");
    if(window.innerWidth < 1000) {
        control_left.style.display = "none";
        main.style.justifyContent = "center";
        contents.className = "";
    } else {
        var dif = (window.innerWidth - 1000) / 2;
        control_left.style.display = "block";
        control_left.style.left = (666 + dif) + 'px';
        main.style.justifyContent = "flex-start";
        contents.className = "contents";
    }
}

window.onresize = function(event) {
    var control_left = document.getElementById("control_margin_left");
    var main = document.getElementsByTagName("main")[0];
    var contents = document.getElementById("adjust_main_contents");
    if(window.innerWidth < 1000) {
        control_left.style.display = "none";
        main.style.justifyContent = "center";
        contents.className = "";
    } else {
        var dif = (window.innerWidth - 1000) / 2;
        control_left.style.display = "block";
        control_left.style.left = (666 + dif) + 'px';
        main.style.justifyContent = "flex-start";
        contents.className = "contents";
    }
}