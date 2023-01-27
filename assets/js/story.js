const story = document.querySelector('#story');

const storyBtn = document.querySelector('.cartoon__button');
const firstStory = document.querySelector('.cartoon-first');
const secondStory = document.querySelector('.cartoon-second');
const finalStory = document.querySelector('.cartoon-final');

const quest = document.querySelector('#quest');
let order = 0;
const storyList = [firstStory, secondStory, finalStory];

storyBtn.addEventListener('click', () => {
	if (order === 2) {
		storyList[0].style.display = 'block';
		storyList[2].style.display = 'none';
		story.style.display = 'none';
		quest.style.display = 'block';
	}
	storyList[order].style.display = 'none';
	storyList[order + 1].style.display = 'block';
	console.log(order);
	order++;
	return order;
});
