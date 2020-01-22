var one = document.querySelector("#p1");
var two = document.querySelector("#p2");
var res = document.querySelector("#reset");
var input = document.querySelector("input");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var winningScoreDisplay = document.querySelector("p span");

var p1score = 0;
var p2score = 0;
var winningScore = 0;
var gameOver = false;


one.addEventListener("click",function(){
	if (!gameOver)
	{
		p1score++;
		if ( p1score === winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1score;
	}
});

two.addEventListener("click",function(){
	if (!gameOver)
	{
		p2score++;
		if ( p2score === winningScore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
	
		p2Display.textContent = p2score;
	}
});

res.addEventListener("click",function() {
	reset();
});

input.addEventListener("change", function() {
	winningScoreDisplay.textContent = input.value;
	winningScore = Number(input.value);
	reset();
});

function reset() {
	p1score=0;
	p2score=0;
	p1Display.textContent = p1score;
	p2Display.textContent = p2score;
	gameOver = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}
