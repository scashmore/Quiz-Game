//Array of question, chioces, and answers
var questions= [{

    question: "What currecny is used in Animal Crossing?",
    choices: ["Bells", "Rupees", "Gold", "Coins"],
    answer: "Bells"},
{
    question: "Who will yell at you for not saving your game?",
    choices: ["Isabelle", "Harriet", "Resetti", "Blathers"],
    answer: "Resetti"},
{
    question: "All of these modes of major transpertation appear in the Animal Crossing series except:",
    choices: ["Plane", "Subway", "Train", "Boat"],
    answer: "Subway"},
{
    question: "What type of animals sell you clothes and fancy accesories?",
    choices: ["Skunks", "Hedgehogs", "Racoons", "Frogs"],
    answer: "Hedgehogs"},
{
    question: "This cool dog is the game's top DJ.",
    choices: ["K.K Slider", "Digby", "Goldie", "Booker"],
    answer: "K.K Slider"},
{
    question: "Which character must you pay in order to own your house?",
    choices: ["Luna", "Harvey", "Gracie", "Tom Nook"],
    answer: "Tom Nook"}
];

// variable setup
var time = 60;
var timer = document.getElementById("timer");
var container = document.getElementById("box1");
var startQuiz = document.getElementById("start");
var resetQuiz = document.getElementById("reset");
var counter = 0

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

function quizPlaying() {
    var questionOutput = [];
    var possibleAnswers;
    //remove start button while game is running
    startQuiz.removeEventListener("click", quizPlaying);
    console.log("here");
    //give choices for question[counter]
    document.getElementById("showQuestion").textContent = questions[counter].question;
    for (var i =0; i < questions[counter].choices.length; i++) {
        var currButton = document.getElementById("choice" + (i + 1));
        console.log(currButton)
        currButton.textContent = questions[counter].choices[i];
        currButton.classList.add("answer");
        currButton.addEventListener("click", checker);


    }
    //display question & choices

}

function gameOver() {
    //end timer if not  = 0
    if(time !== 0) {
        window.location.href = "highScore.html";
    } else {
        
    }
    window.location.href = "highScore.html";
    //display time as score
    //prompt user for initials
    //move to high score page
    //show reset/play again button
    //if reset/play again return to quiz page

}

// function playAgain() {
//     //show button on high score page
//     //promt user to play again
//     if (yes) {
//         startQuiz.addEventListener("click", init);
//         //return to quiz page
//     }

// }

//checks choice to answer
function checker(event) {
    if(event.target.textContent !== questions[counter].answer) {
        alert("you're wrong");
        time = time - 10;
    }
    counter++;
    if(counter >= questions.length) {
        gameOver()
    } else {
    quizPlaying();
    }
}

function init() {
    countDown();
    quizPlaying();
}

//event listeners
startQuiz.addEventListener("click", init);
//resetQuiz.addEventListener("click", playAgain);
