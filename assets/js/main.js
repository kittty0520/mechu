import getData from './getData.js';
import { questionList, answerList } from './question.js';

const story = document.querySelector('#story');

const storyBtn = document.querySelector('.cartoon__button');
const firstStory = document.querySelector('.cartoon-first');
const secondStory = document.querySelector('.cartoon-second');
const thirdStory = document.querySelector('.cartoon-third');
const finalStory = document.querySelector('.cartoon-final');
const storyList = [firstStory, secondStory, thirdStory, finalStory];

const start = document.querySelector('#start');
const startQuestion = document.querySelector('.start__question');
const startAnswers = document.querySelector('.start__answers');
const selectedPosition = document.querySelector('.start__selectedPosition');
const startButton = document.querySelector('.start__button');

const quest = document.querySelector('#quest');
const questionField = document.querySelector('.questions');
const question = document.querySelector('.question__container');

const sequenceNumber = document.querySelector('.sequence__counter__number');
const sequenceBar = document.querySelector('.sequence__bar');
const sequenceSubBar = document.querySelector('.sequence__subBar');
const answer = document.querySelector('.answers__list');
const nextButton = document.querySelector('.answer__button');

const loading = document.querySelector('#loading');

const result = document.querySelector('#result');

let STORY_ORDER = 0;
let QUESTION_NUM = 0;
let ANSWER_NUM = 0;
//데이터 불러오기 -비동기 함수(프로미스 객체 반환)
const foodData = getData();

//선택한 값 저장하는 배열
let getValue = [];

// '다음으로'버튼을 누를때 수집할 input의 Name을 수집하기 위한 count
let btn_count = 0;

// input의 Name
let inputName = '';

// 스토리
storyBtn.addEventListener('click', nextStory);

function nextStory() {
	if (STORY_ORDER === 3) {
		closeAndOpen(storyList[0], storyList[3]);
		closeAndOpen(story, start);
		STORY_ORDER = 0;
	}
	closeAndOpen(storyList[STORY_ORDER], storyList[STORY_ORDER + 1]);
	STORY_ORDER++;
	return STORY_ORDER;
}

//시작버튼을 클릭할 때 이벤트
startButton.addEventListener('click', () => {
	const positionList = document.getElementsByName('position_chk');
	//아무 것도 선택하지 않았을 때 alert가 뜨고 다음 질문이 뜨지 않도록 함
	if ([...positionList].filter((item) => item.checked).length === 0) {
		alert('한 개 이상의 옵션을 선택하세요');
		return;
	}
	selectPosition(positionList);
});

function selectPosition(positionList) {
	if (startAnswers.style.display === 'none') {
		startAnswers.style.display = 'block';
		closeAndOpen(start, quest);
		nextQuestion();
		return;
	}

	startAnswers.style.display = 'none';

	[...positionList].map((position) => {
		if (position.checked) {
			startQuestion.textContent = `${position.labels[0].innerHTML}님! 오늘 점심 추천해 드릴게요`;
			const positionImg = document.createElement('img');
			positionImg.setAttribute('class', 'start__selected__img');
			positionImg.setAttribute('src', `assets/img/${position.id}.png`);
			positionImg.setAttribute('alt', position.value);
			selectedPosition.appendChild(positionImg);
			//localstorage에 position.value값을 가진 position객체를 set
			localStorage.setItem('position', position.id);
		} else {
			return position;
		}
	});
}
//다음 버튼을 누르면 내부 함수가 실행되도록 함
nextButton.addEventListener('click', () => {
	getInputName();
	const answerArray = document.getElementsByName(inputName);

	//아무 것도 선택하지 않았을 때 alert가 뜨도록 함
	if ([...answerArray].filter((item) => item.checked).length === 0) {
		alert('한 개 이상의 옵션을 선택하세요');
		btn_count--;
		return;
	}
	selectedValue(inputName);

	nextQuestion();
	//getValue 배열을 기반으로 food배열을 필터하고 이미지까지 띄우는 함수를 넣기
	if (ANSWER_NUM === 5) {
		foodData
			.then((res) => filterArray(res, getValue))
			.then((data) => displayResultFood(data));
	}
});

// 모든 질문이 끝나면 로딩창을 3초동안만 보여주다가 결과창을 띄움.
function endQuestion() {
	closeAndOpen(quest, loading);
	QUESTION_NUM = 0;

	setTimeout(() => {
		closeAndOpen(loading, result);
	}, 3000);
}

// 순서에 맞는 질문을 띄움
function questionSet() {
	const item = document.createElement('div');
	item.setAttribute('class', 'newQuestion');
	const newQuestion = questionList[QUESTION_NUM].toString();
	QUESTION_NUM++;
	item.innerHTML = newQuestion;
	question.appendChild(item);
}

