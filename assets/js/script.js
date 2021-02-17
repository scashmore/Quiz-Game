//Array of question and answers
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
function countDown(duration) {
    setInterval(function () {
        if (time >= 1) {
            timer.textContent = "Time: " + time + " seconds left";
            time--;
        }
        else {
            timer.textContent = "Time: " + time + " GAME OVER";
        }
    }, 1000);
}



//event listeners
startQuiz.addEventListener("click", countDown);