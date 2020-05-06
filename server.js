const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "omgwtfbbq",
    database: "all_employees"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
  });

  function start() {
    inquirer
      .prompt({
        name: "userAction",
        type: "list",
        message: "What would you like to do?",
        choices: ["View all departments", "View all employees", "View all roles", "Add a department", "Add a role", "Add an employee", "update an employee" ]
      })

      .then(function(answer) {
        switch () {
            case "View all departments":
                // function
                break;
            case "View all employees":
                // function
                break;
            case "View all roles":
                // function
                break;
            case "Add a department":
                //function
                break;
            case "Add a role":
                //function
                break;
            case "Add an employee":
                //function
                break;
            case "update an employee":
                //function
                break; 
        }
      });
  }

