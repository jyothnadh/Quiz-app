const questions = [
    {
        questions: "which is largest animal in the world",
        answers: [
            { text:"Shark" , correct:false},
            { text:"blue whale" , correct:true},
            { text:"elephant" , correct:false},
            { text:"Lion" , correct:false},
        ]
    },
    {
        questions: "Which of the following aspects of our product/service did you find most impressive?",
        answers: [
            { text:"Speed and Efficiency" , correct:false},
            { text:"User-Friendly Interface" , correct:false},
            { text:"Quality and Reliability" , correct:false},
            { text:" Pricing and Value for Money." , correct:true},
        ]
    },
    {
        questions: "Which is the smallest continent in the world ?",
        answers: [
            { text:"Shasiaark" , correct:false},
            { text:" australia" , correct:true},
            { text:"arctic" , correct:false},
            { text:"africa" , correct:false},
        ]
    },
    {
        questions: "which is largest animal in the world",
        answers: [
            { text:"Shark" , correct:false},
            { text:"blue whale" , correct:true},
            { text:"elephant" , correct:false},
            { text:"Lion" , correct:false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttoms");
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
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let question = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.answerButton.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = ansq.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.childern).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disbled = true;
    })
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML= `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="play again";
    nextButton,style.display= "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();