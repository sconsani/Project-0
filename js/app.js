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
		answers : [	{answer: "Chewing Loudly", points: 20},
					{answer: "Vomitting", points: 50},
					{answer: "Kicking the Chair", points: 60},
					{answer: "Crying", points: 15}
				]
			},
	{
		question: "NAME SOMETHING PEOPLE DO WITH A CHRISTMAS FRUIT CAKE.",
		answers : [	{answer: "Eat it", points: 12},
					{answer: "Re-gift It", points: 40},
					{answer: "Throw Away", points: 70},
					{answer: "Keep It Until It Molds", points: 20}
				]
			},
	{
		question: "TELL ME SOMETHING SHARKS ARE KNOWN TO EAT.",
		answers : [	{answer: "Seals", points: 2},
					{answer: "Humans", points: 10},
					{answer: "Fish", points: 40},
					{answer: "Seaweed", points: 5}
				]
			},

	{
		question: "BESIDES BREAD- NAME SOMETHING YOU PUT IN THE TOASTER.",
		answers : [	{answer: "Grilled Cheese", points: 4},
					{answer: "Pop-Tart", points: 20},
					{answer: "Bagels", points: 16},
					{answer: "A Knife", points: 20}
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

	document.querySelector('#ibut p').innerHTML = "1. Select Two Player Mode 2. Player 1- Get Ready. Select what you think is the PUBLIC'S MOST POPULAR answer, then hit NEXT in order to move to the next question. 3. At the end of your round, It's now Player 2's Turn. 4. Player 2, you will get the same round of questions. 5. Answer what you think is the most popular answer. If you choose something Player 1 has already selected, you must choose another answer.  6. Once your round ends we will tally up your score based on the points attributed to each 'best most popular trivia answer' 7. Reach 200 points combined in order to win your cash money prize! 8. Anything below 200 points, and you lose. No money."
	
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

let endScores = document.getElementById("end-scores");

function oneGoTime () {
	// console.log("go time number 1");
	let triviaboard = document.getElementById("answersbox");
	// console.log(triviaboard);

	if (triviaboard.style.display === "none") {
		triviaboard.style.display = "block"
		playerOneGo.style.display = "none"
		endScores.style.display = "none";
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

						// NEXT

let nextButton = document.getElementById("nextbutton");
nextButton.addEventListener('click', next)

	function next() {
		generateQuestion(currentRound);
		//display associated answers
		generateAnswers(currentRound);
		//save points to variable
		//set .checked to false within the document. 

		currentRound++;

		if (playerturn ==1) {

			if (currentRound >= triviaqs.length) {
				playerturn++;
				playerTwoTurn();
				hidePlayerOne ();
				console.log(playerturn);
				// scoreArray();
				// generateScore ();
				// displayScores();

			}
		}
		else if (currentRound >= triviaqs.length) {
				displayWinner ();
				displayScores ();
				let lastGoneH = document.getElementById("trivia-header");
				let lastGoneF = document.getElementById("form");
				lastGoneH.style.display = "none";
				lastGoneF.style.display = "none";
				console.log("round three change to end game");
				// scoreArray();

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
			let congrats = document.getElementById("congrats");
			congrats.innerHTML = `Congrats Player 1, your score total is: ${playerOneScore}`


		}
		console.log("happens first")

		}
};


let pTwoGo = document.getElementById("playertwo");
pTwoGo.addEventListener('click', startTwo)

	function startTwo () {
		console.log("working button")
		currentRound = 0

		let pTwoQuest = document.getElementById("trivia-header");
		let pTwoForm = document.getElementById("form");
		let hidePtwoIntro = document.getElementById("playertwomode");
		let endScoresS = document.getElementById("end-scores");

			if (true==true) {
				pTwoQuest.style.display = "block";
				pTwoForm.style.display = "block";
				hidePtwoIntro.style.display = "none";
				endScoresS.style.display = "none";

				generateQuestion(currentRound);
				generateAnswers(currentRound);
				next();
			}
};

// display scores
	function displayScores () {
		console.log("display scores testing");

		if (true ==true) {
			endScores.style.display = "block";
			document.getElementById("poneendscore").innerHTML = `PLAYER 1 SCORE: ${playerOneScore}`
			document.getElementById("ptwoendscore").innerHTML = `PLAYER 2 SCORE: ${playerTwoScore}`
			document.getElementById("totalscore").innerHTML = `TOTAL SCORE:${playerTwoScore} pts`

		}
};
//change the html to include the values from the player scores and total

// display winner
	function displayWinner () {
		console.log("display winner testing");
		let groupScore = playerOneScore + playerTwoScore;
			if (groupScore >= 200) {
				//display to inner HTML
			let winnernote = document.getElementById("winner")
			winnernote.style.display = "block";

				console.log('winner winner chicken dinner!')
			}
			else if (groupScore < 200) {
			let losernote = document.getElementById("loser")
			losernote.style.display = "block";
				//display to inner HTML
				console.log("darn, not this time.")
			}
};


	

//calculate scores:
// let playerOneScore = [];
let playerOneScore = 0
let playerTwoScore = 0


// 	function generateScore(index) {
	
// 		let answera = document.getElementById("answer1").value
// 		let answerb = document.getElementById("answer2").value
// 		let answerc = document.getElementById("answer3").value
// 		let answerd = document.getElementById("answer4").value

// 		document.getElementById("answer1").value = triviaqs[index].answers[0].points
// 		document.getElementById("answer2").value = triviaqs[index].answers[1].points
// 		document.getElementById("answer3").value = triviaqs[index].answers[2].points
// 		document.getElementById("answer4").value = triviaqs[index].answers[3].points


// 		if(index[i].checked == true) {
// 			// parseInt();
// 			playerOneScore = playerOneScore += radioButtons[i].answerpoints
// 		}
// 		else if (index[i].checked !==true) {
// 			playerOneScore = playerOneScore += 0
// 	}
// };

function generateScore () {

		document.getElementById("answer1").value = triviaqs[index].answers[0].points
		document.getElementById("answer2").value = triviaqs[index].answers[1].points
		document.getElementById("answer3").value = triviaqs[index].answers[2].points
		document.getElementById("answer4").value = triviaqs[index].answers[3].points

		let ele = document.getElementsByName('triviaanswer'); 
              
	        for(let i = 0; i < ele.length; i++) { 
	            if(ele[i].checked==true) {
	            	 if(ele[i].value === triviaqs[i].answers.points) {
	            	 	
						console.log(triviaqs[i].answers.points)
	            	 	// playerOneScore++;
	            	 }
//else- player 2 score if round 2

	            	//  playerOneScore.push(ele[i].value)
	            	// };
	            	// console.log(playerOneScore);
	    }
	}

}; 

		// function stringToNumber (value) {
			// parseInt()

		// 	each time a value is saved to player score
		// 	run it through this function so it can change from a string to a number
		// 	before it is added to the accumulating sum
		// };

		

		// function addScore (num) {
		// 	playerOneScore += num
		// 	console.log(playerOneScore);
		// };








	





