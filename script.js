let questionNumber = random100();
let score = 0;

//basic function for generating a random number from 1 to 100
function random100() {
  return Math.floor(Math.random() * 100) + 1;
}

// function that creates an array containing 10 random numbers from 1 to 100.
function createRandomList() {
  let randomList = [];
  for (let i = 0; i < 10; i++) {
    randomList.push(random100());
  }
  return randomList;
}

let myRandomNumbers = createRandomList(0);
console.log("my random list", myRandomNumbers);

//generate question html
function generateQuestion() {
  console.log("generating query");
  return `<div class="question-${questionNumber}">
            <h2>${STORE[questionNumber].question}</h2>
        <form>
            <fieldset>
            <label class="answerOption">
                <input type="radio" value=${
                  STORE[questionNumber].answers[0]
                }" name="answer" required>
                <span>${STORE[questionNumber].answers[0]}</span>
            </label>
            <label class="answerOption">
                <input type="radio" value=${
                  STORE[questionNumber].answers[1]
                }" name="answer" required>
                <span>${STORE[questionNumber].answers[1]}</span>
            </label>
            <label class="answerOption">
                <input type="radio" value=${
                  STORE[questionNumber].answers[2]
                }" name="answer" required>
                <span>${STORE[questionNumber].answers[2]}</span>
            </label>
            <label class="answerOption">
                <input type="radio" value=${
                  STORE[questionNumber].answers[3]
                }" name="answer" required>
                <span>${STORE[questionNumber].answers[3]}</span>
            </label>
            <label class="answerOption">
                <input type="radio" value=${
                  STORE[questionNumber].answers[4]
                }" name="answer" required>
                <span>${STORE[questionNumber].answers[4]}</span>
            </label>
            <button type="submit" class="submitButton">Submit</button>
            </fieldset>
        </form>
        </div>`;
}

//render the questions to dom when pressing ready!

function startQuiz() {
  $("#btn-ready").on("click", function(event) {
   $(".quizBody").html(generateQuestion());
  });
}

function createQuiz() {
  startQuiz();
}

//users feedback. select answer

function handleSubmit(){
    $(".question-answer-form").on("submit", function (event) {
      event.preventDefault();
      let selected = $('input:checked');
      let answer = selected.val();
      let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    console.log('you pressed submit')
  });
}


//change question number

function changeQuestionNumber() {
  if (questionNumber < myRandomNumbers.length) {
    questionNumber++;
  }
  $(".questionNumber").text(random100());
}

$(createQuiz);
