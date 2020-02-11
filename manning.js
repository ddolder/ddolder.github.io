function manning() {

	var n = document.getElementById("n").value;
	var k = document.getElementById("k").value;
    var A = document.getElementById("A").value;
    var Pw = document.getElementById("Pw").value;
    var S = document.getElementById("S").value;
    var velocity = (k/n)*(A/Pw)^(2/3)*(S)^(1/2);


	document.getElementById("calculatednumber").innerHTML = velocity.toPrecision(4);
}