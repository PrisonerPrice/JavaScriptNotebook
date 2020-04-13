console.info("Log from script.js: log-info");

var apple = "banana";

var array = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var myObject = {id: 3324, length: 7, name: "Austin"};

var today = null;

switch (new Date().getDay()) {
	case 0:
		today = array[0];
		break;
	case 1:
		today = array[1];
		break;
	case 2:
		today = array[2];
		break;
	case 3:
		today = array[3];
		break;
	case 4:
		today = array[4];
		break;
	case 5:
		today = array[5];
		break;
	case 6:
		today = array[6];
		break;
}

for(var i = 0; i < array.length; i++) {
	today += " is beautiful!" + "<br>";
}

document.getElementById("test").innerHTML = today;