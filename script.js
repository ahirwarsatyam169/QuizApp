const quizData = [
    {
        question : "What is the Capital of Australia?",
        options : ["Canberra", "Sydney", "Derby", "Queensland"],
        correct : 0,
    },
    {
        question : "What is the Capital of USA?",
        options : ["Texas", "Washington D.C", "Nevada", "Arizona"],
        correct : 1,
    },
    {
        question : "What is the Capital of Africa?",
        options : ["Congo", "Algeria", "Nigeria", "South Africa"],
        correct : 0,
    },
    {
        question : "What is the Capital of India?",
        options : ["Mumbai", "Calcutta", "Madhya Pradesh", "Delhi"],
        correct : 3,
    },


];

let currentQuestion = 0;
let score = 0;
//DOM object selection
const questionEl = document.querySelector(".question h2");
const AnswerBtnContainer = document.querySelector(".answers"); 
const nxtBtn = document.querySelector(".next button");
const ansbtn = document.querySelector(".answers button")
//load one question
function loadQuestion(){
    const q = quizData[currentQuestion]; 
    questionEl.textContent = q.question;   
    
    //clear old options
    AnswerBtnContainer.innerHTML = "";
    
    //create button for choices
    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => handleAnswer(index);
        AnswerBtnContainer.appendChild(btn);
        
    });
}

//Handle Answer Click
function handleAnswer(selectedIndex){
    const q = quizData[currentQuestion];
    if (selectedIndex === q.correct){
        score++;
    }
    
    //disable all buttons so user can't click again
    Array.from(AnswerBtnContainer.children).forEach(btn =>{
        btn.disabled = true;
    });
};

//handle next button
nxtBtn.onclick = () =>{
    currentQuestion++;
    if(currentQuestion < quizData.length){
        loadQuestion();
    }
    else{
        showResult();
    }
};

//final result
function showResult(){
    //clear quiz ui and replace with result
    document.querySelector(".container").innerHTML = `
    <h2>You scored ${score} out of ${quizData.length}</h2>`;
}

//start first question
loadQuestion();
