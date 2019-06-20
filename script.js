let questionNumber = random100();
let score = 0;

//basic function for generating a random number from 1 to 100
function random100() {
    return Math.floor(Math.random() * 100) + 1;
}

// function that creates an array containing 10 random numbers from 1 to 100.
// function createRandomList() {
//     let randomList = [];
//     for (let i = 0; i < 10; i++) {
//         randomList.push(random100());
//     }
//     return randomList;
// }

// let myRandomNumbers = createRandomList(0);
// console.log("my random list", myRandomNumbers);

//generate question html
function generateQuestion() {
    return `<div class="question-${questionNumber}">
            <h2>${STORE[questionNumber].question}</h2>
        <form>
            <fieldset>
            <label class="answerOption">
                <input type="radio" value=0 name="answer" required>
                <span>${STORE[questionNumber].answers[0]}</span>
            </label>
            <label class="answerOption">
                <input type="radio" value=1 name="answer" required>
                <span>${STORE[questionNumber].answers[1]}</span>
            </label>
            <label class="answerOption">
                <input type="radio" value=2 name="answer" required>
                <span>${STORE[questionNumber].answers[2]}</span>
            </label>
            <label class="answerOption">
                <input type="radio" value=3 name="answer" required>
                <span>${STORE[questionNumber].answers[3]}</span>
            </label>
            <label class="answerOption">
                <input type="radio" value=4 name="answer" required>
                <span>${STORE[questionNumber].answers[4]}</span>
            </label>
            <button type="submit" class="submitButton">Submit</button>
            </fieldset>
        </form>
        </div>`;
}

//render the questions to dom when pressing ready!
function startQuiz() {
    $("#btn-ready").on("click", function (event) {
        $(".quizBody").html(generateQuestion());
        userSelectAnswer()
    });
}

//users feedback. select answer
//what happens after you press submit
function userSelectAnswer() { 
    $("form").on("submit", function() {
    event.preventDefault();

    let selected = $('input[value]:checked');
    let answer = selected.val();
    let correctAnswer = STORE[questionNumber].correctAnswer;
    console.log(answer);
    console.log("correct answer", STORE[questionNumber].correctAnswer);

    console.log(`${STORE[questionNumber].answers[answer]}`);

    if (correctAnswer.includes(answer)) {
        selected.parent().addClass("correct");
        alert("correct answer");
        countTenQuestions(true)
        correctAnswerSelected()
    } else {
        selected.parent().addClass("wrong");
        alert('wrong answer')
        countTenQuestions(false)
        wrongAnswerSelected(correctAnswer.map(index => STORE[questionNumber].answers[index]));
    }
    renderNextQuestion()
    });
}

//counter 
function countTenQuestions(valid) {
    console.log('the answer is', valid)
    if (valid) {
        score++
    }
}
//update score text
//render next question

function renderNextQuestion(){
    $('.module').on('click', '.nextButton', function (){
        console.log('please work!')
        $("").html(generateQuestion());
        // userSelectAnswer()
        renderNextQuestion()
        
    })
}

//what happens if the users press the wrong answer
function wrongAnswerSelected(correctAnswer) {
     $("form").html(`<div class="answered-wrong module">
    <p>Wrong!<br> The correct answer is <span>"${correctAnswer}"</span></p>
      <button type=button class="nextButton">Next</button>
    </div>`);
}

//what happens if the users press the right answer
function correctAnswerSelected() {
    let correctAnswer = STORE[questionNumber].correctAnswer;
    $("form").html(`<div class="answered-correct module">
    <p>Correct! <br> </p>
      <button type=button class="nextButton">Next</button>
    </div>`);
}


function createQuiz() {
    startQuiz();
    // userSelectAnswer();
}
$(createQuiz);
