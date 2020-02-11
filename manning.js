function manning() {

	var n = document.getElementById("n").value;
	if document.getElementById("k1").checked
	    var k = document.getElementById("k1").value;
	    else if document.getElementById("k2").checked
	    var k = document.getElementById("k2").value;
    var A = document.getElementById("A").value;
    var Pw = document.getElementById("Pw").value;
    var S = document.getElementById("S").value;
    var velocity = (k/n)*(A/Pw)^(2/3)*(S)^(1/2);

	document.getElementById("calculatednumber").innerHTML = velocity.toPrecision(4);
}