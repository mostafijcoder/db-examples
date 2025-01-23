
// Get the client
const { createConnection } = require('mysql2');


// Create the connection to database
const connection = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'testsqldb',
  password: 'root'
});

// A simple SELECT query
connection.query('SELECT * FROM hapsa',function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
    connection.end();
  }
);

