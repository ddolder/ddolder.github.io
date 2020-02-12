function manning() {
    var k;
	var n = document.getElementById("n").value;
    if(document.getElementById("k1").checked==true){
    k = 1.486;
        }
    else if(document.getElementById("k2").checked==true){
    k = 1.0;
        }
    var A = document.getElementById("A").value;
    var Pw = document.getElementById("Pw").value;
    var S = document.getElementById("S").value;
    var velocity = (k/n)*(A/Pw)^(2/3)*(S)^(1/2);

	document.getElementById("calculatednumber").innerHTML = velocity.toPrecision(4);
}