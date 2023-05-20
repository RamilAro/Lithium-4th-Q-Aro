document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("quizForm").addEventListener("submit", function(event) {
		event.preventDefault();

		var name = document.getElementById("name").value;

		var answers = {
			q1: document.querySelector('input[name="q1"]:checked').value,
			q2: document.querySelector('input[name="q2"]:checked').value,
			q3: document.querySelector('input[name="q3"]:checked').value,
			q4: document.querySelector('input[name="q4"]:checked').value,
			q5: document.querySelector('input[name="q5"]:checked').value
		};

		var score = calculateScore(answers);

		if (score >= 3) {
			alert("Hey there, " + name + "! I've got some news for ya—it's time to reveal your score! Are you ready for it? Drumroll, please... *drumroll sounds* Your score is in, and it's " + score + ". Woohoo! Keep up the great work, " + name +", and keep striving for success. You've got what it takes, and I believe in you. So, go out there, embrace your potential, and continue to shine bright. You're doing awesome, my friend!");

			var retry = confirm("Would you like to retry the quiz?");

			if (retry) {
				document.getElementById("quizForm").reset();
			}
		} else if (score < 3) {
			alert("Hey, there, " + name + "! You've got a few wrongs. Your score is " + score + ", which is okay!");

			var retry = confirm("Would you like to retry the quiz?");

			if (retry) {
				document.getElementById("quizForm").reset();
			}
		}

		var feedback = prompt("Thank you, " + name + ", for taking the quiz! We appreciate your feedback. Please share your opinion about our website:");
		alert("Thank you for your feedback: " + feedback);
	});
});

function calculateScore(answers) {
	var score = 0;

	if (answers.q1 === "c") {
		score++;
	}
	if (answers.q2 === "c") {
		score++;
	}
	if (answers.q3 === "d") {
		score++;
	}
	if (answers.q4 === "c") {
		score++;
	}
	if (answers.q5 === "c") {
		score++;
	}
	return score;
}



