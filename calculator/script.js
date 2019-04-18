
function squareNumber() {
    var sn = document.getElementById('square-input').value;
    squarenumber = sn*sn;
}
document.getElementById("square-button").addEventListener("click", solution); 

function halfNumber() {
    var hn = document.getElementById('half-input').value;
    halfnumber = hn*(1/2);
}

document.getElementById("half-button").addEventListener("click", solution);

function percentOf() {
    var one = document.getElementById("percent1-input").value;
    var two = document.getElementById("percent2-input").value;
    percent = (one/two)*100;
    logastring = one+" is "+percent+"%"+" of "+two;
    
}

document.getElementById("percent-button").addEventListener("click",solution);

function areaOfCircle() {
    var r = document.getElementById("area-input").value;
    area = r*r*(Math.PI)
}

document.getElementById("area-button").addEventListener("click",solution);

function solution() {
    
    document.getElementById("solution").innerHTML = squarenumber;
    document.getElementById("solution").innerHTML = halfnumber;
    document.getElementById("solution").innerHTML = logastring;
    document.getElementById("solution").innerHTML = area;
    
}