const quizDB =[
    {
        question:"Q1: Which of the following is not JavaScript Data Types?",
        a:"Undefined",
        b:"Number",
        c:"Boolean",
        d:"Float",
        ans:"ans4"
    },
    {
        question:"Q2: Which company developed JavaScript?",
        a:"Netscape",
        b:"Bell Labs",
        c:"Sun Microsystems",
        d:"IBM",
        ans:"ans1"
    },
    {
        question:"Q3: Inside which HTML element do we put the JavaScript?",
        a:"Between script tag",
        b:"Between head tag",
        c:"Between meta tag",
        d:"Between style tag",
        ans:"ans1"
    },
    {
        question:"Q4: What is the original name of JavaScript?",
        a:"LiveScript",
        b:"EScript",
        c:"Mocha",
        d:"JavaScript",
        ans:"ans3"
    },
   
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer')
const showScore = document.querySelector('#showScore')
let questionCount =0;
let score = 0;

const loadQuestion =()=>{
   // console.log(quizDB[0])
   const questionList = quizDB[questionCount]
   question.innerText = questionList.question;
   option1.innerHTML=questionList.a;
   option2.innerHTML=questionList.b;
   option3.innerHTML=questionList.c;
   option4.innerHTML=questionList.d;
}

loadQuestion()

const getCheckAnswer=()=>{
    let answer;
    answers.forEach((currAnsEle)=>{
      if(currAnsEle.checked){
           answer= currAnsEle.id
      }
     
    })
    return answer
}

const deselectAll=()=>{
    answers.forEach((currAnsEle)=>{
         currAnsEle.checked=false;
    })
}
submit.addEventListener('click', ()=>{
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer)
    if(checkAnswer===quizDB[questionCount].ans){
        score++;
    }
    questionCount++;
    deselectAll()

    if(questionCount<quizDB.length){
        loadQuestion()
    }else{
        showScore.innerHTML= `
        <h3>You Scored: ${score}/${quizDB.length}</h3>
        <h3>Correct options are: 4, 1, 1, 3<h3>
        <button class="btn" onClick="location.reload()"> Play Again</button>
        `
    }

    showScore.classList.remove('scoreArea')
})