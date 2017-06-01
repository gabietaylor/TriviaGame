$( document ).ready(function() {

    // Vars
    var score = answered + unanswered;
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var answered = 0;

    var timer = 0;


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
        question: "One of the largest volcanos in our solar system-if not the largest-isnamed Olympus Mons. This volcano is located on:",
        answer1: ["Jupiter's moon Callisto", 0],
        answer2: ["Venus", 0],
        answer3: ["Saturn's moon Titan", 0],
        answer4: ["Mars", 1]
        };
        console.log(quest2);

    var quest3 = {
        question: "The andromeda Galaxy is which of the following types of galaxies?",
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
        answer4: ["equal to the combined masses of Saturn, Neptune and Uranus", 1]
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
});        