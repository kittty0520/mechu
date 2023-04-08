/* 배열 예시
let country_food=[
    {contry : 'ko', name : '비빔밥', image : 'img/food_img/ko/ko_01.png'},
    {contry : 'ko', name : '김치찌개', image : 'img/food_img/ko/ko_02.png'},
    {contry : 'jp', name : '초밥', image : 'img/food_img/jp/jp_01.png'},
    {contry : 'jp', name : '텐동', image : 'img/food_img/jp/jp_02.png'},
    {contry : 'ws', name : '수제햄버거', image : 'img/food_img/ws/ws_01.png'},
    {contry : 'ws', name : '스테이크', image : 'img/food_img/ws/ws_02.png'},
    {contry : 'ch', name : '마파두부', image : 'img/food_img/ch/ch_01.png'},
    {contry : 'ch', name : '탕수육', image : 'img/food_img/ch/ch_02.png'},
    {contry : 'etc', name : '팟타이', image : 'img/food_img/etc/etc_01.png'},
    {contry : 'etc', name : '쌀국수', image : 'img/food_img/etc/etc_02.png'},
]
*/

let ko =[
    {country :'korea', name:'비빔밥', ingredient:'쌀', quality:'',cooking:'기타', spicy:'매움', image : 'img/food_img/ko/ko_01.png'},
    {country :'korea', name:'김치찌개', ingredient:'채소', quality:'',cooking:'찜', spicy:'매움' , image : 'img/food_img/ko/ko_02.png'},
    {country :'korea', name:'된장찌개', ingredient:'해산물', quality:'',cooking:'찜', spicy:'안매움', image : 'img/food_img/ko/ko_03.png'},
    
] 
let ch =[
    {country:'china', name:'마파두부', ingredient:'육류', quality:'',cooking:'볶음' , spicy:'안매움', image : 'img/food_img/ch/ch_01.png'},
    {country:'china', name:'탕수육', ingredient:'육류', quality:'',cooking:'튀김', spicy:'안매움', image : 'img/food_img/ch/ch_02.png'},
    {country:'china', name:'자장면', ingredient:'밀가루', quality:'',cooking:'기타' , spicy:'안매움', image : 'img/food_img/ch/ch_03.png'},
]
let ws =[
    {country:'west', name:'수제햄버거', ingredient:'밀가루', quality:'',cooking:'구이', spicy:'안매움', image : 'img/food_img/ws/ws_01.png'},
    {country:'west', name:'스테이크', ingredient:'밀가루', quality:'',cooking:'구이', spicy:'안매움', image : 'img/food_img/ws/ws_02.png'},
    {country:'west', name:'파스타', ingredient:'밀가루', quality:'',cooking:'찜' , spicy:'안매움', image : 'img/food_img/ws/ws_03.png'},
]
let country_food=[...ko, ...ch, ...ws];

/* 필터링 후 음식 이미지 보여주는 함수 - 텍스트&이미지 단순출력
let result = country_food.filter((value) => value.contry == 'ko')

let bibimbap = result[0];  // foodtype 배열의 첫 번째 객체 (비빔밥)
document.getElementById("country_food").innerHTML =
    "<p>" + bibimbap.name + "</p>" +
    "<img src='" + bibimbap.image + "' alt='비빔밥 이미지'>";
*/   


/* 클릭시 필터링된 음식 이미지를 보여주는 함수 */ 
function displayResultFood(){
    // let resultIndex = country_food.filter((value) => value.contry ==='ko');
    let resultIndex = Math.floor(Math.random()*country_food.length); 
    let resultFood = country_food[resultIndex];
    document.getElementById("country_food").innerHTML =
        "<p>" + resultFood.name + "</p>" +
        "<img src='" + resultFood.image + "' alt='음식 이미지'>";
}

document.getElementById("btn_re").addEventListener("click", displayResultFood);


/* 클릭시 음식 이미지를 랜덤으로 보여주는 함수
function displayRandomFood(){

    let randomIndex = Math.floor(Math.random()*foodtype.length); 
    let randomFood = foodtype[randomIndex];
    document.getElementById("foodtype").innerHTML =
    "<p>" + randomFood.name + "</p>" +
    "<img src='" + randomFood.image + "' alt='"+randomFood.name+" 이미지'>";
}
document.getElementById("btn").addEventListener("click", displayRandomFood);
*/ 

/* 카카오톡 공유하기*/
Kakao.Share.createDefaultButton({
container: '#kakaotalk-sharing-btn',
objectType: 'feed',
content: {
title: '직장인 점심메뉴 추천',
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
{
    title: '앱으로 보기',
    link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
    },
},
],
});


/* 페이스북 공유하기 
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk')); 
*/


/* 클립보드 복사하기 */
function clipboardShare() {
    // 1. 새로운 element 생성
    var tmpTextarea = document.createElement('textarea');
    
    // 2. 해당 element에 복사하고자 하는 value 저장
    tmpTextarea.value = "http://mechu.dothome.co.kr/"; // "복사하고픈 value";
    
    // 3. 해당 element를 화면에 안보이는 곳에 위치
    tmpTextarea.setAttribute('readonly', '');
    tmpTextarea.style.position = 'absolute';
    tmpTextarea.style.left = '-9999px';
    document.body.appendChild(tmpTextarea);
    
    // 4. 해당 element의 value를 시스템 함수를 호출하여 복사
    tmpTextarea.select();
    tmpTextarea.setSelectionRange(0, 9999);  // 셀렉트 범위 설정
    var successChk = document.execCommand('copy');
    
    // 5. 해당 element 삭제
    document.body.removeChild(tmpTextarea);
    
    // 클립보드 성공여부 확인
    if(!successChk){
        alert("클립보드 복사에 실패하였습니다.");
    } else {
        alert("클립보드에 복사가 완료되었습니다.");
    }
}