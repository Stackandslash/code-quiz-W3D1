var beginEl = document.getElementById("begin");
var questionEl = document.getElementById("question");
var holderEl = document.querySelector("#holder");
var timer = 0;
var qNumber = 0;
var score = 0;
var gameOverVar = 0;

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
var highScoreList = JSON.parse(localStorage.getItem("highscore"));
var timeTextEl = document.createElement("h3");
timeTextEl.textContent = "Timer: 0";
timeTextEl.style.position = "absolute";
timeTextEl.style.top = "10px";
timeTextEl.style.right = "10%";


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
}


// ---- HIGHSCORE FUNCTION
// ---- Retrieve and display list
// ---- Display options to go back to start or clear.
// -----On Click of Go Back, refresh the page, or do everything manually.
// -----On Click of Clear, overwrite the local storage list with a blank, then call this function again?

function highScore(){
    var timeTextEl = document.createElement("ol");
    // New li for each score
    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i];
  
      var li = document.createElement("li");
      li.textContent = todo;
      li.setAttribute("data-index", i);
  
      var button = document.createElement("button");
      button.textContent = "Complete";
  
      li.appendChild(button);
      todoList.appendChild(li);
    }
  }