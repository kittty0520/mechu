// *******Fetch*******

export async function getData() {
	let foodData = await fetch('assets/data/foodDB.json')
		.then((res) => res.json())
		.then((data) => {
			return data.map((food) => {
				food.ingre = food.ingre.split(',');
				food.cook = food.cook.split(',');
				return food;
			});
		})
		.catch(console.error);
	return foodData;
}

const food = getData();
console.log(food);

// *********Mysql************
// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "pro12345"
// });

// con.connect();

// con.query('SELECT * from jy_db.food',function(error,result){
//     var dataList = [];
//     if (error) throw error;
//     for( var data of result){
//         dataList.push(data);
// }

// var result = [];

// for(let i = 0; i<dataList.length; i++){
//     if(dataList[i].country==='ko'){
//        result.push(dataList[i]);
//     }
// }
// console.log(result);
// });

// con.end(()=>{
// console.log("connection end");
// })
