/* 음식 이미지를 랜덤으로 보여주는 함수

<수정사항>
01. 랜덤으로 출력값을 바로 보여주는 section을 생성

function displayRandomFood() {
	let randomIndex = Math.floor(Math.random() * foodtype.length);
	let randomFood = foodtype[randomIndex];
	document.getElementById('foodtype').innerHTML =
		`<p>${resultFood.name}</p>` +
        `<img src="${resultFood.image}" alt="음식이미지">`;
}

document.getElementById('btn').addEventListener('click', displayRandomFood);
*/


/* 클릭시 필터링된 음식 이미지를 보여주는 함수 03 
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
*/


/* 필터링된 음식 이미지를 보여주는 함수 05

<수정사항>
01. last.js에서 있는 랜덤함수의 인자를 배열로 표기
02. 함수 내부에서는 필터링된 배열안의 객체(음식)들 중 랜덤하게 한 개의 img를 출력
*/

function displayResultFood(){
    /*내부 자체적 필터링
    let filterFood = check_data.countryFood;
    for (let key in check_data) {
        if (key !== "countryFood" && check_data[key].length > 0){
            filterFood = check_data[key].filter(function(food){
                return filterFood.includes(food);
            });
        }
    }
    */

let randomIndex = Math.floor(Math.random() * filterFood.length);
let resultFood = filterFood[randomIndex];
document.getElementById("country_food").innerHTML =
    `<p>${resultFood.name}</p>` +
    `<img src="${resultFood.image}" alt="음식이미지">`;
}

/* 다시보기 버튼

<수정사항>
01. 다시보기로 버튼을 바꾼다.
02. 결과값 배열 안의 결과를 랜덤으로 한 번만 다시 보여준다.
03. 더이상 보여줄 결과값이 없을 경우 결과값이 없다는 메세지를 띄운다.

document.getElementById("btn_re").addEventListener("click", displayResultFood);
*/


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


/* 페이스북 공유하기
(function (d, s, id) {
	var js,
		fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s);
	js.id = id;
	js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
	fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');
*/


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