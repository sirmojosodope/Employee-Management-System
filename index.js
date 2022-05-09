const inquirer = require("inquirer");
const db = require("./db");

init();

function init() {
  console.log("Welcome to your employee management system!");
  mainMenu();
}

function mainMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "View All Roles",
        ],
      },
    ])
    .then((answer) => {
      let userChoice = answer.choice;

      switch (userChoice) {
        case "View All Employees":
          viewAllEmployees();
          break;
        case "View All Departments":
          // viewAllDepartments()
          break;
        case "View All Employees":
          // viewAllEmployees()
          break;
      }

      // This if statement is the same as the switch statement above
      // just written differently...
      //   if(userChoice === "View All Employees"){
      //       viewAllEmployees()
      //   } else if (userChoice === "View All Departments"){
      //       // viewAllDepartments()
      //   } else if (userChoice === "View All Employees"){
      //       // viewAllEmployees()
      //   }
    });
}

function viewAllEmployees() {
  db.findAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.table(employees);
    })
    .then(() => mainMenu());
}

// add the other choices to the switch statement (read the readme for this HW)cd
