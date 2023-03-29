// import { getData } from './getData.js';
// import './main.js';

//     //데이터 불러오기 -비동기 함수(프로미스 객체)
//     const foodData = getData();  

//     let btn_count=0; 
// 	let next_parameter=[]
//     let check_data = {
// 		countryFood:[foodData],
// 		country: [],
// 		ingre: [],
// 		cook: [],
// 		spicy: [],
//         temp : [],
// 	};
//     console.log(check_data.countryFood);

// 깃 브랜치 테스트
//     function btn_parameter(a, b){
//         btn_count++;
//         if(btn_count===1){
//             next_parameter.splice('0',0,'country','countryFood');
//             console.log(next_parameter);
//         }
//         if(btn_count===2){
//             next_parameter.splice(0,2)
//             next_parameter.splice('0',0,'ingre','country');
//             console.log(next_parameter);
//         }
//         if(btn_count===3){
//             next_parameter.splice(0,2)
//             next_parameter.splice('0',0,'cook','ingre');
//             console.log(next_parameter);
//         }
//         if(btn_count===4){
//             next_parameter.splice(0,2)
//             next_parameter.splice('0',0,'spicy','cook');
//             console.log(next_parameter);
//         }
//         if(btn_count===5){
//             next_parameter.splice(0,2)
//             next_parameter.splice('0',0,'temp','spicy');
//             console.log(next_parameter);
//         }
    
//     }



//     function filter(value, check){
//     let check_element=document.getElementsByName(value);
//     for(let i=0; i<check_element.length; i++){
//         if(check_element[i].checked){
//             for(let j=0; j<check_data[check].length; j++){
//                 if(check_element[i].value===check_data[check][j][value]){
//                     check_data[value].push(check_data[check][j]);
//                     console.log(check_data[value]);                    
//                 }
//             } 
//         }
//     }
// }

// document.querySelector('.answer__button').addEventListener('click',()=>{
//     btn_parameter('a', 'b');
//     filter(next_parameter[0],next_parameter[1]);
//     console.log(filter(next_parameter[0],next_parameter[1]));
// })

