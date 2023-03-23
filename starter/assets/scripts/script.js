// LOGIC
var questions = 
[
    {
        questionTitle: "Which team won the 1962 European Championship ??",
        choices: ['Benfica', 'Porto', 'Real Madrid', 'Manchester United'],
        answer: 'Benfica',
    },
    
    {
        questionTitle: "Which player has scored the most goals for National Team",
        choices: ['Tico Tico', 'Cristiano Ronaldo', 'Sunil Chetri', 'Rooney'],
        answer: 'Cristiano Ronaldo',
    
    
    },
    {
        questionTitle: "Which of the following is a sport brand?",
        choices: ['Primark', 'Gucci', 'Nike', 'Microsoft'],
        answer: 'Nike',
    },
    {
        questionTitle: "Which of the following football player scored the most goals ?",
        choices: ['Cristiano Ronaldo', 'Messi', 'Pele', 'Maradona'],
        answer: 'Cristiano Ronaldo',
    },
    {
        questionTitle: "Where did the FIFA 2022 World Cup take place ?",
        choices: ['Qatar', 'Japan', 'Germany', 'Brazil'],
        answer: 'Qatar',
    },
    {
        questionTitle: "Which Player has won the most Ballon D'OR titles ?",
        choices: ['Maradona', 'Cristiano Ronaldo', 'Messi', 'Ozil'],
        answer: 'Messi'
    },
    {
        questionTitle: "Which of the following is the confederation of Africa ? ",
        choices: ['UEFA', 'CAF', 'CONMEBOL', 'AFC'],
        answer: 'CAF',
    },  
];
  var startBtn = document.querySelector("#start");
  var timerEl = document.querySelector(".timer");
  var finalScoreEl = document.querySelector("#final-score");
  var questionsEl = document.querySelector("#questions");
  var submitEl = document.querySelector("#submit");
  var initialScoreEl = document.querySelector("#initials");
  var feedbackEl = document.querySelector("#feedback");
  var feedbackAreaEl = document.querySelector(".feedbackArea")
  var choicesEl = document.querySelector("#choice");
  var startScreenEl = document.querySelector("#start-screen");
  var endScreenEl = document.querySelector("#end-screen");
  var submitFeedbackBtnEl = document.querySelector("#submitFeedbackBtn")
  
  
  var quizIndex = 0;
  var timeAmount = questions.length * 5;
  
  var choicesHolder = document.querySelectorAll("choices");
  
  var sfxCorrect = new Audio("./assets/sfx/correct.wav");
  var sfxIncorrect = new Audio("./assets/sfx/incorrect.wav");
  var timerId 
  var gameState = false
  
  // HIGHSCORES
  var highscoresEl = document.querySelector("#highscores");
  var initialsEl = document.querySelector("#initials");
  
  var finalScore = 0
  // Function to start quiz
  function startQuiz() {
    gameState = true
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timerEl.textContent = timeAmount;
    timerId = setInterval(timer, 1000);
    getQuestion();
  }
  
  // function to make timer
  function timer() {
    timeAmount--;
    timerEl.textContent = timeAmount;
    if (gameState === true && timeAmount <= 0) {
      alert("Sorry! Time is over.  GAME OVER")
      questionsEl.setAttribute("class", "hide")
      endScreenEl.setAttribute("class", "visible");
      clearInterval(timerId)
      finalScoreEl.textContent = finalScore
      console.log(" " + finalScore);
    }
  }
  
  // Function to get the questions
  function getQuestion() {
    var currentQuestion = questions[quizIndex];
    var question = document.querySelector("#question-title");
    var choicesHolder = document.querySelector("#choices");
    question.textContent = currentQuestion.questionTitle;
    
    currentQuestion.choices.forEach(function (choice, i) {
      var choiceBtn = document.createElement("button");
      choiceBtn.setAttribute("class", "choices");
      choiceBtn.setAttribute("value", choice);
      choiceBtn.textContent = i + 1 + ". " + choice;
      choicesHolder.appendChild(choiceBtn);
      choiceBtn.addEventListener("click", function () {
  
        if (quizIndex === questions.length - 1 ) {
          if (choiceBtn.value === currentQuestion.answer) {
              finalScore ++
              sfxCorrect.play();
            }
            finalScoreEl.textContent = finalScore + "/" + questions.length
            questionsEl.setAttribute("class", "hide")
            endScreenEl.setAttribute("class", "visible");
            console.log(finalScore);
            gameState = false
            clearInterval(timerId)
   
          return
        }
  
        if (choiceBtn.value === currentQuestion.answer ) {
          finalScore ++
          console.log(finalScore);
          question.textContent = questions[quizIndex].questionTitle;
          sfxCorrect.play();
          quizIndex++;
          choicesHolder.innerHTML = "";
          getQuestion();
          
        } else if (choiceBtn.value !== currentQuestion.answer){
          timeAmount -= 10
          question.textContent = questions[quizIndex].questionTitle;
          console.log(finalScore);
          sfxIncorrect.play();
          quizIndex++;
          choicesHolder.innerHTML = "";
          getQuestion();
        }
      });
    });
  }
  
  // Function to check if you've pressed enter and for saving the high score
  function saveHighscore() {
      // get value of input box
      var initials = initialsEl.value.trim();
    
      // validation
      if (initials !== "") 
      {
        
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        
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
    
  
  submitEl.addEventListener("click", function(){
    saveHighscore()
  
  })
  
  startBtn.onclick = startQuiz;