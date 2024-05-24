function showinfo(planet){
    var name = planet.getAttribute("data-name");
    var distance = planet.getAttribute("data-distance");
    var fact1 = planet.getAttribute("data-fact1");
    var fact2 = planet.getAttribute("data-fact2");

    document.getElementById("name").innerHTML = name;
    document.getElementById("distance").innerHTML = distance;
    document.getElementById("fact1").innerHTML = fact1;
    document.getElementById("fact2").innerHTML = fact2;
    document.getElementById("info-box").style.display = "block";
}

function hideinfo(){
    document.getElementById("info-box").style.display = "none";
}
