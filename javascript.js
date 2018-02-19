
var x = document.getElementById("box");

function Grow(){

    var heightVal = parseInt(x.style.height, 10);
    x.style.height = (heightVal + 10) + "px"; 

    var widthVal = parseInt(x.style.width, 10);
    x.style.width = (widthVal + 10) + "px"; 

 }
function Blue(){
    
     x.style.backgroundColor = "blue";

};

function Fade(){

     x.style.backgroundColor = "white";

};


function Reset(){

    x.style.height = "150px";
    x.style.width = "150px";
    x.style.backgroundColor = "orange";

};