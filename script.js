let questionNumber = 85;
let score = 0;
//generate question html
function generateQuestion() {
    {    
        console.log('generating query')
 return `<div class="question-${questionNumber}">
            <h2>${STORE[questionNumber].question}</h2>
        <form>
            <fieldset>
            <label class="answerOption">
                <input type="radio" value=${STORE[questionNumber].answers[0]}" name="answer" required>
                <span>${STORE[questionNumber].answers[0]}</span>
            </label>
            <label class="answerOption">
                <input type="radio" value=${STORE[questionNumber].answers[1]}" name="answer" required>
                <span>${STORE[questionNumber].answers[1]}</span>
            </label>
            <label class="answerOption">
                <input type="radio" value=${STORE[questionNumber].answers[2]}" name="answer" required>
                <span>${STORE[questionNumber].answers[2]}</span>
            </label>
            <label class="answerOption">
                <input type="radio" value=${STORE[questionNumber].answers[3]}" name="answer" required>
                <span>${STORE[questionNumber].answers[3]}</span>
            </label>
            <label class="answerOption">
                <input type="radio" value=${STORE[questionNumber].answers[4]}" name="answer" required>
                <span>${STORE[questionNumber].answers[4]}</span>
            </label>
            <button type="submit" class="submitButton">Submit</button>
            </fieldset>
        </form>
        </div>`
    }
} 




function startQuiz() {
    $('#btn-ready').on('click',  function (event) {
        $('.quizBody').html(generateQuestion());

    });
}

// function createQuiz() {
//     startQuiz();
// }


// $(function(){
//       $('#btn-ready').on('click', function (event) {
//           $('.quizBody').html(generateQuestion());

//       });
// })

$(startQuiz);