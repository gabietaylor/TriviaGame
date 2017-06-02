$( document ).ready(function() {    
    // Vars
    var incorrect = 0;
    var unanswered = 0;
    var correct = 0;
    var total;
    // Q & A's change them because it will be easier to string them tpgether for html and logic for tracker
    var question = ["The biggest asteroid known is:", 
                    "One of the largest volcanos in our solar system-if not the largest-is named Olympus Mons. This volcano is located on:",
                    "The Andromeda Galaxy is which of the following types of galaxies?",
                    "Heliocentric (pron: he-lee-o-sen-trik) means around:",
                    "The planet Jupiter has a mass that is:",
                    "A typical galaxy, such as our Milky Way galaxy, contains how many billion stars? Is it approximately:",
                    "A comet's tail points in which direction?"];
                    console.log(question);
    var answers = ["Vesta, Icarus, Ceres, Eros",
                   "Jupiter's moon Callisto, Venus, Saturn's moon Titan, Mars",
                   "elliptical, spiral, barred-spiral, irregular",
                   "Jupiter, The Moon, The Sun, Neptune",
                   "equal to the combined masses of the earth and Mars, equal to the combined masses of Saturn and Pluto, equal to the combined masses of Saturn, Neptune and Uranus, equal to the combined masses of all planets",
                   "10 billion, 40 billion, 200 billion, 800 billion",
                   "toward the sun, toward the earth, behind the comet in its orbit, away from the sun"];
                   console.log(answers);
    var correctAnswers = ["Ceres", 
                          "Mars", 
                          "spiral", 
                          "The Sun", 
                          "equal to the combined masses of all planets", 
                          "200 billion",
                          "away from the sun"];
        console.log(correctAnswers);
    //starts game, hides button, then start timer
    $("#startButton").on('click', function() {
        $(this).hide();
        $('#timer').show();
        //timer counting down to 60
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

    function htmlOnPage() {
         
    }

    function lossToTimeout() {

    }

    function win() {
        
    }

    function loss() {
        
    }



 //loop throw the array of questions, but dont move on until an answer is recorded
 //if answer is right
 //if answer is wrong

    

//function endGame {



//};

//function reset {


});