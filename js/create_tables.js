var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "gustavo",
  password: "12345",
  database: "facebook_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

    var register = "CREATE TABLE register(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, mobile_no VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL)";

  con.query(register, function(err,result){
    if(err) throw err;
    console.log("Table CREATED!");
  });
  
});