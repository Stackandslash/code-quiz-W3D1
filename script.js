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
        answers : ["2","2","2","Burgle"],
        correct : ["Burgle"]
    },
    {
        q : "When smurgle, how many murgle?",
        answers : ["3","3","3","Burgle"],
        correct : ["Burgle"]
    },
    {
        q : "When smurgle, how many murgle?",
        answers : ["4","4","4","Burgle"],
        correct : ["Burgle"]
    },
    {
        q : "When smurgle, how many murgle?",
        answers : ["5","5","5","Burgle"],
        correct : ["Burgle"]
    },
]

//Define questions, and timer var

// Start button hit 
beginEl.addEventListener("click", function() {
    timerStart();
    renderQuestions();
    beginEl.style.display = "none";
    intro.style.display = "none";
  });
// - Hide the button and intro.
// - Call TIMERSTART FUNCTION
// -- Call RENDERQUESTIONS

holderEl.addEventListener("click", function(event){
    if (event.target.matches("button")) {
        if (event.target.textContent == questions[qNumber].correct){
            console.log("That's right");
            qNumber ++;
            console.log(qNumber);
            renderQuestions();
        }
        else{
            timer = (timer - 10);
        }
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
function renderQuestions(){
    if (qNumber == 5){
        gameOver();
        return;
    }
    {
        questionEl.textContent = questions[qNumber].q;
        for (var i = 0; i < 4; i++) {
            if(document.getElementById(i)){
                var oldButton = document.getElementById(i);
                oldButton.remove();
            }
            var button = document.createElement("button");
            button.textContent = questions[qNumber].answers[i];
            button.id = i;
            holderEl.append(button);
          }
    }
}

// -- TIMERSTART FUNCTION
// -- Show timer on top right
// -- each second, decrement timer, on screen and internal.
// -- if timer has hit zero or below(because -10 can drive it below 0), call gameover function
function timerStart(){
    var timeTextEl = document.createElement("h3");
    timeTextEl.textContent = "Timer: 0";
    timeTextEl.style.position = "absolute";
    timeTextEl.style.top = "10px";
    timeTextEl.style.right = "10%";
    holderEl.append(timeTextEl);
    timer = 75;
    
    var timeInterval = setInterval(function() {
    timeTextEl.textContent = "Timer: " + timer;
    timer--;

    if (timer <= 0) {
      timeTextEl.style.display = "none";
        gameOver();
      clearInterval(timeInterval);
    }

  }, 1000);
    
}



// --- GAMEOVER FUNCTION
// --- Hide all the quiz elements
// --- Display the final score
// --- Let user enter initials
// --- Add initials and score to list in storage
// --- Call HIGHSCORE FUNCTION
function gameOver(){
    questionEl.style.display = "none";
    for (var i = 0; i < 4; i++) {
        var oldButton = document.getElementById(i);
        oldButton.remove();
    }
}


// ---- HIGHSCORE FUNCTION
// ---- Retrieve and display list
// ---- Display options to go back to start or clear.
// -----On Click of Go Back, refresh the page, or do everything manually.
// -----On Click of Clear, overwrite the local storage list with a blank, then call this function again?