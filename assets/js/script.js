// HTML elements
var boldTextEl = $("#topText");
var plainTextEl = $("#midText");
var resultEl = $("#botText");
var highScoreBtn = $("#btn-high-score");
var startBtn = $("#btn-begin");
var buttonsEl = $("#btn-container");
var timeEl = $("#timer");


var qSet = {
    question: "What is the right answer?",
    answers: ["A", "B", "C", "D"],
    correct: "C"
}

// Init state
resultEl.attr('hidden', true);
var timeRemaining = 90;
var score = 0;
var questionCount = 1;


// Game functions
var beginQuiz = function() {
    // Clear elements
    boldTextEl.text("Question " + questionCount);
    plainTextEl.attr('hidden', true);
    startBtn.attr('hidden', true);
    // Select question
    // Add buttons
    // Begin timer
    timeRemaining = 10;
    var timeInterval = setInterval(function() {
        if (timeRemaining > 0) {
            timeEl.text("Time: " + timeRemaining);
            timeRemaining--;
        } else {
            clearInterval(timeInterval);
            timeEl.text("Time: 0");
            boldTextEl.text("Welcome!");
            plainTextEl.attr('hidden', false);
            startBtn.attr('hidden', false);
            // End Game
        }
    }, 1000);
}


var selectQuestion = function(q) {
    plainTextEl.text(q.question);
    
    return;
}




startBtn.on("click", beginQuiz);