import { getData } from './getData.js';
import { questionList, answerList } from './question.js';

const story = document.querySelector('#story');

const storyBtn = document.querySelector('.cartoon__button');
const firstStory = document.querySelector('.cartoon-first');
const secondStory = document.querySelector('.cartoon-second');
const finalStory = document.querySelector('.cartoon-final');
const storyList = [firstStory, secondStory, finalStory];

const quest = document.querySelector('#quest');
const questionField = document.querySelector('.questions');
const question = document.querySelector('.question__container');
const answer = document.querySelector('.answers__list');
const nextButton = document.querySelector('.answer__button');

const result = document.querySelector('#result');

const inputAll = document.querySelectorAll('input');

let STORY_ORDER = 0;
let QUESTION_NUM = 0;
let ANSWER_NUM = 0;

//데이터 불러오기 -비동기 함수(프로미스 객체)
const foodData = getData();
console.log(foodData);

// 스토리
storyBtn.addEventListener('click', nextStory);

function nextStory() {
	if (STORY_ORDER === 2) {
		storyList[0].style.display = 'block';
		storyList[2].style.display = 'none';
		story.style.display = 'none';
		quest.style.display = 'block';
		STORY_ORDER = 0;
		nextQuestion();
	}
	storyList[STORY_ORDER].style.display = 'none';
	storyList[STORY_ORDER + 1].style.display = 'block';
	STORY_ORDER++;
	return STORY_ORDER;
}

//시작

//질문
nextButton.addEventListener('click', () => {
	nextQuestion();
});

function nextQuestion() {
	question.innerHTML = '';
	answer.innerHTML = '';
	if (QUESTION_NUM < questionList.length) {
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
	const newQuestion = questionList[QUESTION_NUM].toString();
	QUESTION_NUM++;
	item.innerHTML = newQuestion;
	question.appendChild(item);
	console.log(QUESTION_NUM);
}

function answerSet() {
	const { answers, multiSeleted } = answerList[ANSWER_NUM];
	const newAnswer = answers.map((item, index) => {
		const input = document.createElement('input');
		if (multiSeleted === false) {
			input.setAttribute('type', 'radio');
		} else {
			input.setAttribute('type', 'checkbox');
		}
		input.setAttribute('id', `answer${index}`);
		input.setAttribute('name', 'answer');
		// input.innerHTML= item;
		const answerOption = document.createElement('label');
		answerOption.setAttribute('for', `answer${index}`);
		answerOption.innerHTML = item;
		answer.appendChild(input);
		answer.appendChild(answerOption);
	});
	ANSWER_NUM++;
	return newAnswer;
}
