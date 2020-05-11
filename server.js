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
    mainMenu();
  });
  
  function mainMenu() {
    inquirer
      .prompt({
        name: "userAction",
        type: "list",
        message: "What would you like to do?",
        choices: ["View all departments", "View all employees", "View all roles", "Add a department", "Add a role", "Add an employee", "update an employee" ]
      })

      .then(function(response) {
        switch (response.userAction) {
            case "View all departments":
                viewDepartments();
                break;
            case "View all employees":
                viewEmployees();
                break;
            case "View all roles":
                viewRoles();
                break;
            case "Add a department":
                addDept();
                break;
            // case "Add a role":
            
            //     break;
            // case "Add an employee":
            
            //     break;
            // case "update an employee":
            //     updateEmployee();
            //     break; 
        }
      });

    function viewDepartments() {
        let query = "SELECT * FROM  departments";
        connection.query(query, function(err, res) {
                for (var i = 0; i < res.length; i++) {
                console.log(res[i].department_name);
                };
                mainMenu();
            });
        };

    function viewEmployees() {
        let query = "SELECT * FROM  employee";
        connection.query(query, function(err, res) {
                for (var i = 0; i < res.length; i++) {
                console.log(res[i].first_name + " " + res[i].last_name);
                };
                mainMenu();
            });
        };

    function viewRoles() {
        let query = "SELECT * FROM  roles";
        connection.query(query, function(err, res) {
                for (var i = 0; i < res.length; i++) {
                console.log(res[i].title);
                };
                mainMenu();
            });
        };

    function addDept() {
        inquirer
        .prompt([
        {
          name: "deptID",
          type: "input",
          message: "What is the ID of the new department?",
        },
        {
        name: "deptName",
        type: "input",
        message: "What is the name of the new department?",
        }
        ])
  
        .then(function(response) {
            connection.query("INSERT INTO departments SET ?", {
                    id: response.deptID,
                    department_name: response.deptName,
            },
            function(err) {
                if (err) throw err;
                console.log("Your department was created successfully!");
                mainMenu();
                }
            );
            });
    };

    function updateEmployee() {
        inquirer
        .prompt({
          name: "employeeName",
          type: "input",
          message: "Which employee do you want to update?",
        },
        {
        name: "deptName",
        type: "input",
        message: "What is the name of the new department?",
        })
  
        .then(function(response) {
            connection.query("INSERT INTO departments SET ?", {
                    id: response.deptID,
                    department_name: response.deptID,
            },
            function(err) {
                if (err) throw err;
                console.log("Your department was created successfully!");
                mainMenu();
                }
            );
            });
    };

}