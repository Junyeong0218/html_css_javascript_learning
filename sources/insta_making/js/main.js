/*
function moveMainRight() {
    document.getElementsByClassName("main_right")[0].style.left = window.outerWidth-10;
}
*/

window.onresize = function(event) {
    var innerWidth = window.innerWidth - 334;
    var control_left = document.getElementById("control_margin_left");
    if(innerWidth < 666) {
        control_left.style.display = "none";
    } else {
        control_left.style.display = "block";
        control_left.style.left = innerWidth + 'px';
    }
}