const answerName = ['country', 'ingre', 'cook', 'spicy', 'temp'];

// 질문과 매칭되는 선택지를 띄움
function answerSet() {
	if (ANSWER_NUM === 5) {
		ANSWER_NUM = 0;
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
		input.setAttribute('name', answerName[ANSWER_NUM]);
		const answerOption = document.createElement('label');
		answerOption.setAttribute('for', `answer${index}`);
		answerOption.innerHTML = item;
		answer.appendChild(input);
		answer.appendChild(answerOption);
	});
	ANSWER_NUM++;
	return newAnswer;
}

//다음 질문이 뜨도록 함 만약 질문리스트가 끝나면 endquestion()가 실행되도록 함
function nextQuestion() {
	question.innerHTML = '';
	answer.innerHTML = '';
	if (QUESTION_NUM < questionList.length) {
		questionSet();
		answerSet();
		sequenceSet();
	} else {
		endQuestion();
	}
}

//질문 순서를 나타내고 순서에 따른 캐릭터의 위치를 바꾸는 함수
function sequenceSet() {
	if (ANSWER_NUM === 1) {
		const position = localStorage.getItem('position');
		console.log(position);
		const positionImg = document.createElement('img');
		positionImg.setAttribute('class', 'sequence__bar__img');
		positionImg.setAttribute('src', `assets/img/${position}.png`);
		positionImg.setAttribute('alt', position);
		sequenceBar.appendChild(positionImg);
	}
	const sequenceImage = document.querySelector('.sequence__bar__img');

	sequenceNumber.innerHTML = ANSWER_NUM;
	sequenceImage.style.left = `${40 * ANSWER_NUM - 12}px`;
	sequenceSubBar.style.width = `${40 * ANSWER_NUM}px`;
}

//section을 닫고 여는 함수
function closeAndOpen(close, open) {
	close.style.display = 'none';
	open.style.display = 'block';
}

//클릭된 버튼의 value값을 getValue배열에 배열(다중선택이기 때문)로 넣음
function selectedValue(inputName) {
	let check_element = document.getElementsByName(inputName);
	let selection = [];
	for (let i = 0; i < check_element.length; i++) {
		if (check_element[i].checked) {
			const checkValue = check_element[i].value;
			selection.push(checkValue);
		} else {
			// console.log('not checked!');
		}
	}
	getValue.push(selection);
	console.log(getValue);
}

// 각 질문마다 count하여 수집할 input의 Name을 바꿈.
function getInputName() {
	inputName = answerName[btn_count];
	btn_count++;
	if (btn_count === 5) {
		btn_count = 0;
	}
	console.log(inputName);
}

//*******************필터영역************************

//필터할 값을 하나의 배열 안에 담고 한 번에 함수돌려서 결과값을 얻어내는 함수를 만들어내자!

// const answerName = ['country', 'ingre', 'cook', 'spicy', 'temp'];

function filterArray(foodArr, valueArr) {
	let result = foodArr;
	for (let i = 0; i < valueArr.length; i++) {
		let valueName = answerName[i];
		let selectArr = valueArr[i];
		let getResult = categorize(valueName, result, selectArr);
		result = getResult;
		console.log(valueName, selectArr);
		console.log(result);
	}
	return result;
}

//country: "한식"
function singleProperty(valueName, arr, selectArr) {
	const result = [];
	for (let i = 0; i < selectArr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (selectArr[i] == arr[j][valueName]) {
				result.push(arr[j]);
				// console.log(arr[j][valueName]);
			}
		}
	}
	return result;
}

//ingre:["쌀","육류","채소"]
function multiProperty(valueName, arr, selectArr) {
	let result = [];
	result = selectArr
		.map((selection) =>
			arr.filter((item) => item[valueName].includes(selection))
		)
		.flat();
	return result;
}

//각 질문마다 필터링 하는 방법을 나눔
function categorize(valueName, arr, select) {
	switch (valueName) {
		case 'country':
		case 'spicy':
		case 'temp':
			return singleProperty(valueName, arr, select);
			break;
		case 'ingre':
		case 'cook':
			return multiProperty(valueName, arr, select);
			break;
		default:
			return arr;
	}
}

//***********랜덤으로 음식결과 보여주기**********

//"src": "ko_02"
function displayResultFood(resultArr) {
	let randomIndex = Math.floor(Math.random() * resultArr.length);
	let resultFood = resultArr[randomIndex];
	document.getElementById('country_food').innerHTML =
		`<p>${resultFood.name}</p>` +
		`<img src="assets/img/food_img/${resultFood.src}.png" alt="음식이미지">`;
}
