//Array of question, chioces, and answers
var questions = [{

    question: "What currecny is used in Animal Crossing?",
    choices: ["Bells", "Rupees", "Gold", "Coins"],
    answer: "Bells"
},
{
    question: "Who will yell at you for not saving your game?",
    choices: ["Isabelle", "Harriet", "Resetti", "Blathers"],
    answer: "Resetti"
},
{
    question: "All of these modes of major transpertation appear in the Animal Crossing series except:",
    choices: ["Plane", "Subway", "Train", "Boat"],
    answer: "Subway"
},
{
    question: "What type of animals sell you clothes and fancy accesories?",
    choices: ["Skunks", "Hedgehogs", "Racoons", "Frogs"],
    answer: "Hedgehogs"
},
{
    question: "This cool dog is the game's top DJ.",
    choices: ["K.K Slider", "Digby", "Goldie", "Booker"],
    answer: "K.K Slider"
},
{
    question: "Which character must you pay in order to own your house?",
    choices: ["Luna", "Harvey", "Gracie", "Tom Nook"],
    answer: "Tom Nook"
}
];

// variable setup
var time = 60;
var timer = document.getElementById("timer");
var container = document.getElementById("box1");
var startQuiz = document.getElementById("start");
var resetQuiz = document.getElementById("reset");
var score = document.getElementById("score");
var counter = 0
var initials = document.querySelector("#initials");

//functions

//timer function
function countDown(duration) {
    setInterval(function () {
        if (time >= 1) {
            timer.textContent = "Time: " + time + " seconds left";
            time--;
        }
        else {
            gameOver();
        }
    }, 1000);
}

//quiz function
function quizPlaying() {
    var questionOutput = [];
    var possibleAnswers;
    //remove start button while game is running
    startQuiz.removeEventListener("click", quizPlaying);
    console.log("here");
    document.getElementById("start").style.display = "none";
    //give choices for question[counter]
    document.getElementById("box1").style.display = "block";
    document.getElementById("showQuestion").textContent = questions[counter].question;
    for (var i = 0; i < questions[counter].choices.length; i++) {
        var currButton = document.getElementById("choice" + (i + 1));
        console.log(currButton)
        currButton.textContent = questions[counter].choices[i];
        currButton.classList.add("answer");
        currButton.addEventListener("click", checker);


    }
}

//checks choice to answer
function checker(event) {
    if (event.target.textContent !== questions[counter].answer) {
        time = time - 10;
    }
    counter++;
    if (counter >= questions.length) {
        gameOver()
    } else {
        quizPlaying();
    }
}

//game over funciton
function gameOver() {
    document.getElementById("box1").style.display = "none";
    document.getElementById("box3").style.display = "block";
    document.getElementById("timer").style.display = "none";
    //end timer if not  = 0
    if (time === 0) {
        var addTime = document.getElementById("score").textContent = "Score: 0";
       
        addScore();
    } else {
        var addTime = document.getElementById("score").textContent = "Score: " + time;
        
        addScore();
    }
    
}

//return to main page and play again
function playAgain() {
    window.location.href = "index.html"
    startQuiz.addEventListener("click", init);
}

//starts the game
function init() {
    countDown();
    quizPlaying();
}

//event listeners
startQuiz.addEventListener("click", init);
resetQuiz.addEventListener("click", playAgain);
//add initials with score
document.querySelector("#form").addEventListener("submit", function () {
    event.preventDefault();
    
        var player = {
            newScore: time,
            playerInitials: initials.value.trim()
        }
        localStorage.setItem("player", JSON.stringify(player));
        window.location.href = "highScore.html"
        var getScores = JSON.parse(localStorage.getItem("player"));
        document.querySelector("#showScores").innerHTML = getScores;
});
