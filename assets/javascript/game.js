$( document ).ready(function() {    
    // Vars
    var startGame;
    var score = answered + unanswered;
    var correctAnswers = [];
    var incorrect = 0;
    var unanswered = 0;
    var answered = 0;
    var timer = 90;


    // Q & A's
    var quest1 = {
        question: "The biggest asteroid known is:",
        answer1: ["Vesta", 0],
        answer2: ["Icarus", 0],
        answer3: ["Ceres", 1],
        answer4: ["Eros", 0]
    };
    console.log(quest1);

    var quest2 = {
        question: "One of the largest volcanos in our solar system-if not the largest-is named Olympus Mons. This volcano is located on:",
        answer1: ["Jupiter's moon Callisto", 0],
        answer2: ["Venus", 0],
        answer3: ["Saturn's moon Titan", 0],
        answer4: ["Mars", 1]
        };
        console.log(quest2);

    var quest3 = {
        question: "The Andromeda Galaxy is which of the following types of galaxies?",
        answer1: ["elliptical", 0],
        answer2: ["spiral", 1],
        answer3: ["barred-spiral", 0],
        answer4: ["irregular", 0]
        };
        console.log(quest3);

    var quest4 = {
        question: "Heliocentric (pron: he-lee-o-sen-trik) means around:",
        answer1: ["Jupiter", 0],
        answer2: ["The Moon", 0],
        answer3: ["The Sun", 1],
        answer4: ["Neptune", 0]
        };
        console.log(quest4);

    var quest5 = {
        question: "The planet Jupiter has a mass that is:",
        answer1: ["equal to the combined masses of the earth and Mars", 0],
        answer2: ["equal to the combined masses of Saturn and Pluto", 0],
        answer3: ["equal to the combined masses of Saturn, Neptune and Uranus", 0],
        answer4: ["equal to the combined masses of all planets", 1]
        };
        console.log(quest5);

    var quest6 = {
        question: "A typical galaxy, such as our Milky Way galaxy, contains how many billion stars? Is it approximately:",
        answer1: ["10 billion", 0],
        answer2: ["40 billion", 0],
        answer3: ["200 billion", 1],
        answer4: ["800 billion", 0]
        };
        console.log(quest6);

    var quest7 = {
        question: "A comet's tail points in which direction?",
        answer1: ["toward the sun", 0],
        answer2: ["toward the earth", 0],
        answer3: ["behind the comet in its orbit", 0],
        answer4: ["away from the sun", 1]
        };
        console.log(quest7);

    $("#startButton").on('click', function() {
        $(this).hide();
        $('#timer').show();
        function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "6" + seconds : seconds;

        display.text(seconds);

        if (--timer < 0) {
            timer = duration;
         }
        }, 1000);
    }

    jQuery(function ($) {
        var oneMinute = 60,
            display = $('#timer');
        startTimer(oneMinute, display);
    });
        });

//function answerQuestions {
 //loop throw the array of questions, but dont move on until an answer is recorded
 //if answer is right
 //if answer is wrong

    
//};

//function endGame {



//};

//function reset {


});