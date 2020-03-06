console.log("testing, testing");

// document.getElementById("Trivia").style.display = "none";

//CONST OBJECT VARIABLES // ARRAYS

const triviaqs = [
	{
		question: "BESIDES PIZZA, NAME SOMETHING A PIZZA PLACE MIGHT SERVE.",
		answers: [	{answer: "Breadsticks", points: 29},
					{answer: "Salad", points: 20},
					{answer: "Calzones", points: 16},
					{answer: "Ranch Dressing", points: 7}
				]
		},				
	{
		question: "NAME A FOOD THEY MIGHT SERVE AT A CIRCUS.",
		answers: [	{answer: "Cotton Candy", points: 35},
					{answer: "Popcorn", points: 23},
					{answer: "Candy", points: 16},
					{answer: "Soft Pretsels", points: 5}
				]
		},
	{
		question: "NAME SOMETHING PEOPLE DO TO START A BOTTLE OF KETCHUP FLOWING.",
		answers : [	{answer: "Hit The Bottom", points: 59},
					{answer: "Shake It", points: 23},
					{answer: "Stick a Knife In It", points: 16},
					{answer: "Hold It Sideways", points: 5}
				]
			},

	{
		question: "ON AN AIRPLANE, WHAT DO YOU HOPE THE PERSON BEHIND YOU AVOIDS DOING.",
		answers : [	{answer: "Snoring", points: 59},
					{answer: "Vomitting", points: 23},
					{answer: "Kicking the Chair", points: 16},
					{answer: "Crying", points: 5}
				]
			},
	{
		question: "EXPRESSIONS FOREVA.",
		answers : [	{answer: "ooo ya", points: 59},
					{answer: "okay!", points: 23},
					{answer: "maybe not", points: 16},
					{answer: "hell yes", points: 5}
				]
			},
	{
		question: "another another QUESTION 6.",
		answers : [	{answer: "Hit The Bottom", points: 59},
					{answer: "Shake It", points: 23},
					{answer: "Stick a Knife In It", points: 16},
					{answer: "Hold It Sideways", points: 5}
				]
			},

	{
		question: "FIND A GOOD LAST ONE.",
		answers : [	{answer: "better", points: 59},
					{answer: "best", points: 23},
					{answer: "better than best", points: 16},
					{answer: "bestest", points: 5}
				]
			},
	{
		question: "EMPTY EIGTH TO DELETE.",
		answers : [	{answer: "NO", points: 0},
					{answer: "NO", points: 0},
					{answer: "NO", points: 0},
					{answer: "NO", points: 0}
				]
			}


			];

// for (let i=0; i<=triviaqs.length; i++) {
// 	triviaquest = triviaqs[0].answers;
// 	console.log(triviaquest);
// };

let playerturn = 1;

let currentRound = 0;

let playerOneScore = 0
let playerTwoScore = 0;

// FUNCTIONS
//EVENT LISTENERS - TO RUN FUNCTIONS AND METHODS - IN ORDER

//instructions display
let instrucbutton = document.getElementById('instructionsbutton');
instrucbutton.addEventListener('click', showInstruct);

function showInstruct(){
	console.log("come on baby");

	let parry = document.createElement('p');
	let parryid = document.querySelector('#ibut');
	parryid.append(parry);

	document.querySelector('#ibut p').innerHTML = "1. Select if you are playing with 2 Live Players, or 1 player and the computer! 2. Spin the Wheel of Money to find out how much you're playing to win! 3. Player 1 Go first 4. The 20 second timer will begin and display your 1st of 7 questinos. 5. Answer what you think is the most popular answer. 6. At the end of your round, It's now Player 2's Turn. 7. Player 2, you will get the same round of questions. 8. Answer what you think is the most popular answer. If you choose something Player 1 has already selected, you must choose another answer.  9. Once your round ends we will tally up your score based on the points attributed to each 'best most popular trivia answer' 10. Reach 200 points combined in order to win your cash money prize! 11. Anything below 200 points, and you lose. No money. 12. Same applies for 1 player and Computer, your computer buddy will randomly pick best responses in order to tally up points for your team!"
	// let idp = document.querySelectorAll("#instructions");
	// idp.innerHTML = "Hello Dolly.";
};


let gameStart = document.getElementById('twoplayers');
gameStart.addEventListener('click', start);

function start () {
	// console.log("we got another!");
	let gameboard = document.getElementById("trivia-header");
	if (gameboard.style.display === "none") {
		// console.log('none');
		gameStart.style.display = "none";
		gameboard.style.display = "block";
	} else {
		gameboard.style.display = "none";
	}
};



//player 1 start button - begin game - show question, answers, and start timer	
let playerOneGo = document.getElementById('player1-start');
playerOneGo.addEventListener('click', oneGoTime);

function oneGoTime () {
	// console.log("go time number 1");
	let triviaboard = document.getElementById("answersbox");
	// console.log(triviaboard);

	if (triviaboard.style.display === "none") {
		triviaboard.style.display = "block"
		playerOneGo.style.display = "none"
	} else {
		triviaboard.style.display = "none"
	}

	generateQuestion(currentRound)
	generateAnswers(currentRound)

	// startTimer ();
};

