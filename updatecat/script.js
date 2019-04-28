function coordinates(event) {
    var x = event.clientX;
    var y = event.clientY;
    var chinhair = document.getElementById("hair")
    chinhair.style.left = x + "px";
    chinhair.style.top = y + "px";
}

