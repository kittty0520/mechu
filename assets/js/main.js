import { getData } from './getData.js';
import { questionList, answerList } from './question.js';

const story = document.querySelector('#story');

const storyBtn = document.querySelector('.cartoon__button');
const firstStory = document.querySelector('.cartoon-first');
const secondStory = document.querySelector('.cartoon-second');
const finalStory = document.querySelector('.cartoon-final');
const storyList = [firstStory, secondStory, finalStory];

const start = document.querySelector('#start');
const startQuestion = document.querySelector('.start__question');
const startAnswers = document.querySelector('.start__answers');
const selectedPosition = document.querySelector('.start__selectedPosition');
const startButton = document.querySelector('.start__button');

const quest = document.querySelector('#quest');
const questionField = document.querySelector('.questions');
const question = document.querySelector('.question__container');
const answer = document.querySelector('.answers__list');
const nextButton = document.querySelector('.answer__button');

const loading = document.querySelector('#loading');

const result = document.querySelector('#result');

let STORY_ORDER = 0;
let QUESTION_NUM = 0;
let ANSWER_NUM = 0;

//선택한 값 저장하는 배열
let getValue = [];

// 스토리
storyBtn.addEventListener('click', nextStory);

function nextStory() {
	if (STORY_ORDER === 2) {
		storyList[0].style.display = 'block';
		storyList[2].style.display = 'none';
		story.style.display = 'none';
		// quest.style.display = 'block';
		STORY_ORDER = 0;
		start.style.display = 'block';
	}
	storyList[STORY_ORDER].style.display = 'none';
	storyList[STORY_ORDER + 1].style.display = 'block';
	STORY_ORDER++;
	return STORY_ORDER;
}

//시작
startButton.addEventListener('click', selectPosition);

function selectPosition() {
	if (startAnswers.style.display === 'none') {
		startAnswers.style.display = 'block';
		start.style.display = 'none';
		quest.style.display = 'block';
		nextQuestion();
		return;
	}

	const positionList = document.getElementsByName('position_chk');

	preventNotSelected(positionList);

	startAnswers.style.display = 'none';

	[...positionList].map((position) => {
		if (position.checked) {
			startQuestion.textContent = `${position.labels[0].innerHTML}님! 오늘 점심 추천해 드릴게요`;
			const positionImg = document.createElement('img');
			positionImg.setAttribute('class', 'start__selected__img');
			positionImg.setAttribute('src', `assets/img/${position.id}.png`);
			positionImg.setAttribute('alt', position.value);
			selectedPosition.appendChild(positionImg);
		} else {
			return position;
		}
	});
}

//아무 것도 선택하지 않았을 때 alert가 뜨도록 함
function preventNotSelected(array) {
	if ([...array].filter((item) => item.checked).length === 0) {
		alert('한 개 이상의 옵션을 선택하세요');
		return;
	}
}

//다음 질문이 뜨도록 함 만약 질문리스트가 끝나면 endquestion()가 실행되도록 함
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
	quest.style.display = 'none';
	loading.style.display = 'block';
	QUESTION_NUM = 0;
	filterFood(getValue);
	//여기에 getValue 배열을 기반으로 food배열을 필터하고 이미지까지 띄우는 함수를 넣기
	setTimeout(() => {
		loading.style.display = 'none';
		result.style.display = 'block';
	}, 5000);
}

function questionSet() {
	const item = document.createElement('div');
	item.setAttribute('class', 'newQuestion');
	const newQuestion = questionList[QUESTION_NUM].toString();
	QUESTION_NUM++;
	item.innerHTML = newQuestion;
	question.appendChild(item);
	// console.log(QUESTION_NUM);
}
const answerName = ['country', 'ingre', 'cook', 'spicy', 'temp'];
let answerNameOrder = 0;

function answerSet() {
	if (answerNameOrder === 5) {
		answerName = 0;
	}
	const { answers, multiSeleted } = answerList[ANSWER_NUM];
	const newAnswer = answers.map((item, index) => {
		const input = document.createElement('input');
		if (multiSeleted === false) {
			input.setAttribute('type', 'radio');
		} else {
			input.setAttribute('type', 'checkbox');
		}
		input.setAttribute('id', `answer${index}`);
		input.setAttribute('value', item);
		input.setAttribute('name', answerName[answerNameOrder]);
		const answerOption = document.createElement('label');
		answerOption.setAttribute('for', `answer${index}`);
		answerOption.innerHTML = item;
		answer.appendChild(input);
		answer.appendChild(answerOption);
	});
	answerNameOrder++;
	ANSWER_NUM++;
	return newAnswer;
}

//데이터 불러오기 -비동기 함수(프로미스 객체)
//수정하기 - foodData에 getData 프로미스 결과값을 바로 배열에 집어넣는 방법은???
const food = [];
const foodData = getData();
foodData.then((res) => {
	res.map(async (item) => await food.push(item));
});

// 필터함수
let btn_count = 0;
let next_parameter = '';
let check_data = {
	countryFood: food,
	country: [],
	ingredient: [],
	cooking: [],
	spicy: [],
	temp: [],
};

//다음 버튼을 누르면 질문함수가 실행되도록 함
nextButton.addEventListener('click', () => {
	btn_parameter();
	// console.log(filterFood(next_parameter));
	selectedValue(next_parameter);
	nextQuestion();
	// console.log(check_data);
	// console.log(food);
});

function selectedValue(inputName) {
	let check_element = document.getElementsByName(inputName);
	for (let i = 0; i < check_element.length; i++) {
		if (check_element[i].checked) {
			const checkValue = check_element[i].value;
			getValue.push(checkValue);
		} else {
			console.log('not checked!');
		}
	}
	console.log(getValue);
}

//
function btn_parameter() {
	next_parameter = answerName[btn_count];
	btn_count++;
	if (btn_count === 5) {
		btn_count = 0;
	}
	console.log(next_parameter);
}

//필터할 값을 하나의 배열 안에 담고 한 번에 함수돌려서 결과값을 얻어내는 함수를 만들어내자!
async function filterFood(array) {
	for (let i = 0; i < check_element.length; i++) {
		const result = await food.filter(
			(item) => Object.values(item)[i] !== array[i]
		);
		return result;
	}
}
