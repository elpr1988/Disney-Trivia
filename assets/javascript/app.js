var timeRemaining = 20;
var correctAns = 0;
var incorrectAns = 0;
var unAnswered = 7;
var count = 0;
var userGuess;
var intervalId; // var to hold interval ID when we execute runTimer
var images = ["assets/images/gma.gif", "assets/images/cinderella.gif", "assets/images/hakuna.gif", "assets/images/belle.gif",
							"assets/images/alice.gif", "assets/images/elsa.gif", "assets/images/louie.gif"];
var disney = [{
				question: "In Pocahontas, Grandmother Willow says to listen with your what?",
				choices: ["Ears", "Natura", "Heart", "Soul"],
				ans: 2
		}, {
				question: "In Cinderella, what is a wish your heart makes?",
				choices: ["Light", "Wish", "Belief", "Dream"],
				ans: 3

		}, {
				question: "In the Lion King, Hakuna Matata is Timon and Pumba's problem-free what?",
				choices: ["Journey", "For The Rest of Your Days", "No Worries", "Philosophy"],
				ans: 3

		}, {
				question: "In Beauty and the Beast, Belle believes there's more than this kind of life?",
				choices: ["Steady", "Provincial", "Animated", "Literary"],
				ans: 1

		}, {
				question: "In Alice in Wonderland, there's a wealth of happiness and what in the Golden Afternoon?",
				choices: ["Flowers", "Smiles", "Knowledge", "Romance"],
				ans: 3

		}, {
				question: "In Frozen, what never bothered Elsa?",
				choices: ["Loneliness", "Snowmen", "The Cold", "Magic"],
				ans: 2

		}, {
				question: "In The Jungle Book, what does King Louie want to be?",
				choices: ["Swinger", "Like You", "A man", "Rich"],
				ans: 2
	}];

$(document).ready(function() {
	$("#reset").hide();
	$("#start").click(function(){
		$(this).hide();
		ask();
	});

	function ask() {
		if (disney[count]) {
			runTimer();
			$("#timeRemaining").html("Time Remaining: " + timeRemaining + " seconds");
			$("#questions").html(disney[count].question);
			var choicesArr = disney[count].choices;
			var buttons = [];

			for (var i = 0; i < choicesArr.length; i++) { 
			var button = $("<button>"); 
			button.text(choicesArr[i]);
			button.attr("data-id", i); 
			$("#choices").append(button); 
			}
			$("#check").empty();
			$("#answer").empty();
			$("#image").empty();
		} 
		if (count === 7) {
			scoreCard();
		}
	};

$("#choices").on("click", "button", function(e) {
	userGuess = $(this).data("id"),
			index = disney[count].ans,
			ans = disney[count].choices[index];
		if (userGuess !== index) {
			wrong();
			incorrectAns += 1;
			unAnswered -= 1;
		} else if (userGuess === index) {
			right();
			correctAns += 1;
			unAnswered -= 1;
			}
	stopTimer();
});

	function nextQ() {
		count += 1;
		console.log(count);
	};

	function wrong() {
		$("#questions").empty();		
		$("#choices").empty();
		$("#check").html("NOPE!");
		$("#answer").html("The correct answer was: " + ans);
		$("#image").html("<img src=" + images[count] + ">");
		nextQ();
		setTimeout(ask, 1000);
	}

	function right() {
		$("#questions").empty();		
		$("#choices").empty();
		$("#check").html("CORRECT!");
		$("#image").html("<img src=" + images[count] + ">");
		nextQ();
		setTimeout(ask, 1000);
	}

	function runTimer() {
		intervalId = setInterval(decrement, 1000);
	};

	function stopTimer() {
		clearInterval(intervalId);
	}

	function decrement() {
		timeRemaining -= 1;
		$("#timeRemaining").html("Time Remaining: " + timeRemaining + " seconds");

		if (timeRemaining === 0) {
			stopTimer();
			timesUp();
		}
	}

	function timesUp() {
		scoreCard();
	}

	function scoreCard() {
		$("#timeRemaining").html("Time Remaining: " + timeRemaining + " seconds");
		$("#questions").empty();		
		$("#choices").empty();
		$("#check").empty();
		$("#answer").empty();
		$("#image").empty();
		$("#scoreCard").html("All done, here's how you did");
		$("#right").html("Correct Answers: " + correctAns); 
		$("#wrong").html("Incorrect Answers: " + incorrectAns);
		$("#unanswered").html("Unanswered: " + unAnswered);
		$("#reset").show();
	};

$("#reset").click(function() {
	location.reload();
})

});