/*질문을 바꾸는 함수*/

const questionList = [
	'당신의 직급은  무엇입니까?',
	'랜덤추천 vs 맞춤추천 중 어떤 추천을 원하세요?',
	'오늘은 어느 나라 음식이 끌리시나요?',
	'어떤 식재료가 좋을까요?',
	'어떤 요리 방법이 좋으세요?',
	'당신은 맵찔이 맵고수?',
	'따뜻한 음식 ? 차가운 음식?',
];

const answerList = [
	// 1.position
	['신입', '대리', '과장', '부장', '대표'],
	// 2.recommendation
	['랜덤추천', '맞춤추천'],
	// 3.country
	['한식', '양식', '중식', '일식', '기타'],
	// 4. ingre
	['쌀', '밀가루', '육류', '해산물', '채소'],
	//5. cook
	['튀김', '구이', '찜', '볶음', '기타'],
	//6. spicy
	['매움', '안매움'],
	//7. temp
	['따뜻함', '차가움'],
];

const questField = document.querySelector('#quest');

const questionField = document.querySelector('.questions');
const question = document.querySelector('.question__container');
const answer = document.querySelector('.answers__list');
const nextButton = document.querySelector('.answer__button');

const result = document.querySelector('#result');

const inputAll = document.querySelectorAll('input');

let questionNum = 0;
let answerNum = 0;

nextButton.addEventListener('click', () => {
	nextQuestion();
});

function closeStart() {
	startPage.style.display = 'none';
}

function startQuestion() {
	question.innerHTML = '';
	questionSet();
	answerSet();
}

function nextQuestion() {
	question.innerHTML = '';
	answer.innerHTML = '';
	if (questionNum < questionList.length) {
		questionSet();
		answerSet();
	} else {
		endQuestion();
	}
}

function endQuestion() {
	questionField.style.display = 'none';
	result.style.display = 'block';
}

function questionSet() {
	const item = document.createElement('div');
	item.setAttribute('class', 'newQuestion');
	const newQuestion = questionList[questionNum].toString();
	questionNum++;
	item.innerHTML = newQuestion;
	question.appendChild(item);
	console.log(questionNum);
}

//input : checkbox 태그로 수정해야함
function answerSet() {
	const getAnswerList = answerList[answerNum];
	const newAnswer = getAnswerList.map((item, index) => {
		const input = document.createElement('input');
		input.setAttribute('type', 'checkbox');
		input.setAttribute('id', `answer${index}`);
		input.setAttribute('name', 'answer');
		// input.innerHTML= item;
		const answerOption = document.createElement('label');
		answerOption.setAttribute('for', `answer${index}`);
		answerOption.innerHTML = item;
		answer.appendChild(input);
		answer.appendChild(answerOption);
	});
	answerNum++;
	return newAnswer;
}
