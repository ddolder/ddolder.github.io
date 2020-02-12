function manning() {
    var k;
	var n = document.getElementById("n").value;
    if(document.getElementById("k1").checked==true){
    k = 1.486;
        }
    else if(document.getElementById("k2").checked==true){
    k = 1.0;
        }
    var b = document.getElementById("b").value;
    var h = document.getElementById("h").value;
    var S = document.getElementById("S").value;
    var A = b*h;
    var Pw = b+2*h;
    var vel = (k/n)*(A/Pw)^(2/3)*(S)^(1/2);

	document.getElementById("calculatednumber").innerHTML = vel.toPrecision(6);
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