// HTML elements
var highScoreBtn = $("#btn-high-score");
var timeEl = $("#timer");

var boldTextEl = $("#topText");
var plainTextEl = $("#midText");
var startBtn = $("#btn-begin");
var highScoreFormEl = $("#highScoreForm");
var userInitialsEl = $("#userInput");
var submitScoreBtn = $("#submitScore");
var highScoreTableEl = $("#highScoreTable");
var tableDataEl = $("#tableData");
var buttonsEl = $("#btn-container");
var resultEl = $("#resultBanner");


var timeRemaining = 90;
var score = 0;
var questionCount = 1;
var qSet;
var currentQuestion;


// Init state
var initGame = function() {
    timeRemaining = 30;
    score = 0;
    questionCount = 1;
    qSet = createQSet();
}



// Game function
var beginQuiz = function() {
    // Clear elements
    clearDefault();
    boldTextEl.text("Question " + questionCount);
    startBtn.attr('hidden', true);
    // Init questions and game variables
    initGame();
    // Select question
    currentQuestion = qSet[Math.floor(Math.random() * qSet.length)]
    qSet.splice(qSet.indexOf(currentQuestion),1);
    // Display question/Add buttons
    displayQuestion(currentQuestion);
    // Begin timer
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
        resultEl.children("#correct").attr("hidden", false);
        resultEl.children("#incorrect").attr("hidden", true);
        if(qSet.length > 0){
            questionCount++;
            boldTextEl.text("Question " + questionCount);
            currentQuestion = qSet[Math.floor(Math.random() * qSet.length)]
            qSet.splice(qSet.indexOf(currentQuestion),1);
            displayQuestion(currentQuestion);
        } else {
            endGame();
        }
    } else {
        timeRemaining -= 10;
        score -= 10;
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
    var highScoreTable = JSON.parse(localStorage.getItem("highscores"));
    if (highScoreTable !== null) {
        // add user to highscore table
        highScoreTable.push({initials: userInitialsEl.val(), highscore: score});
        // sort table
        highScoreTable.sort(function(a, b) {
            return b.highscore - a.highscore;
        });
        // limit to 10 entries
        if (highScoreTable.length > 10) {
            highScoreTable.length = 10;
        }
    } else {
        // create highscore table
        highScoreTable = [{initials: userInitialsEl.val(), highscore: score}];
    }
    localStorage.setItem("highscores", JSON.stringify(highScoreTable));
    userInitialsEl.val('');
    showHighScores();
}


var showHighScores = function() {
    clearDefault();
    boldTextEl.text("High Scores:");
    var highScoreTable = JSON.parse(localStorage.getItem("highscores"));
    if (highScoreTable !== null) {
        highScoreTableEl.attr('hidden', false);
        for (var i = 0; i < highScoreTable.length; i++) {
            var tableRow = $("<tr>");
            tableRow.append($("<th>").attr('scope', 'row').text(i + 1));
            tableRow.append($("<td>").text(highScoreTable[i].initials));
            tableRow.append($("<td>").text(highScoreTable[i].highscore));
            tableDataEl.append(tableRow);
        }
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
    highScoreFormEl.attr('hidden', false);
}


var loadDefault = function() {
    highScoreBtn.attr("hidden", false);
    timeEl.text("");
    boldTextEl.text("Welcome!");
    plainTextEl.html("Try to answer the following code-related questions within the time limit.<br>Keep in mind that incorrect answers will penalize your score/time by ten seconds!");
    startBtn.attr('hidden', false);
    highScoreFormEl.attr('hidden', true);
    highScoreTableEl.attr('hidden', true);
    buttonsEl.empty()
    resultEl.children().attr('hidden', true);
}


var clearDefault = function() {
    highScoreBtn.attr('hidden', true);
    boldTextEl.text("");
    plainTextEl.html("");
    timeEl.text("");
    startBtn.attr('hidden', true);
    highScoreFormEl.attr('hidden', true);
    highScoreTableEl.attr('hidden', true);
    tableDataEl.empty();
    buttonsEl.empty();
    resultEl.children().attr('hidden', true);
}


loadDefault();
buttonsEl.on("click", "#answer", checkAnswer);
buttonsEl.on("click", "#close", loadDefault);
submitScoreBtn.on("click", submitScore);
startBtn.on("click", beginQuiz);
highScoreBtn.on("click", showHighScores);