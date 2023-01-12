var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pro12345"
});

con.connect();

con.query('SELECT * from jy_db.food',function(error,result){
    var dataList = [];
    if (error) throw error;
    for( var data of result){
        dataList.push(data);
}

var result = [];

for(let i = 0; i<dataList.length; i++){
    if(dataList[i].country==='ko'){
       result.push(dataList[i]);
    }
}
console.log(result);
});


con.end(()=>{
console.log("connection end");
})