console.info("Log from script.js: log-info");

var apple = "banana";

var array = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var myObject = {id: 3324, 
				length: 7, 
				name: "Austin",
			   	print: function() {
				   return "id is: " + this.id + "; length is: " + this.length + "; name is: " + this.name;
			  	}};

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

//for(var i = 0; i < array.length; i++) {
//	today += " is beautiful!" + "<br>";
//}
//
//var j = 0;
//do {
//	today += j;
//	j++;
//} while (j <= 9);
//
//today = fun1(1, 2, 3);

document.getElementById("test").innerHTML = myObject.print();

function fun1(num1, num2, num3) {
	return num1 * num2 * num3;
}

function showDate() {
	document.getElementById("test2").innerHTML = today;
}
