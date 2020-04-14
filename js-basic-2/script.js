//try {
//	aleert("Hello User!");
//} catch(err) {
//	document.getElementById("test").innerHTML = "Error message: " + err.message;
//}

function myError(){
	
	var msg, x;
	
	msg = document.getElementById("msg");
	x = document.getElementById("input").value;
	
	try {
		if (x == "") throw "Please choose a number";
		if (isNaN(x)) throw "Only number are allowed";
		if (x < 4) throw "Choose a number greater than 3";
	} catch(err) {
		msg.innerHTML = "Error is " + err;
	} finally {
		document.getElementById("input").value = "";
	}
}

function regexExample() {
	var str = document.getElementById("text").textContent;
	str = str.replace(/apple/, "google");
	document.getElementById("text").innerHTML = str;
}