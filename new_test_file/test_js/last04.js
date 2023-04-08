let korea=[
    {country : 'korea', name:'비빔밥', ingredient:'쌀', quality:'',cooking:'기타', spicy:'맵기' },
    {country : 'korea', name:'비빔밥', ingredient:'채소', quality:'',cooking:'기타', spicy:'맵기' },
    {country : 'korea',name:'김치찌개', ingredient:'육류', quality:'',cooking:'찜' , spicy:'맵기'},
    {country : 'korea',name:'김치찌개', ingredient:'채소', quality:'',cooking:'찜', spicy:'맵기' },
    {country : 'korea',name:'된장찌개', ingredient:'해산물', quality:'',cooking:'찜', spicy:'맵기' },
    {country : 'korea',name:'된장찌개', ingredient:'채소', quality:'',cooking:'구이', spicy:'맵기' },
    {country : 'korea',name:'동태찌개', ingredient:'해산물', quality:'',cooking:'구이', spicy:'안맵기' },
    {country : 'korea',name:'동태찌개', ingredient:'채소', quality:'',cooking:'볶음' , spicy:'안맵기' },
    {country : 'korea',name:'순대국', ingredient:'육류', quality:'',cooking:'볶음', spicy:'안맵기'  },
    {country : 'korea',name:'뼈해장국', ingredient:'육류', quality:'',cooking:'기타', spicy:'안맵기'  },
    {country : 'korea',name:'청국장', ingredient:'채소', quality:'',cooking:'볶음' , spicy:'안맵기' },
    {country : 'korea',name:'부대찌개', ingredient:'육류', quality:'',cooking:'기타', spicy:'안맵기'  }
] 
let china=[
    {country:'china', name:'마파두부', ingredient:'육류', quality:'',cooking:'볶음' , spicy:'맵기'},
    {country:'china',name:'탕수육', ingredient:'육류', quality:'',cooking:'튀김', spicy:'맵기' },
    {country:'china',name:'자장면', ingredient:'밀가루', quality:'',cooking:'기타' , spicy:'맵기'},
    {country:'china',name:'우육면', ingredient:'밀가루', quality:'',cooking:'기타' , spicy:'맵기'},
    {country:'china',name:'쇠고기국수스프', ingredient:'밀가루', quality:'',cooking:'기타' , spicy:'맵기'},
    {country:'china',name:'양장피', ingredient:'채소', quality:'',cooking:'볶음' , spicy:'안맵기' },
    {country:'china',name:'쉬이 현 랍스터', ingredient:'해산물', quality:'',cooking:'구이', spicy:'안맵기'  },
    {country:'china',name:'생선스프', ingredient:'해산물', quality:'',cooking:'기타', spicy:'안맵기'  },
    {country:'china',name:'양주볶음밥', ingredient:'쌀', quality:'',cooking:'볶음', spicy:'안맵기'  },
    {country:'china',name:'깐풍기', ingredient:'해산물', quality:'',cooking:'튀김', spicy:'안맵기'  }
]
let america =[
    {country:'america',name:'수제햄버거', ingredient:'밀가루', quality:'',cooking:'구이', spicy:'맵기'},
    {country:'america',name:'스테이크', ingredient:'밀가루', quality:'',cooking:'구이', spicy:'맵기' },
    {country:'america',name:'파스타', ingredient:'밀가루', quality:'',cooking:'찜' , spicy:'맵기'},
    {country:'america',name:'립', ingredient:'밀가루', quality:'',cooking:'튀김', spicy:'안맵기'  },
    {country:'america',name:'필라프', ingredient:'밀가루', quality:'',cooking:'볶음', spicy:'맵기' },
    {country:'america',name:'리조또', ingredient:'밀가루', quality:'',cooking:'기타', spicy:'안맵기'  },
    {country:'america',name:'피자', ingredient:'밀가루', quality:'',cooking:'볶음', spicy:'안맵기'  }
]
let check_data = {
    countryFood:[...korea, ...china, ...america],
    country: [],
    ingredient: [],
    cooking: [],
    spicy: [],
};
function filter(value, check){
    let check_element=document.getElementsByName(value);
    for(let i=0; i<check_element.length; i++){
        if(check_element[i].checked){
            for(let j=0; j<check_data[check].length; j++){
                if(check_element[i].value===check_data[check][j][value]){
                    check_data[value].push(check_data[check][j]);
                    console.log(check_data[value]);                    
                }
            } 
        }
    }
}

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



// 클릭시 필터링된 음식 이미지를 보여주는 함수 04
/* 
<수정사항>
01. last.js에서 있는 랜덤함수의 인자를 배열로 표기
02. 함수 내부에서는 배열안의 음식 객체들 중 랜덤하게 한 개 골라 img를 출력
*/

function displayResultFood(){
    let filterFood = check_data.countryFood;
    for (let key in check_data) {
        if (key !== "countryFood" && check_data[key].length > 0){
            filterFood = check_data[key].filter(function(food){
                return filterFood.includes(food);
            });
        }
    }
    /*
    03. 필터함수를 통해 출력된 값이 없다면 "결과값"이 없다는 메세지를 출력
    ->데이터에 없다면 버튼이 눌리지 않음(굳이 메세지 출력할 필요가 없음)

    if(filterFood.length === 0) {
        document.getElementById("country_food").innerHTML = "<p>결과에 맞는 음식이 없습니다.</p>";
        return;
    }
    */
    let randomIndex = Math.floor(Math.random() * filterFood.length);
    let resultFood = filterFood[randomIndex];
    document.getElementById("country_food").innerHTML =
    `<p>${resultFood.name}</p>` +
    `<img src="${resultFood.image}" alt="음식이미지">`;
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
        '',
    // 'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
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