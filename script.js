var beginEl = document.getElementById("begin");
var questionEl = document.getElementById("question");
var holderEl = document.querySelector("#holder");
var timer = 0;
var qNumber = 0;
var score = 0;
var gameOverVar = 0;
var highScoreLocal = [];

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

//Define questions, elements, timer and question number var, retrieve and store high score info.
var timeTextEl = document.createElement("h3");
timeTextEl.textContent = "Timer: 0";
timeTextEl.style.position = "absolute";
timeTextEl.style.top = "10px";
timeTextEl.style.right = "10%";

if(localStorage.getItem("highscore")){
    highScoreLocal = JSON.parse(localStorage.getItem("highscore"))
}
else{
    highScoreLocal = [];
}

// Start button hit 
beginEl.addEventListener("click", function() {
    timerStart();
    renderQuestions();
    beginEl.style.display = "none";
    intro.style.textContent = "";
  });
// - Hide the button and intro.
// - Call TIMERSTART FUNCTION
// -- Call RENDERQUESTIONS

holderEl.addEventListener("click", function(event){
    if (event.target.matches("button")) 
    console.log(event.target.id);
    {
        if (qNumber < 5 && event.target.textContent == questions[qNumber].correct){
            console.log("That's right");
            qNumber ++;
            console.log(qNumber);
            renderQuestions();
        }   
        else if (event.target.id == "resetHS"){
            highScoreWipe();
        }   

        else if (event.target.id == "refresh"){
            location.reload();
        }   

        else if (event.target.id == "1" || event.target.id == "2" || event.target.id == "3" || event.target.id == "4"){
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
    holderEl.append(timeTextEl);
    timer = 75;
    
    var timeInterval = setInterval(function() {
    timeTextEl.textContent = "Timer: " + timer;
    timer--;
    if (timer <= 0) {
    clearInterval(timeInterval);
    gameOver(); //If the player reaches game over with correct answers, this will still eventually fire and prompt an error. So we hack a flag onto that.
    }

  }, 1000);
    
}



// --- GAMEOVER FUNCTION
// --- Hide all the quiz elements
// --- Save and display the final score
// --- Let user enter initials
// --- Add initials and score to list in storage
// --- Call HIGHSCORE FUNCTION
function gameOver(){
    if (gameOverVar == 1){
        return;
    }
    gameOverVar = 1;
    score = timer;
    timeTextEl.style.display = "none";
    for (var i = 0; i < 4; i++) {
        var oldButton = document.getElementById(i);
        oldButton.remove();
    }

    questionEl.textContent = "Game Over!";
    intro.textContent = "Your score is: " + score;

    var HSEntryForm = document.createElement("form");
    holderEl.appendChild(HSEntryForm);
    var HSEntryBox = document.createElement("input");
    HSEntryBox.type = "text";
    HSEntryBox.placeholder = "Enter your Name";
    HSEntryBox.id = "HSEntryBoxID";
    HSEntryForm.appendChild(HSEntryBox);
    var theText = document.querySelector("#HSEntryBoxID");
    HSEntryForm.addEventListener("submit", function(event){
        event.preventDefault();
        console.log(theText.value);
        var finalString = theText.value.trim() + " - Score: " + score;
        console.log(finalString);
        highScoreLocal.push(finalString);
        localStorage.setItem("highscore", JSON.stringify(highScoreLocal));
        HSEntryForm.remove();
        intro.textContent = "";
        highScore();
    })
}


// ---- HIGHSCORE FUNCTION
// ---- Retrieve and display list
// ---- Display options to go back to start or clear.
// -----On Click of Go Back, refresh the page, or do everything manually.
// -----On Click of Clear, overwrite the local storage list with a blank, then call this function again?

function highScore(){
    questionEl.textContent = "High Scores";
    var highScoreList = document.createElement("ol");
    highScoreList.id = "highscorelist";
    holderEl.appendChild(highScoreList);
    console.log(highScoreLocal);
    // New li for each score. If no score (user avoided entering any), placeholder message.
    if(highScoreLocal.length == 0){
        var entry = document.createElement("li");
        entry.textContent = "You could be here!"
        highScoreList.appendChild(entry);
    }
        for (var i = 0; i < highScoreLocal.length; i++){
        var entry = document.createElement("li");
        entry.textContent = highScoreLocal[i];
        highScoreList.appendChild(entry);
        }
    var resetButtonEl = document.createElement("button");
    resetButtonEl.textContent = "Clear Data";
    resetButtonEl.id = "resetHS";
    holderEl.appendChild(resetButtonEl);
    var refreshButtonEl = document.createElement("button");
    refreshButtonEl.textContent = "Restart";
    refreshButtonEl.id = "refresh";
    holderEl.appendChild(refreshButtonEl);
  }

  //-- If you need to wipe the scores, this keeps the screen clean.

  function highScoreWipe(){
    console.log("Resetting High Scores");
    localStorage.setItem("highscore", "");
    highScoreLocal = [];
    var deleter = document.getElementById("resetHS");
    deleter.remove();
    deleter = document.getElementById("refresh");
    deleter.remove();
    deleter = document.getElementById("highscorelist"); //not a button.
    deleter.remove();

    highScore();
  }