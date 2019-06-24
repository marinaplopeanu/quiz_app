let correct = 0;
let currentQuestion = 0;
const questionBank = [];


//generate and array of 10 random questions from STORE. 
function generateQuestionList() {
    // return Array.from({
    //     length: 2
    // }, () => Math.floor(Math.random() * 94) + 1).map(rn => {
    //     return STORE[rn];
    // })

    var arr = []
    while (arr.length < 2) {
        var r = Math.floor(Math.random() * 94) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    console.log('arr: ', arr);
    let arr_returned = [];
    for (let index = 0; index < STORE.length; index++) {
        if (arr.includes(index)) {
            const element = STORE[index];
            arr_returned.push(element);
        }
    }
     console.log('the random questions: ', arr_returned);
     return arr_returned;

}

//start quiz when pressing the ready button
function startQuiz() {
    $(".btn-ready").on("click", function (event) {
        console.log("you clicked ready btn -the questions start")
        // generateQuestionList();
        questionList = generateQuestionList();
        displayQuestion();
        userSelectAnswer();
        
    });
}


//build the html for questions and answers
function generateQuestion() {

    console.log('generateQuestion ran');
    console.log(questionList);


    return `
    <div>
      <img class="logo" src="https://github.com/marinaplopeanu/quiz_app/blob/master/america.JPG?raw=true" alt="lady liberty" />
      <ul class="score">
        <li>Question: ${currentQuestion+1}/10</li>
        <li>${correct} Correct</li>
      </ul>
    <h2 class="question-text">${questionList[currentQuestion].question}</h2>

      <form>
          <fieldset>
          <label class="answerOption">
              <input type="radio" value=0 name="answer" required>
              <span>${questionList[currentQuestion].answers[0]}</span>
          </label>
          <label class="answerOption">
              <input type="radio" value=1 name="answer" required>
              <span>${questionList[currentQuestion].answers[1]}</span>
          </label>
          <label class="answerOption">
              <input type="radio" value=2 name="answer" required>
              <span>${questionList[currentQuestion].answers[2]}</span>
          </label>
          <label class="answerOption">
              <input type="radio" value=3 name="answer" required>
              <span>${questionList[currentQuestion].answers[3]}</span>
          </label>
          <label class="answerOption">
              <input type="radio" value=4 name="answer" required>
              <span>${questionList[currentQuestion].answers[4]}</span>
          </label>
          <button type="submit" class="btn-submit btn2">Submit</button>
          </fieldset>
      </form>
    </div>`;
}

// function styleQuiz(){
// $('.answerOption').mouseover(function(){
//     $(this).css('color','red');
// });
// }



//what happens after you press submit on an answer
function userSelectAnswer() {
    $("form").on("submit", function (event) {
        event.preventDefault();
        let selected = $('input[value]:checked');
        let answer = parseInt(selected.val());
        let correctAnswer = questionList[currentQuestion].correctAnswer;

        console.log('answer', answer);
        console.log("correct answer", correctAnswer);

        if (correctAnswer.includes(answer)) {
            selected.parent().addClass("correct");
            // alert("correct answer");
            correct++;
            correctAnswerSelected()
        } else {
            selected.parent().addClass("wrong");
            wrongAnswerSelected(correctAnswer.map(index => questionList[currentQuestion].answers[index]));
        }
        renderNextQuestion()
    });
}



//what happens if the users press the wrong answer
function wrongAnswerSelected(correctAnswer) {
    $("h2").remove();
    $(".logo").remove();
    $("form").html(`<div class="answered-wrong module">
    <img src="patriotic_eagle_disapointed.JPG" alt="patriotic eagle disapointed" class="image">
    <h3>Wrong!</h3>
     <p>The correct answer is <span>"${correctAnswer}"</span></p>
      <button type="button" class="btn-next btn">Next</button>
    </div>`);
}

//what happens if the users press the right answer
function correctAnswerSelected() {
    $("h2").remove();
    $(".logo").remove();
    $("form").html(`<div class="answered-correct module">
    <img src="patriotic_eagle_thumbs_up.JPG" alt="patriotic eagle thumbs up" class="image">
    <h3>Correct!</h3>
      <button type="button" class="btn-next btn">Next</button>
    </div>`);
}


//display the question
function displayQuestion() {

    // if (currentQuestion < questionList.length) {
    //     console.log("length", questionList.length);
    //     console.log("current question", currentQuestion);
        $(".quizBody").html(generateQuestion());
       
    // } else {
    //     // display the results
    //     console.log('done 10')
    //     displayResults()
    //     // $(".quizBpdy").html(displayResults());
    //     // displayQuestion()
    // }
}

//update score text
//render next question
function renderNextQuestion() {
   
        $('.btn-next').on('click', function (event) {
            // displayResults();

            console.log('you clicked next!');
            console.log('currentQuestion:', currentQuestion);
            console.log('questionList.length', questionList.length);
             if (currentQuestion < questionList.length-1) {
            // event.preventDefault();
            console.log('you have more questions left!')
            currentQuestion++;
            displayQuestion();
            userSelectAnswer();
                } else {
                    console.log('youa re done!')
                    displayResults();
                    restartQuiz();
                }


        })

}

//these are the last pages that don't want to display
function displayResults() {

    console.log("displayResults ran")
    console.log("correct is", correct)
    $('.score').hide();
    if (correct >= 6) {
        $("form").html(`<div class="results correctFeedback">
            <h3>You're on fire!</h3>
            <img src="patriotic_eagle_congrats.JPG" alt="patriotic eagle congrats" class="image">
            <p>You got ${correct} / 10</p>
            <p>You're ready to become an US citizen!</p>
            <button class="btn-restart btn2">Restart Quiz</button>
            </div>`)
    } else {
        $("form").html(`<div class="results correctFeedback">
        <h3>You need to practice some more!</h3>
        <img src="patriotic_eagle_wrong.JPG" alt="patriotic eagle wrong" class="image">
        <p>You got ${correct}/ 10</p>
        <button class="btn-restart btn2">Restart Quiz</button></div>`)
    }

}
// restartQuiz - all globals reset and call start functions
function restartQuiz() {
    console.log('you clicked reset quiz!')
    $(".btn-restart").on("click", function (event) {
        console.log('you clicked reset quiz!');
        window.location.reload(true);
    });
}

function createQuiz() {
    startQuiz();
    userSelectAnswer();
}
$(createQuiz);
