function btnclick() {
    activebtn.style.backgroundColor = disactiveclr;
    (activebtn = this).style.backgroundColor = activeclr;
}
var disactiveclr = "#F6F6f6";
var activeclr = "#fc0707";
var activebtn = null;
function ld(){
    activebtn = document.getElementById("b1");
    for(var i=1; i<5; ++i) document.getElementsByClassName("b"+i).onclick=btnclick;
    alert("ready");
}