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

function preventNotSelected(array) {
	if ([...array].filter((item) => item.checked).length === 0) {
		alert('한 개 이상의 옵션을 선택하세요');
		return;
	}
}

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
	quest.style.display = 'none';
	loading.style.display = 'block';
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
const answerName = ['random', 'country', 'ingre', 'cook', 'spicy', 'temp'];
let answerNameOrder = 0;

function answerSet() {
	if (answerNameOrder === 6) {
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
let next_parameter = [];
let check_data = {
	countryFood: food,
	country: [],
	ingredient: [],
	cooking: [],
	spicy: [],
	temp: [],
};

nextButton.addEventListener('click', () => {
	btn_parameter();
	filter(next_parameter[0]);
	// console.log(check_data);
	// console.log(food);
});

function btn_parameter() {
	btn_count++;
	if (btn_count === 1) {
		next_parameter.splice('0', 0, 'country', 'countryFood');
		console.log(next_parameter);
	}
	if (btn_count === 2) {
		next_parameter.splice(0, 2);
		next_parameter.splice('0', 0, 'ingre', 'country');
		console.log(next_parameter);
	}
	if (btn_count === 3) {
		next_parameter.splice(0, 2);
		next_parameter.splice('0', 0, 'cook', 'ingre');
		console.log(next_parameter);
	}
	if (btn_count === 4) {
		next_parameter.splice(0, 2);
		next_parameter.splice('0', 0, 'spicy', 'cook');
		console.log(next_parameter);
	}
	if (btn_count === 5) {
		next_parameter.splice(0, 2);
		next_parameter.splice('0', 0, 'temp', 'spicy');
		console.log(next_parameter);
	}
}
//input에 체크하기 전에 먼저 filter함수가 도는 것 같음...😭
async function filter(value) {
	//value값과 동일한 name을 가진 input요소를 가져와 배열로 반환한다.
	let check_element = document.getElementsByName(value);
	for (let i = 0; i < check_element.length; i++) {
		if (check_element[i].checked) {
			console.log(check_element[i]);
			// food.filter((item) => item.check_element[i].value);
			console.log(food);
		}
	}
	return food;

	// //배열을 순회하면서 체크된 input가 있다면
	// for (let i = 0; i < check_element.length; i++) {
	// 	if (check_element[i].checked) {
	// 		for (let j = 0; j < check_data[check].length; j++) {
	// 			if (check_element[i].value === check_data[check][j][value]) {
	// 				check_data[value].push(check_data[check][j]);
	// 				console.log(check_data[value]);
	// 			}
	// 		}
	// 	}
	// }
}
