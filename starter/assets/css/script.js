//Start Button
1. Have a Event listener to for the START 
2. create a questions function when user clicks on START
2. Have a set setInterval in the button listener to start timer after 

var startButtonEl = document.querySelector('start');
var timerEl = document.querySelector('.timer');
var finalscoreEl = document.querySelector('#final-score');
var questionsEl = document.querySelector('#questions');
var choicesEl = document.querySelector('#choices');
var sumitEl - document.querySelector('#submit');
var initialScoreEl = document.querySelector('#initials');
var feedbackEl = document.querySelector('#feedback');

var quizIndex = 0;
var timer = questions.length * 5;
var gameState = false;

var sfxCorrect = new Audio('./assets/sfx/correct.wav');
var sfxInorrect = new Audio('./assets/sfx/incorrect.wav');

//function to start quiz

function startQuiz 
{
    timerEl.textContent = timer;
     
    var startScreenEl = document.querySelector('#start-screen');
    startScreenEl.setAttribute('class', 'hide');
    questionsEl.removeAttribute('class');
    timerID = setInterval(clockTick, 1000);

    timerEl.textContent = 'timer';
    

    getQuestions();
    console.log()
}


//function to get the questions
function getQuestions()
{
    var currentQuestion = questions[quizIndex];
    var questionTitle = document.querySelector('question-title');

    questions.textContent = currentQuestion.questionTitle;

    currentQuestion.choices.forEach(function(choice , i)
    {
        var choiceButton = document.createElement('button');
        choiceButton.setAttribute('class', 'choices');

        choiceButton.setAttribute('value', choice);
        choiceButton.textContent = i + 1 + '.' + choice;

        choicesEl.appendChild(choiceButton);
    }
        
    ); //end of foreach
} //end of function

//function for the question click



//function to end quiz

//function for the timer to start to count
function timer() 
{
    timeAmount--;
    timerEl.textContent = timeAmount;
    if (gameState === true && timeAmount <= 0) {
      alert("Sorry! Time is over.  GAME OVER! ")
      questionsEl.setAttribute("class", "hide")
      endScreenEl.setAttribute("class", "visible");
      clearInterval(timerId)
      finalScoreEl.textContent = finalScore
      console.log("ROT: " + finalScore);
    }
}

//function to save the high score
function saveHighscore() 
{
    // get value of input box
    var initials = initialsEl.value.trim();
  
    // make sure value wasn't empty
    if (initials !== "") {
      // get saved scores from localstorage, or if not any, set to empty array
      var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
      // format new score object for current user
      var newScore = {
        score: finalScore,
        initials: initials,
      };
  
      // save to localstorage
      highscores.push(newScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));
      window.location.href = "highscores.html";
      
    }
}

//function to check if you pressed enter





//questions
var questions = [
{
    questionTitle: "What's your favorite team",
    choices: ['Benfica', 'Porto', 'Real Madrid'],
    answer: 'Benfica';
}

{
    questionTitle: "Who's the best player ?",
    choices: ['Tico Tico', 'Ronaldo', 'Sunil Chetri', 'Kyle Walker'],
    answer: 'Ronaldo';


}

    questionTitle: "Who's the best player ?",
    choices: ['Tico Tico', 'Ronaldo', 'Sunil Chetri', 'Kyle Walker'],
    answer: 'Ronaldo';
]



