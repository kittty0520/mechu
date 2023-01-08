/*질문을 바꾸는 함수*/

const questionList = [
    '당신의 직급은  무엇입니까?',
    '오늘의 점심은 어느 나라 음식을 드시겠습니까?',
    '어떤 식재료를 넣을까요?',
]

const  answerList = [
    // 1 
    ['신입','대리','과장','부장','대표'],
    // 2
    ['한식','양식','중식','일식','기타'],
    // 3
    ['쌀','밀가루','육류','해산물','채소'],
]

const startBtn = document.querySelector('.start__button');
const startTitle = document.querySelector('.start__title');
const startPage = document.querySelector('.start');

const questionField = document.querySelector('.questions');
const question = document.querySelector('.question__container'); 
const answer = document.querySelector('.answers__list');
const nextButton = document.querySelector('.answer__button');

const inputAll = document.querySelectorAll('input');

let questionNum = 0;
let answerNum=0;


startBtn.addEventListener('click',()=>{
    closeStart();
    questionField.style.display='block';
    startQuestion();
});

nextButton.addEventListener('click',()=>{
    nextQuestion();
});

function closeStart(){
    startPage.style.display='none';
}

function startQuestion(){
    question.innerHTML='';
    questionSet();
    answerSet();
}

function nextQuestion(){
    question.innerHTML='';
    answer.innerHTML='';
    if(questionNum < questionList.length){
        questionSet();
        answerSet();
    } else {
        endQuestion();
    }
}

function endQuestion(){
    alert('질문 끝! 결과를 보여주세요');
    questionField.style.display='none';
}

function questionSet(){
    const item = document.createElement("div");
    item.setAttribute('class', 'newQuestion');
    const newQuestion = questionList[questionNum].toString();
    questionNum++;
    item.innerHTML= newQuestion;
    question.appendChild(item);
    console.log(questionNum);
}

//input : checkbox 태그로 수정해야함
function answerSet(){
    const getAnswerList = answerList[answerNum];
    const newAnswer = getAnswerList.map((item,index)=>{
        const input = document.createElement("input");
        input.setAttribute("type","checkbox");
        input.setAttribute("id",`answer${index}`);
        input.setAttribute("name",'answer');
        // input.innerHTML= item;
        const answerOption = document.createElement("label");
        answerOption.setAttribute('for',`answer${index}`);
        answerOption.innerHTML = item;
        answer.appendChild(input);
        answer.appendChild(answerOption);
    });
    answerNum++;
    return newAnswer;
}


console.log(inputAll);


