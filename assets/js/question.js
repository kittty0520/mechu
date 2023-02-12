/*질문 배열*/

export const questionList = [
	'당신의 직급은  무엇입니까?',
	'랜덤추천 vs 맞춤추천 중 어떤 추천을 원하세요?',
	'오늘은 어느 나라 음식이 끌리시나요?',
	'어떤 식재료가 좋을까요?',
	'어떤 요리 방법이 좋으세요?',
	'당신은 맵찔이 맵고수?',
	'따뜻한 음식 ? 차가운 음식?',
];

export const answerList = [
	// 1.position
	{ answers: ['신입', '대리', '과장', '부장', '대표'], multiSeleted: false },
	// 2.recommendation
	{ answers: ['랜덤추천', '맞춤추천'], multiSeleted: false },
	// 3.country
	{ answers: ['한식', '양식', '중식', '일식', '기타'], multiSeleted: true },
	// 4. ingre
	{ answers: ['쌀', '밀가루', '육류', '해산물', '채소'], multiSeleted: true },
	//5. cook
	{ answers: ['튀김', '구이', '찜', '볶음', '기타'], multiSeleted: true },
	//6. spicy
	{ answers: ['매움', '안매움'], multiSeleted: false },
	//7. temp
	{ answers: ['따뜻함', '차가움'], multiSeleted: false },
];
