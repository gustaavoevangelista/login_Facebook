var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "gustavo",
  password: "12345"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});