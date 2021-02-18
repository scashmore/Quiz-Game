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
// var answers = [
//     ["Bells", "Rupees", "Gold", "Coins"],
//     ["Isabelle", "Harriet", "Resetti", "Blathers"],
//     ["Plane", "Subway", "Train", "Boat"],
//     ["Skunks", "Hedgehogs", "Racoons", "Frogs"],
//     ["K.K Slider", "Digby", "Goldie", "Booker"],
//     ["Luna", "Harvey", "Gracie", "Tom Nook"]
// ];

// variable setup
var time = 60;
var timer = document.getElementById("timer");
var container = document.getElementById("box1");
var startQuiz = document.getElementById("start");
var resetQuiz = document.getElementById("reset");

//functions

//timer function
function countDown(duration) {
    setInterval(function () {
        if (time >= 1) {
            timer.textContent = "Time: " + time + " seconds left";
            time--;
        }
        else {
            timer.textContent = "GAME OVER";
        }
    }, 1000);
}

function quizPlaying() {
    var questionOutput = [];
    var possibleAnswers;

    //resetting chioces each question
    for (var i = 0; i < questions.length; i++) {
        possibleAnswers = [];
    }
    //give choices for question i
    //I need something else here. I'll come back
    for (questions[i].choices) {

    }
    //display question & choices

    //compare choice with answer
    if () {

    } else {
        //Idea, but I think there is another way
        time = time - 10;
    }
    if (time >= 1) {
        //next question
    } else {
        //game over function
    }

}

function gameOver() {
    //end timer if not  = 0
    //display time as score
    //prompt user for initials
    //move to high score page
    //show reset/play again button
    //if reset/play again return to quiz page

}

function playAgain() {
    //show button on high score page
    //promt user to play again
    if (yes) {
        //return to quiz page
    }

}



//event listeners
startQuiz.addEventListener("click", countDown);
resetQuiz.addEventListener("click", playAgain);