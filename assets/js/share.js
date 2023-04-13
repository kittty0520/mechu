
//****************************공유하기****************************

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
