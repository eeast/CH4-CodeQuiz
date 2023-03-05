// HTML elements
var highScoreBtn = $("#btn-high-score");
var timeEl = $("#timer");

var boldTextEl = $("#topText");
var plainTextEl = $("#midText");
var startBtn = $("#btn-begin");
var highScoreForm = $("#highScoreForm");
var userInitials = $("#userInput");
var submitScoreBtn = $("#submitScore");
var buttonsEl = $("#btn-container");
var resultEl = $("#resultBanner");

var createQSet = function() {
    return [{
        question: "What is the right answer?",
        answers: ["A", "B", "C", "D"],
        correct: "C"
    }, {
        question: "Now, what is the right answer?",
        answers: ["A", "B", "C", "D"],
        correct: "C"
    }, {
        question: "How about now, what's the answer?",
        answers: ["A", "B", "C", "D"],
        correct: "C"
    }, {
        question: "This is a true/false question.",
        answers: ["True", "False",],
        correct: "True"
    }];
}


var timeRemaining = 90;
var score = 0;
var questionCount = 1;
var qSet;
var currentQuestion;

// Init state
var initGame = function() {
    timeRemaining = 90;
    score = 0;
    questionCount = 1;
    qSet;
    currentQuestion;
}



// Game function
var beginQuiz = function() {
    // Clear elements
    boldTextEl.text("Question " + questionCount);
    startBtn.attr('hidden', true);
    // Init questions
    qSet = createQSet();
    score = 0;
    // Select question
    currentQuestion = qSet[Math.floor(Math.random() * qSet.length)]
    qSet.splice(qSet.indexOf(currentQuestion),1);
    console.log(qSet);
    // Add buttons
    displayQuestion(currentQuestion);
    // Begin timer
    timeRemaining = 30;
    var timeInterval = setInterval(function() {
        if (timeRemaining > 0) {
            timeEl.text("Time: " + timeRemaining);
            timeRemaining--;
        } else {
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);
}


var displayQuestion = function(q) {
    plainTextEl.text(q.question);
    buttonsEl.empty();
    for(var i = 0; i < q.answers.length; i++) {
        buttonsEl.append($("<button>").addClass("btn btn-secondary col-md-4 offset-md-6 m-1").attr('id', 'answer').text(q.answers[i]));
    }
}


var checkAnswer = function(event) {
    var q = $(event.target);
    if (q.text() === currentQuestion.correct) {
        score += 10;
        console.log("Correct answer!");
        resultEl.children("#correct").attr("hidden", false);
        resultEl.children("#incorrect").attr("hidden", true);
        if(qSet.length > 0){
            questionCount++;
            boldTextEl.text("Question " + questionCount);
            currentQuestion = qSet[Math.floor(Math.random() * qSet.length)]
            qSet.splice(qSet.indexOf(currentQuestion),1);
            displayQuestion(currentQuestion);
            console.log(qSet);
        } else {
            endGame();
        }
    } else {
        timeRemaining -= 10;
        score -= 10;
        console.log("Incorrect.");
        resultEl.children("#incorrect").attr("hidden", false);
        resultEl.children("#correct").attr("hidden", true);
    }
}


var endGame = function() {
    timeRemaining = 0;
    loadScorePage();
    timeEl.text("Time: --");
}


var submitScore = function(event) {
    event.preventDefault();
    console.log(userInitials.val())
    var highScoreTable = JSON.parse(localStorage.getItem("highscores"));
    if (highScoreTable !== null) {
        highScoreTable += "<br>" + userInitials.val() + ": " + score;
    } else {
        highScoreTable = userInitials.val() + ": " + score;
    }
    localStorage.setItem("highscores", JSON.stringify(highScoreTable));
    showHighScores();
}


var showHighScores = function() {
    clearDefault();
    boldTextEl.text("High Scores:");
    var highScoreTable = JSON.parse(localStorage.getItem("highscores"));
    if (highScoreTable !== null) {
        plainTextEl.html(highScoreTable);
    } else {
        plainTextEl.html("No high scores yet!")
    }
    buttonsEl.append($("<button>").addClass("btn btn-secondary col-md-2").attr('id', 'close').text("Close"));
}


var loadScorePage = function() {
    clearDefault();
    highScoreBtn.attr("hidden", true);
    boldTextEl.text("Score: " + score);
    plainTextEl.html("Save your score to the leaderboard!");
    highScoreForm.attr('hidden', false);
}


var loadDefault = function() {
    highScoreBtn.attr("hidden", false);
    timeEl.text("");
    boldTextEl.text("Welcome!");
    plainTextEl.html("Try to answer the following code-relate questions within the time limit.<br>Keep in mind that incorrect answers will penalize your score/time by ten seconds!");
    startBtn.attr('hidden', false);
    highScoreForm.attr('hidden', true);
    buttonsEl.empty()
    resultEl.children().attr('hidden', true);
}


var clearDefault = function() {
    boldTextEl.text("");
    plainTextEl.html("");
    timeEl.text("");
    startBtn.attr('hidden', true);
    highScoreForm.attr('hidden', true);
    buttonsEl.empty();
    resultEl.children().attr('hidden', true);
}


loadDefault();
buttonsEl.on("click", "#answer", checkAnswer);
buttonsEl.on("click", "#close", loadDefault);
submitScoreBtn.on("click", submitScore);
startBtn.on("click", beginQuiz);
highScoreBtn.on("click", showHighScores);