const quizData=[
{
    question: "how many data types in Python ?",
    a:'18',
    b:'28',
    c:'33',
    d:'5',
    correct:'d'
}
,{
    question: "what is most used programming language in 2021?",
    a:'java',
    b:'python',
    c:'c',
    d:'Ruby',
    correct:'a'

},
{
    question:'1. Who developed Python Programming Language?',
    a: 'Wick van Rossum',
    b: 'Rasmus Lerdorf',
    c:'Guido van Rossum',
    d:'Niene Stom',

    correct:'c'

},
{
    question:' Which type of Programming does Python support?',
    a:' object-oriented programming',
    b :'structured programming',
    c :'functional programming',
    d :'all of the mentioned',
    correct:'d'
},
{
    question:'Is Python case sensitive when dealing with identifiers ?',
    a:'no ',
    b:'yes',
    c:'machine dependent',
    d:'none of the mention',
    correct:'a'
},{


question: 'Which of the following is the correct extension of the Python file?',
a:'.python',
b:'.pl',
c:'.p',
d:'.py',

correct:'d'

}

];
const quiz= document.getElementById("quiz");
const answersEls= document.querySelectorAll(".answer");
const questionE1=document.getElementById("question");

const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz=0;
let score=0;


loadQuiz();
function loadQuiz(){
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText=currentQuizData.question;
    

    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
    
}

function getSelected()
{
    let answer=undefined;
    answersEls.forEach((answerE1)=>{
        if(answerE1.checked){
            answer= answerE1.id ;
        }
       
    });
    return answer;
}
function deselectAnswer(){
    answersEls.forEach((answerEl)=>{
        answerEl.checked=false;
    });
}

submitBtn.addEventListener("click",() => {
    // check to see the answer
    const answer =getSelected();

    if(answer){
        if(answer=== quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;

     if(currentQuiz<quizData.length){
         loadQuiz();
     }else {
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>

        <button onclick="location.reload()">Reload</button>
        `
    }

    }

    
})