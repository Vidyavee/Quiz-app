document.addEventListener("DOMContentLoaded", function() {
const questions = [
    {
        question: "What does ROI stand for in business?",
        answers: [
            { text: "a) Return on Investment", correct: true },
            { text: "b) Revenue Over Income", correct: false },
            { text: "c) Relative Output Increase", correct: false},
            { text: "d) Resource Optimization Index", correct: false},
        ]
    },
    {
        question: "What is the term used to describe the process of converting raw materials into finished goods? ",
        answers: [
            { text: "a) Marketing", correct: false},
            { text: "b) Production", correct: true},
            { text: "c) Distribution", correct: false},
            { text: "d) Procurement", correct: false},
        ]
    },
    {
        question: "What does the acronym 'CEO' stand for?" ,
        answers: [
            { text: "a) Chief Executive Officer", correct: true},
            { text: "b) Chief Economics Officer ", correct: false},
            { text: "c) Chief Efficiency Officer ", correct: false},
            { text: "d) Chief Evaluation Officer", correct: false},
       ]
    },
    {
        question: "What financial statement provides a snapshot of a company's financial position at a specific point in time? ",
        answers: [
            { text: "a) Income statement", correct: false},
            { text: "b) Cash flow statement", correct: false},
            { text: "c) Balance sheet", correct: true},
            { text: "d) Statement of retained earnings", correct: false},
        ]
    },
    {
        question: "What type of business structure is owned and operated by a single individual?",
        answers: [
            { text: "a) Corporation ", correct: false},
            { text: "b) Partnership ", correct: false},
            { text: "c) Limited Liability Company (LLC)", correct: false},
            { text: "d) Sole proprietorship", correct: true},
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerbuttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetstate() {
    nextButton.style.display= "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true" ;
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetstate();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
});