$(function(){
    //1번째 질문 오늘은 어느 나라에서 드시겠습니까?
    
    let korea=[
        {country : 'korea', name:'비빔밥', ingredient:'쌀', quality:'',cooking:'' },
        {country : 'korea', name:'비빔밥', ingredient:'채소', quality:'',cooking:'' },
        {country : 'korea',name:'김치찌개', ingredient:'육류', quality:'',cooking:'' },
        {country : 'korea',name:'김치찌개', ingredient:'채소', quality:'',cooking:'' },
        {country : 'korea',name:'된장찌개', ingredient:'해산물', quality:'',cooking:'' },
        {country : 'korea',name:'된장찌개', ingredient:'채소', quality:'',cooking:'' },
        {country : 'korea',name:'동태찌개', ingredient:'해산물', quality:'',cooking:'' },
        {country : 'korea',name:'동태찌개', ingredient:'채소', quality:'',cooking:'' },
        {country : 'korea',name:'순대국', ingredient:'육류', quality:'',cooking:'' },
        {country : 'korea',name:'뼈해장국', ingredient:'육류', quality:'',cooking:'' },
        {country : 'korea',name:'청국장', ingredient:'채소', quality:'',cooking:'' },
        {country : 'korea',name:'부대찌개', ingredient:'육류', quality:'',cooking:'' },
        {country : 'korea',name:'보쌈', ingredient:'육류', quality:'',cooking:'' },
        {country : 'korea',name:'족발', ingredient:'육류', quality:'',cooking:'' },
        {country : 'korea',name:'칼국수', ingredient:'밀가루', quality:'',cooking:'' },
        {country : 'korea',name:'칼국수', ingredient:'해산물', quality:'',cooking:'' },
        {country : 'korea',name:'수제비', ingredient:'밀가루', quality:'',cooking:'' },
        {country : 'korea',name:'수제비', ingredient:'해산물', quality:'',cooking:'' },
        {country : 'korea',name:'콩국수', ingredient:'밀가루', quality:'',cooking:'' },
        {country : 'korea',name:'순두부찌개', ingredient:'해산물', quality:'',cooking:'' },
        {country : 'korea',name:'설렁탕', ingredient:'육류', quality:'',cooking:'' },
        {country : 'korea',name:'갈비탕', ingredient:'육류', quality:'',cooking:'' },
        {country : 'korea',name:'낙지볶음', ingredient:'해산물', quality:'',cooking:'' },
        {country : 'korea',name:'삼계탕', ingredient:'육류', quality:'',cooking:'' },
        {country : 'korea',name:'묵밥', ingredient:'채소', quality:'',cooking:'' },
        {country : 'korea',name:'닭갈비', ingredient:'채소', quality:'',cooking:'' },
        {country : 'korea',name:'닭갈비', ingredient:'육류', quality:'',cooking:'' },
        {country : 'korea',name:'간장게장', ingredient:'해산물', quality:'',cooking:'' },
        {country : 'korea',name:'삼겹살', ingredient:'육류', quality:'',cooking:'' },
        {country : 'korea',name:'찜닭', ingredient:'육류', quality:'',cooking:'' },
        {country : 'korea',name:'갈비찜', ingredient:'육류', quality:'',cooking:'' },
        {country : 'korea',name:'냉면', ingredient:'밀가루', quality:'',cooking:'' },
        {country : 'korea',name:'갈치조림', ingredient:'해산물', quality:'',cooking:'' },
        {country : 'korea',name:'만둣국', ingredient:'밀가루', quality:'',cooking:'' },
        {country : 'korea',name:'전복죽', ingredient:'쌀', quality:'',cooking:'' },
        {country : 'korea',name:'전복죽', ingredient:'해산물', quality:'',cooking:'' },
        {country : 'korea',name:'콩나물국밥', ingredient:'채소', quality:'',cooking:'찜' },
        {country : 'korea',name:'쌈밥정식', ingredient:'육류', quality:'',cooking:'' },
        {country : 'korea',name:'쌈밥정식', ingredient:'채소', quality:'',cooking:'' },
        {country : 'korea',name:'닭볶음탕', ingredient:'육류', quality:'',cooking:'' },
        {country : 'korea',name:'돼지두루치기', ingredient:'육류', quality:'',cooking:'' },
        {country : 'korea',name:'불고기', ingredient:'육류', quality:'',cooking:'' },
        {country : 'korea',name:'한정식', ingredient:'육류', quality:'',cooking:'' },
        {country : 'korea',name:'한정식', ingredient:'채소', quality:'',cooking:'' },
        {country : 'korea',name:'한정식', ingredient:'쌀', quality:'',cooking:'' },
        {country : 'korea',name:'한정식', ingredient:'해산물', quality:'',cooking:'' },
        {country : 'korea',name:'한정식', ingredient:'밀가루', quality:'',cooking:'' },
        {country : 'korea',name:'떡국', ingredient:'쌀', quality:'',cooking:'' },
        {country : 'korea',name:'꽃게탕', ingredient:'해산물', quality:'',cooking:'' },
        {country : 'korea',name:'꽃게탕', ingredient:'채소', quality:'',cooking:'' },
        {country : 'korea',name:'생선구이', ingredient:'해산물', quality:'',cooking:'' },
    ]

    let china=[
        {country:'china', name:'마파두부', ingredient:'육류', quality:'',cooking:'' },
        {country:'china',name:'탕수육', ingredient:'육류', quality:'',cooking:'' },
        {country:'china',name:'자장면', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'china',name:'우육면', ingredient:'밀가루', quality:'',cooking:'찜' },
        {country:'china',name:'쇠고기국수스프', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'china',name:'양장피', ingredient:'채소', quality:'',cooking:'' },
        {country:'china',name:'쉬이 현 랍스터', ingredient:'해산물', quality:'',cooking:'' },
        {country:'china',name:'생선스프', ingredient:'해산물', quality:'',cooking:'' },
        {country:'china',name:'양주볶음밥', ingredient:'쌀', quality:'',cooking:'' },
        {country:'china',name:'깐풍기', ingredient:'해산물', quality:'',cooking:'' },
        {country:'china',name:'샤오롱바오', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'china',name:'가지오믈렛', ingredient:'채소', quality:'',cooking:'' },
        {country:'china',name:'가지칠리소스찜', ingredient:'채소', quality:'',cooking:'' },
        {country:'china',name:'고추치킨', ingredient:'육류', quality:'',cooking:'' },
        {country:'china',name:'궁바오지딩', ingredient:'육류', quality:'',cooking:'' },
        {country:'china',name:'마라탕', ingredient:'', quality:'',cooking:'' },
        {country:'china',name:'냄비사천요리', ingredient:'육류', quality:'',cooking:'' },
        {country:'china',name:'닭고기스프', ingredient:'육류', quality:'',cooking:'' },
        {country:'china',name:'레드카레', ingredient:'', quality:'',cooking:'' },
        {country:'china',name:'생선미트볼스프', ingredient:'', quality:'',cooking:'' },
        {country:'china',name:'오이 푸 아그라', ingredient:'채소', quality:'',cooking:'' },
        {country:'china',name:'짬뽕', ingredient:'헤산물', quality:'',cooking:'' },
        {country:'china',name:'춘권', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'china',name:'칠리생선튀김', ingredient:'해산물', quality:'',cooking:'' },
        {country:'china',name:'토마토 계란볶음', ingredient:'', quality:'',cooking:'' },
        {country:'china',name:'표고버섯찜', ingredient:'채소', quality:'',cooking:'' },
        {country:'china',name:'해물볶음면', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'china',name:'해삼음식볶음밥', ingredient:'쌀', quality:'',cooking:'' },
    ]

    let america =[
        {country:'america',name:'수제햄버거', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'america',name:'스테이크', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'america',name:'파스타', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'america',name:'립', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'america',name:'필라프', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'america',name:'리조또', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'america',name:'피자', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'america',name:'샐러드', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'america',name:'감바스', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'america',name:'오믈렛', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'america',name:'스프', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'america',name:'스튜', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'america',name:'크림파스타', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'america',name:'토마토파스타', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'america',name:'오일파스타', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'america',name:'투움바파스타', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'america',name:'봉골레파스타', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'america',name:'로제파스타', ingredient:'밀가루', quality:'',cooking:'' },
    ]

    let japan = [
        {country:'japan',name:'스시', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'japan',name:'텐동', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'japan',name:'오뎅', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'japan',name:'라멘', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'japan',name:'일본카레', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'japan',name:'돈카츠', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'japan',name:'메밀소바', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'japan',name:'마제소바', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'japan',name:'우동', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'japan',name:'사시미', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'japan',name:'나베', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'japan',name:'규동', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'japan',name:'오코노미야끼', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'japan',name:'가쓰동', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'japan',name:'타코야끼', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'japan',name:'야끼소바', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'japan',name:'오므라이스', ingredient:'밀가루', quality:'',cooking:'' },
    ]
    
    let etc=[
        {country:'etc',name:'팟타이', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'팟타이', ingredient:'해산물', quality:'',cooking:'' },
        {country:'etc',name:'팟타이', ingredient:'채소', quality:'',cooking:'' },
        {country:'etc',name:'쌀국수', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'쌀국수', ingredient:'육류', quality:'',cooking:'' },
        {country:'etc',name:'쌀국수', ingredient:'채소', quality:'',cooking:'' },
        {country:'etc',name:'샌드위치', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'샌드위치', ingredient:'채소', quality:'',cooking:'' },
        {country:'etc',name:'떡볶이', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'김밥', ingredient:'쌀', quality:'',cooking:'' },
        {country:'etc',name:'김밥', ingredient:'채소', quality:'',cooking:'' },
        {country:'etc',name:'타코', ingredient:'채소', quality:'',cooking:'' },
        {country:'etc',name:'타코', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'부리또', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'부리또', ingredient:'쌀', quality:'',cooking:'' },
        {country:'etc',name:'부리또', ingredient:'채소', quality:'',cooking:'' },
        {country:'etc',name:'나시고랭', ingredient:'쌀', quality:'',cooking:'' },
        {country:'etc',name:'나시고랭', ingredient:'채소', quality:'',cooking:'' },
        {country:'etc',name:'브런치', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'브런치', ingredient:'채소', quality:'',cooking:'' },
        {country:'etc',name:'브런치', ingredient:'육류', quality:'',cooking:'' },
        {country:'etc',name:'빠에야', ingredient:'해산물', quality:'',cooking:'' },
        {country:'etc',name:'빠에야', ingredient:'쌀', quality:'',cooking:'' },
        {country:'etc',name:'샐러드', ingredient:'채소', quality:'',cooking:'' },
        {country:'etc',name:'카레', ingredient:'쌀', quality:'',cooking:'' },
        {country:'etc',name:'편의점 도시락', ingredient:'쌀', quality:'',cooking:'' },
        {country:'etc',name:'토스트', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'돈까스', ingredient:'육류', quality:'',cooking:'' },
        {country:'etc',name:'제육덮밥', ingredient:'쌀', quality:'',cooking:'' },
        {country:'etc',name:'제육덮밥', ingredient:'육류', quality:'',cooking:'' },
        {country:'etc',name:'쫄면', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'쫄면', ingredient:'채소', quality:'',cooking:'' },
        {country:'etc',name:'짜조', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'분짜', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'똠양꿍', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'분식세트', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'유부초밥', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'월남쌈', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'포케', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'푸팟퐁커리', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'컵밥', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'잔치국수', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'라면', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'반미', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'오징어덮밥', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'껌승', ingredient:'밀가루', quality:'',cooking:'' },
        {country:'etc',name:'밥버거', ingredient:'밀가루', quality:'',cooking:'' },
    ]

    let btn_count=0; 
	let next_parameter=[]
    let check_data = {
		countryFood:[...korea, ...china, ...america],
		country: [],
		ingredient: [],
		cooking: [],
		spicy: [],
	};

    function btn_parameter(a, b){
        btn_count++;
        if(btn_count===1){
            next_parameter.splice('0',0,'country','countryFood');
            console.log(next_parameter);
        }
        if(btn_count===2){
            next_parameter.splice(0,2)
            next_parameter.splice('0',0,'ingredient','country');
            console.log(next_parameter);
        }
        if(btn_count===3){
            next_parameter.splice(0,2)
            next_parameter.splice('0',0,'cooking','ingredient');
            console.log(next_parameter);
        }
        if(btn_count===4){
            next_parameter.splice(0,2)
            next_parameter.splice('0',0,'spicy','cooking');
            console.log(next_parameter);
        }
    
    }
    
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

   // let foods = korea.concat(china,america,etc,japan);
    
    // let foods=[];
    // foods.push(korea);
    // foods.push(china);
    // foods.push(etc);
    // foods.push(america);
    // foods.push(japan);
    // console.log(foods);

// let choice=[];
// let  cty=[];

//     $('#ko').click(function(){
//         for( let j=0;  j<=cty.length; j++){
//             if( cty.indexOf( $(this).text()  )==-1){
//                 cty.push( $(this).text() );
//                 for( let i=0; i<korea.length;i++){
//                     choice.push(korea[i]);
//             }
//             }
//         }
//     console.log( choice )
//     });
//     $('#chi').click(function(){
//         //for(let i = 0; i<foods.length; i++){               return console.log(chinaFood);            }
//         for( let i=0; i<china.length;i++){
//             choice.push(china[i]);
//     }
//         console.log( choice )
//     });
//     $('#america').click(function(){
//         for( let i=0; i<america.length;i++){
//             choice.push(america[i]);
//     }
//         console.log( choice )
//     });
//     $('#japan').click(function(){
//         for( let i=0; i<japan.length;i++){
//             choice.push(japan[i]);
//     }
//         console.log( choice )
//     });
//     $('#etc').click(function(){
//         for( let i=0; i<etc.length;i++){
//             choice.push(etc[i]);
//     }
//     console.log( choice )
//     });
    

    
/*
    // let koreaFood = foods.filter((value) => value.ingredient == 'korea')
    // let chinaFood = foods.filter((value) => value.country == 'china')
    // let americaFood = foods.filter((value) => value.country == 'america')
    // let japanFood = foods.filter((value) => value.country == 'japan')
    // let etcFood = foods.filter((value) => value.country == 'etc')

    //let rice = foods.filter((value) => value.ingredient == '쌀')
*/
// let result=[];
//     $('.part').click(function(){ 
//     let val=$(this).text();
//     console.log(val)
//     for(let k=0; k<choice.length;k++){
//         if( choice[k].ingredient==val){
//             result.push(choice[k]);
//             console.log( result);
//         }            
//     }        
// });

/*
$('.reset').click(function(){
    result=[]
    choice=[]

})
*/

});
let 예시배열=[{country:'etc',name:'밥버거', ingredient:'쌀', cooking:'', spicy:'', temperature:''}]       
