function quiz(questions) {
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
};

quiz.prototype.getQuestionIndex = function() {
	return this.questions[this.questionIndex];
};

quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex;
};

quiz.prototype.guess = function(answer) {
	if(this.getQuestionIndex().correctAnswer(answer)) {
		this.score++;
	}
	this.questionIndex++;
};

function questions(text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.asnwer = answer;
};

question.prototype.correctAnswer = function(choice) {
	return choice = this.answer;
};


function populate() {
	if(quiz.isEnded()) {
		showScore();
	} else {
		// show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
		// show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i < choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn"+ i, choices[i]);
		}
	}
};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.click = function() {
		quiz.guess(guess);
		populate();
	}
};

function showScore() {
	var gameOver = "<h1>Result</h1>";
	gameOver += "<h2 id='score'> Your Score: " + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOver;
};


var questions = [
	new question("What continent is cut into two fairly equal halves by the Tropic of Capricorn?",
		["Europe", "Antarctica", "Australia", "Asia"], "Australia"),
	new question("What's the largest and densest of the four rocky planets?",
		["Mercury", "Venus", "Earth", "Mars"], "Earth"),
	new question("On a computer keyboard what letter is between Q and E?",
		["A", "W", "S", "R"],"W"),
	new question("Someone who suffers from oneirophobia is scared of what?",
		["The number 1", "Ears", "Dreams", "The letter 'o'"], "Dreams"),
	new question("Which fictional bear thought he had 'very little brain?'",
		["Winnie-the-Pooh", "Baloo", "Corduroy", "Paddington"], "Winnie-the-Pooh"),
];

var quiz = new quiz(questions);

populate();


//!-- set a timer
// display questions with four choice options
// on button click the next page will display but the timer has to continue or reset (depends  )
// if the answer is correct display header tag with "correct" and an image
// else display header tag with "wrong" and an image
// results will check user answers and compare it to the correct answers and display the result