function generateQuestion(index) {
	document.getElementById("question").innerHTML = triviaqs[index].question
};

					//RADIO BUTTONS!!!!!!!!
function generateAnswers(index) {

	let answer1 = triviaqs[index].answers[0].answer;
	let answer2 = triviaqs[index].answers[1].answer;
	let answer3 = triviaqs[index].answers[2].answer;
	let answer4 = triviaqs[index].answers[3].answer;
	document.getElementById("label1").innerHTML = answer1
	document.getElementById("label2").innerHTML = answer2
	document.getElementById("label3").innerHTML = answer3
	document.getElementById("label4").innerHTML = answer4

	
	document.getElementById("answer1").value = triviaqs[index].answers[0].points
	document.getElementById("answer2").value = triviaqs[index].answers[1].points
	document.getElementById("answer3").value = triviaqs[index].answers[2].points
	document.getElementById("answer4").value = triviaqs[index].answers[3].points

};

// function saveScore() {
// 	if (triviaqs[index].answers[0].answer.checked == true) {
// 		console.log(document.getElementById("answer1").value);
// 	}
// };




// 	if(radioButtons[i].checked == true) {
// 		playerOneScore = playerOneScore += radioButtons[i].answerpoints
// 	}
// 	else if (radioButtons[i].checked !==true) {
// 		playerOneScore = playerOneScore += 0
// }



					///////////
					// finding which answer is checked of the radio buttons:
					///////////////
//if value is checked - get the "points" and add it to player points
// let radioButtons = document.getElementsByTagName('input')
// console.log(radioButtons);

// let answerpoints = triviaqs[0].answers.points
// for (let i=0; i<radioButtons.length; i++)  {


// SAVE VALUES/////////////////
//save answers to "answers chosen array depending on player"
//save each associated points to answer.text to player score total

						// NEXT

let nextButton = document.getElementById("nextbutton");
nextButton.addEventListener('click', next)
//when user clicks NEXT button
	function next() {
		generateQuestion(currentRound);
		//display associated answers
		generateAnswers(currentRound);
		//save points to variable
		//set .checked to false within the document. 

		currentRound++;

		if (currentRound >= triviaqs.length) {
			playerturn++;
			playerTwoTurn();
			hidePlayerOne ();
			console.log(playerturn);
			

		//end game
		//display new beginning - introduce player 2's turn
	}
};

	let header = document.getElementById('trivia-header');

	function hidePlayerOne () {
		let pone = document.getElementById("player1-start");
		// let pOneGone = document.getElementById("trivia-header");
		let pOneRadioGone = document.getElementById("form");
		// console.log(triviaboard);

		if (true==true) {
			header.style.display = "none";
			pOneRadioGone.style.display = "none";	
		}
		console.log("happens second")
};

	function playerTwoTurn () {

		if (playerturn == 2) {
			// let ptwo = document.getElementById("playertwomode");
			currentRound = 0;
			generateQuestion(currentRound);
			generateAnswers(currentRound);

			if (true ==true) {
				let ptwo = document.getElementById("playertwomode");
				ptwo.style.display = "block";

			}
				console.log("happens first")

		}
		};
// if (ptwo.style.display === "none") {
// 			ptwo.style.display = "block"
// 			pone.style.display = "none"
// 		} else {
// 			ptwo.style.display = "none"
// 		}




// //AT END OF SET- DISPLAY PLAYER 2'S TURN/COMPUTERS TURN IN THE H1
// function secondTurn (){
// 	start ();
// 	// run the start function - it should spill out the same questions
// };

// function duplicate () {
// 	//if player 2 picks an answer saved in "answersChosenP1" do not allow selection
// 	//display warning under the answer - saying PICK ANOTHER ANSWER. ALREADY CHOSEN BY PLAYER 1.
// }

//ANSWERS GRID DISPLAY

// END OF SET GRID - PLAYER 1, THEN PLAYER 2 - SPLIT SCREEN.

// html to display in the dom
//2. answers chosen by player 1 to display at end of timer (saved in array)

// html to display in the dom
//3. answers chosen by player 2 to display at end of timer (saved in array)

// html to display in the dom
//5. total score from all answers chosen

// function displayWinner() {
// let groupScore = p1answers.scoreTotal + p2answers.scoreTotal;
// 	if (groupScore >= 200) {
// 		//display to inner HTML
// 		console.log(`winner winner chicken dinner! you're going home with ${winnings}!!!!`)

// 	}
// 	else if (groupScore < 200) {
// 		//display to inner HTML
// 		console.log("darn, not this time.")

// 	}
// };

// 1. display play again button
// 2. display take me home button


// 1. play again event listener button
// 2. take me home event listener button

//variables for the DOM
// let h1question = `1: ${randomQuestion}`
// let qanswers = trivia.answer.texta


/////////////////////////////////////////////////////////
				// when all 7 questions have been answered OR time runs out: 
							// display: time up! player 2's turn
/////////////////////////////////////////////////////////
