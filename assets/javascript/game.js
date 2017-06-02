$( document ).ready(function() {    
    // Vars
    var incorrect = 0;
    var correct = 0;
    var html;

    // Q & A's change them because it will be easier to string them tpgether for html and logic for tracker
    var questionsAnswers = [
                           ["The biggest asteroid known is:", "Ceres"], 
                           ["One of the largest volcanos in our solar system-if not the largest-is named Olympus Mons. This volcano is located on:", "Mars"], 
                           ["The Andromeda Galaxy is which of the following types of galaxies?", "spiral"],
                           ["Heliocentric (pron: he-lee-o-sen-trik) means around:", "The Sun"],
                           ["The planet Jupiter has a mass that is:", "equal to the combined masses of all planets"],
                           ["A typical galaxy, such as our Milky Way galaxy, contains how many billion stars? Is it approximately:", "200 billion"],
                           ["A comet's tail points in which direction?", "away from the sun"]
                           ];
                    //console.log(questionsAnswers);
    var choices =  [
                   ["Vesta", "Icarus", "Ceres", "Eros"],
                   ["Jupiter's moon Callisto", "Venus", "Saturn's moon Titan", "Mars"],
                   ["elliptical", "spiral", "barred-spiral", "irregular"],
                   ["Jupiter", "The Moon", "The Sun", "Neptune"],
                   ["equal to the combined masses of the earth and Mars", "equal to the combined masses of Saturn and Pluto", "equal to the combined masses of Saturn", "Neptune and Uranus, equal to the combined masses of all planets"],
                   ["10 billion", "40 billion", "200 billion", "800 billion"],
                   ["toward the sun", "toward the earth", "behind the comet in its orbit", "away from the sun"]
                   ];
                   //console.log(choices);
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
    for(var i = 0; i < questionsAnswers.length; i++){
        for(var i = 0; i < choices.length; i++){
            questionsAnswers[i - 1] = questionsAnswers[i];
        printThis += "<br>" + questionsAnswers[0][0] + "<br>" + "<br>" + 
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