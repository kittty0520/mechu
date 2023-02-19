let foodtype = [
	{ contry: 'ko', name: '비빔밥', image: './assets/img/food_img/ko/ko_01.png' },
	{
		contry: 'ko',
		name: '김치찌개',
		image: './assets/img/food_img/ko/ko_02.png',
	},
	{ contry: 'jp', name: '초밥', image: './assets/img/food_img/jp/jp_01.png' },
	{ contry: 'jp', name: '텐동', image: './assets/img/food_img/jp/jp_02.png' },
	{
		contry: 'ws',
		name: '수제햄버거',
		image: './assets/img/food_img/ws/ws_01.png',
	},
	{
		contry: 'ws',
		name: '스테이크',
		image: './assets/img/food_img/ws/ws_02.png',
	},
	{
		contry: 'ch',
		name: '마파두부',
		image: './assets/img/food_img/ch/ch_01.png',
	},
	{ contry: 'ch', name: '탕수육', image: './assets/img/food_img/ch/ch_02.png' },
	{
		contry: 'etc',
		name: '팟타이',
		image: './assets/img/food_img/etc/etc_01.png',
	},
	{
		contry: 'etc',
		name: '쌀국수',
		image: './assets/img/food_img/etc/etc_02.png',
	},
];
/* 필터링 후 음식 이미지 보여주는 함수 
let result = foodtype.filter((value) => value.contry == 'ko')

let bibimbap = result[0];  // foodtype 배열의 첫 번째 객체 (비빔밥)
document.getElementById("foodtype").innerHTML =
    "<p>" + bibimbap.name + "</p>" +
    "<img src='" + bibimbap.image + "' alt='비빔밥 이미지'>";
*/

/* 음식 이미지를 랜덤으로 보여주는 함수
function displayRandomFood() {
	let randomIndex = Math.floor(Math.random() * foodtype.length);
	let randomFood = foodtype[randomIndex];
	document.getElementById('foodtype').innerHTML =
		'<p>' +
		randomFood.name +
		'</p>' +
		"<img src='" +
		randomFood.image +
		"' alt='" +
		randomFood.name +
		" 이미지'>";
}
document.getElementById('btn').addEventListener('click', displayRandomFood);
*/

/* 클릭시 필터링된 음식 이미지를 보여주는 함수 */
function displayResultFood(){
    let filterFood = check_data.countryFood;
    for (let key in check_data) {
        if (key !== "countryFood" && check_data[key].length > 0){
            filterFood = check_data[key].filter(function(food){
                return filterFood.includes(food);
            });
        }}
    let randomIndex = Math.floor(Math.random() * filterFood.length);
    let resultFood = filterFood[randomIndex];
    document.getElementById("country_food").innerHTML =
    "<p>" + resultFood.name + "</p>" +
    "<img src='" + resultFood.image + "' alt='음식이미지'>";
}

document.getElementById("btn_re").addEventListener("click", displayResultFood);

/* 카카오톡 공유하기*/
Kakao.init('0eaa5ffe9b60880336267d180d93bed0'); // 사용하려는 앱의 JavaScript 키 입력
Kakao.Share.createDefaultButton({
	container: '#kakaotalk-sharing-btn',
	objectType: 'feed',
	content: {
		title: '점심메뉴',
		description: '#점심 #점심메뉴 #점심메뉴추천',
		imageUrl:
			'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
		link: {
			// [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
			mobileWebUrl: 'http://mechu.dothome.co.kr',
			webUrl: 'http://mechu.dothome.co.kr',
		},
	},
	social: {
		likeCount: 286,
		commentCount: 45,
		sharedCount: 845,
	},
	buttons: [
		{
			title: '웹으로 보기',
			link: {
				mobileWebUrl: 'https://developers.kakao.com',
				webUrl: 'https://developers.kakao.com',
			},
		},
		// {
		//     title: '앱으로 보기',
		//     link: {
		//     mobileWebUrl: 'https://developers.kakao.com',
		//     webUrl: 'https://developers.kakao.com',
		//     },
		// },
	],
});

/* 페이스북 공유하기 */
(function (d, s, id) {
	var js,
		fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s);
	js.id = id;
	js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
	fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');

/* 클립보드 복사하기 */
function clipboardShare() {
	// 1. 새로운 element 생성
	var tmpTextarea = document.createElement('textarea');

	// 2. 해당 element에 복사하고자 하는 value 저장
	tmpTextarea.value = 'http://mechu.dothome.co.kr/'; // "복사하고픈 value";

	// 3. 해당 element를 화면에 안보이는 곳에 위치
	tmpTextarea.setAttribute('readonly', '');
	tmpTextarea.style.position = 'absolute';
	tmpTextarea.style.left = '-9999px';
	document.body.appendChild(tmpTextarea);

	// 4. 해당 element의 value를 시스템 함수를 호출하여 복사
	tmpTextarea.select();
	tmpTextarea.setSelectionRange(0, 9999); // 셀렉트 범위 설정
	var successChk = document.execCommand('copy');

	// 5. 해당 element 삭제
	document.body.removeChild(tmpTextarea);

	// 클립보드 성공여부 확인
	if (!successChk) {
		alert('클립보드 복사에 실패하였습니다.');
	} else {
		alert('클립보드에 복사가 완료되었습니다.');
	}
}
