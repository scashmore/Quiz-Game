//Array of question and answers
var questoins = [
    "What currecny is used in Animal Crossing?",
    "Who will yell at you for not saving your game?",
    "All of these modes of major transpertation appear in the Animal Crossing series except:",
    "What type of animals sell you clothes and fancy accesories?",
    "This cool dog is the game's top DJ.",
    "Which character must you pay in order to own your house?"
];
var answers = [
    ["Bells", "Rupees", "Gold", "Coins"],
    ["Isabelle", "Harriet", "Resetti", "Blathers"],
    ["Plane", "Subway", "Train", "Boat"],
    ["Skunks", "Hedgehogs", "Racoons", "Frogs"],
    ["K.K Slider", "Digby", "Goldie", "Booker"],
    ["Luna", "Harvey", "Gracie", "Tom Nook"]
];

// variable setup
var time = 3;
var timer = document.getElementById("timer");
var container = document.getElementById("box1");
var startQuiz = document.getElementById("start");
var resetQuiz = document.getElementById("reset");

//functions
function countDown(duration) {
    setInterval(function() {
        if(time >= 1) {
            timer.textContent = "Time: " + time;
            time--;
        }
        else {
            timer.textContent = "Time: " + time + " GAME OVER";
        }
    }, 1000);
}

startQuiz.addEventListener("click", countDown);