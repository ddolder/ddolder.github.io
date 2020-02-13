function manning() {
    document.getElementById('wrongway').style.display="none";

    var k;
	var n = document.getElementById("n").value;
    if(document.getElementById("k1").checked==true){
    k = document.getElementById("k1").value;
        }
    else if(document.getElementById("k2").checked==true){
    k = document.getElementById("k2").value;
        }
    var b = document.getElementById("b").value;
    var h = document.getElementById("h").value;
    var S = document.getElementById("S").value;
    var A = b*h;
    var Pw = b+2*h;
    var vel;
     if (n < 0 || n > 1) {
        vel = "n is out of range";
        document.getElementById("longunit3").innerHTML = "";
        }
        else if (h < 0) {
        vel = "The Depth (y) cannot be negative";
        document.getElementById("longunit3").innerHTML = "";
        }
        else if (b < 0) {
        vel = "The Width (b) cannot be negative";
        document.getElementById("longunit3").innerHTML = "";
        }
        else if (S < 0) {
        vel = "Negative Slope?";
         document.getElementById('wrongway').style.display="block";
        }
        else {
        vel = (k/n)*(A/Pw)^(2/3)*(S)^(1/2);
        }
document.getElementById("calculatednumber").innerHTML = vel;
}

function english() {
    document.getElementById("longunit1").innerHTML = "[ft]";
    document.getElementById("longunit2").innerHTML = "[ft]";
    document.getElementById("longunit3").innerHTML = "[ft/s]";
}

function si() {
    document.getElementById("longunit1").innerHTML = "[m]";
    document.getElementById("longunit2").innerHTML = "[m]";
    document.getElementById("longunit3").innerHTML = "[m/s]";
}