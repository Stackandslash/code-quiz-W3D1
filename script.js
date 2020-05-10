var beginEl = document.getElementById("begin");
var questionEl = document.getElementById("question");
var holderEl = document.querySelector("#holder");
var timer = 0;
var qNumber = 0;

var questions = [
    {
        q : "When smurgle, how many murgle?",
        answers : ["1","2","3","Burgle"],
        correct : ["Burgle"]
    },
    {
        q : "When smurgle, how many murgle?",
        answers : ["1","2","3","Burgle"]
    },
    {
        q : "When smurgle, how many murgle?",
        answers : ["1","2","3","Burgle"]
    },
    {
        q : "When smurgle, how many murgle?",
        answers : ["1","2","3","Burgle"]
    },
    {
        q : "When smurgle, how many murgle?",
        answers : ["1","2","3","Burgle"]
    }
]

//Define questions, and timer var

// Start button hit 
beginEl.addEventListener("click", function() {
    qnumber = 1;
    timerStart();
    renderQuestions(qNumber);
    beginEl.style.display = "none";
    intro.style.display = "none";
  });
// - Hide the button
// - Call TIMERSTART FUNCTION
// -- Call RENDERQUESTIONS

holderEl.addEventListener("click", function(){
    if (event.target.matches("button")) {
        console.log("You clicked a button");
        
    }
});

// -- On button click in the defined area
// -- IF user has clicked a button, 
// -- IF user clicks the button containing answer (event.target.textContent == questions.qNumber.answer)
// --- +1 to qnumber, Call RENDERQUESTIONS.
// -- ELSE timer = timer - 10.


// -- RENDERQUESTIONS FUNCTION
// -- IF qnumber hits 6, call the gameover function and RETURN 
// -- Populate questionEl with questions[i].q
// -- Populate answerEl1 to 4 with a1,2,3, and c.
// -- We're just going to use event.target.textContent outside the function to handle answers.
function renderQuestions(qNumberLocal){
    if (qNumber == 6){
        gameOver();
        return;
    }
    {
        questionEl.textContent = questions[qNumberLocal].q;
        for (var i = 0; i < 4; i++) {
            var button = document.createElement("button");
            button.textContent = questions[qNumberLocal].answers[i];
            holderEl.append(button);
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