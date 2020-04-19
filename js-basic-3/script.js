function increaseHighScore (currentScore) {
	var newHighScore = 2 * currentScore;
	return newHighScore;
}

console.log(increaseHighScore(4));

var newHighScore = function (currentScore) {
	var newHighScore = 2 * currentScore;
	return newHighScore;
}

var newHighScore2 = function (currentScore) {
	var newHighScore = 2 * currentScore;
	return newHighScore;
}(2);

console.log(newHighScore2);

function onClick() {
	document.getElementById("msg").innerHTML = newHighScore(10);
}

var newHighScore3 = function (currentScore) {
	return(
	console.log(this),
	console.log(arguments));
}(2);


//Using a function as an object
var harley = {
	name: "Street 750",
	color: "Black",
	getBudgetForCustomStuff: function(a) {
		return("You need to lower buget",
			  console.log(this.name));
	},
	shoutOuts: [
		{Kevin: "A cool black monster with 750cc."},
		{Sam: "Heavy bike with full power"}
	]
}

harley.getBudgetForCustomStuff(8000);

function onClick2() {
	document.getElementById("msg2").innerHTML = harley.shoutOuts;
}


//Using a function to creat objects
var SuperHero = function() {
	var power, villian;
}

peterParker = new SuperHero;
peterParker.power = "AirSwing";
peterParker.villian = "Green Goblin";

console.log(peterParker.villian);

clark = new SuperHero;
clark.power = "fly";
clark.villian = "Lex Luthor";

console.log(clark.villian);


//Prototyping a function
var walk = function() {
	return("He is able to walk");
}

SuperHero.prototype.walk = walk;
console.log(peterParker.walk());


//Multiple arguments and CALL and APPLY in JS
var multiplier = function() {
	var result = 1;
	for(var i = 0; i < arguments.length; i++) {
		result *= arguments[i];
	}
	return result;
}

console.log(multiplier(1, 2, 3, 4, 5));

var doSomething = function(work) {
	console.log(work);
	console.log(this);
}

doSomething("ABC");

var exercise = {
	benchPress: "4 sets",
	squats: "2 sets"
};

doSomething.call(exercise);
doSomething.apply(exercise, ['crunches']);


//Closures
var counter = (function() {
	var addOne = 0;
	return function() {
		return addOne += 1;
	}
})();

console.log(counter());



//Reference: https://www.w3schools.com/js/js_function_definition.asp




