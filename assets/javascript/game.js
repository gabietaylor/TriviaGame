    // other vars created so I can fix the array problem
/*var bankOfQuestions = {
         question1: "The biggest asteroid known is:",
         choices1: ["Vesta", "Icarus", "Ceres", "Eros"],
         answer1: "Ceres"
         },
         {
          question2: "One of the largest volcanos in our solar system-if not the largest-is named Olympus Mons. This volcano is located on:",
          choices2: ["Jupiter's moon Callisto", "Venus", "Saturn's moon Titan", "Mars"],
          answer2: "Mars"
         },
         }
          question3: "The Andromeda Galaxy is which of the following types of galaxies?",
          choices3: ["elliptical", "spiral", "barred-spiral", "irregular"],
          answer3: "spiral"
         },
         {
         question4: "Heliocentric (pron: he-lee-o-sen-trik) means around:",
         choices4: ["Jupiter", "The Moon", "The Sun", "Neptune"],
         answer4: "The Sun"
         },
         }
         question5: "The planet Jupiter has a mass that is:",
          choices5: ["equal to the combined masses of the earth and Mars", "equal to the combined masses of Saturn and Pluto", "equal to the combined masses of Saturn", "Neptune and Uranus, equal to the combined masses of all planets"],
          answer5: "equal to the combined masses of all planets"
          },
          }
         question6: "A typical galaxy, such as our Milky Way galaxy, contains how many billion stars? Is it approximately:",
         choices6: ["10 billion", "40 billion", "200 billion", "800 billion"],
         answer6: "200 billion"
         },
         {
         question7: "A comet's tail points in which direction?",
         choices7: ["toward the sun", "toward the earth", "behind the comet in its orbit", "away from the sun"]
         answer7: "away from the sun"
          }
          ]
 });*/
    // Q & A's change them because it will be easier to string them tpgether for html and logic for tracker
    $( document ).ready(function() {    
    // Vars
    var incorrect = 0;
    var correct = 0;
    var html;
    // Q & A's change them because it will be easier to string them tpgether for html and logic for tracker
     var question = ["The biggest asteroid known is:", 
                     "One of the largest volcanos in our solar system-if not the largest-is named Olympus Mons. This volcano is located on:",
                     "The Andromeda Galaxy is which of the following types of galaxies?",
                     "Heliocentric (pron: he-lee-o-sen-trik) means around:",
                     "The planet Jupiter has a mass that is:",
                     "A typical galaxy, such as our Milky Way galaxy, contains how many billion stars? Is it approximately:",
                     "A comet's tail points in which direction?"];
                     console.log(question);
     var choices = ["Vesta, Icarus, Ceres, Eros",
                    "Jupiter's moon Callisto, Venus, Saturn's moon Titan, Mars",
                    "elliptical, spiral, barred-spiral, irregular",
                    "Jupiter, The Moon, The Sun, Neptune",
                    "equal to the combined masses of the earth and Mars, equal to the combined masses of Saturn and Pluto, equal to the combined masses of Saturn, Neptune and Uranus, equal to the combined masses of all planets",
                    "10 billion, 40 billion, 200 billion, 800 billion",
                    "toward the sun, toward the earth, behind the comet in its orbit, away from the sun"];
                    console.log(choices);
     var correctAnswers = ["Ceres", 
                           "Mars", 
                           "spiral", 
                           "The Sun", 
                           "equal to the combined masses of all planets", 
                           "200 billion",
                           "away from the sun"];
         console.log(correctAnswers); 
    //starts game, hides button, then start timer
        $('#total').hide();
        $('.doneButton').hide();
    $("#startButton").on('click', function() {
        $(this).hide();
        $('.doneButton').show();
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
        
    //hide the Q & A's till button is pressed
    
        $('#questions').show();
    //put html on page
    function htmlOnPage() {
    var printThis = "";
    for(var i = 0; i < question.length; i++){
        for(var i = 0; i < choices.length; i++){
        printThis += "<br>" + question[i] + "<br>" + "<br>" + 
        ('<label><input type="radio" name="choices" value="' + choices[i] + '" /> ' + choices[i] + '</label>') + "<br>";
    }
    }
    return printThis;
}
    document.getElementById('questions').innerHTML = htmlOnPage();
    });

//either make radio btns or make the choices clickable then once chosen non clickable

    $(".doneButton").on('click', function() {
        $(this).hide();
        $('#questions').hide();
        $('#total').show();
        $('#timer').hide();
    function results() { 

        //piece together the logic behind your tally
        //if(userAnswer===correctchoices){
            //correct++;
        //}

    var tally = "";
    for(var i = 0; i < choices.length; i++){
        tally = "Incorrect: " + incorrect + "<br>" + "Correct: " + correct + "<br>";
    }
    return tally;
}
document.getElementById('total').innerHTML = results();
    });        


});