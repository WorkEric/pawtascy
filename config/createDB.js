var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "1234"  
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
con.query("CREATE DATABASE user", function (err, result) {  
if (err) throw err;  
console.log("Database created");  
});  
});  