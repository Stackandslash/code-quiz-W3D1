var beginEl = document.getElementById("begin");
var questionEl = document.getElementById("question");
var timer = 0;
var qNumber = 0;

var questions = [
    {
        q : "When smurgle, how many murgle?",
        answers : ["1","2","3","Burgle"]
    },
    {
        q : "How much?",
        a1 : "Not enough",
        ac : "Just enough",
        a2 : "More than enough",
        a3 : "Too much"

    },
    {
        q : "How much?",
        a1 : "Not enough",
        ac : "Just enough",
        a2 : "More than enough",
        a3 : "Too much"

    },
    {
        q : "How much?",
        a1 : "Not enough",
        ac : "Just enough",
        a2 : "More than enough",
        a3 : "Too much"

    },
    {
        q : "How much?",
        a1 : "Not enough",
        ac : "Just enough",
        a2 : "More than enough",
        a3 : "Too much"

    }
]

//Define questions, and timer var

// Start button hit 
beginEl.addEventListener("click", function() {
    qnumber = 1;
    timerStart();
    renderQuestions(qNumber);
    beginEl.style.display = "none";
  });
// - Hide the button
// - Call TIMERSTART FUNCTION
// -- Call RENDERQUESTIONS




// -- On button click in the defined area
// -- IF user clicks the button containing ac (should we assign an ID temporarily?)
// --- +1 to qnumber
// -- ELSE timer = timer - 10.
// -- Once qnumber hits 6, call the gameover function 


// -- RENDERQUESTIONS FUNCTION
// -- Populate questionEl with questions[i].q
// -- Populate answerEl1 to 4 with a1,2,3, and c.
// -- Assign the associated IDs to indicate correct and incorrect questions.
function renderQuestions(qNumberLocal){
    {
        questionEl.textContent = questions[qNumberLocal].q;
        for (var i = 0; i < 4; i++) {
            var numeral = i+1;
            var button = document.createElement("button");
            button.textContent = questions[qNumberLocal].answers[i];
            button.id = toString(numeral);
            document.body.append(button);
          }
    }
}

// -- TIMERSTART FUNCTION
// -- Show timer on top right
// -- each second, decrement timer
// -- if timer has hit zero or below(because -10 can drive it below 0), call gameover function
function timerStart(){
    
}



// --- GAMEOVER FUNCTION
// --- Hide all the quiz elements
// --- Display the final score
// --- Let user enter initials
// --- Add initials and score to list in storage
// --- Call HIGHSCORE FUNCTION

// ---- HIGHSCORE FUNCTION
// ---- Retrieve and display list
// ---- Display options to go back to start or clear.
// -----On Click of Go Back, refresh the page, or do everything manually.
// -----On Click of Clear, overwrite the local storage list with a blank, then call this function again?