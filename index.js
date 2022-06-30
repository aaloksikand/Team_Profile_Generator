
const inquirer = require("inquirer"); //Importing inquirer according to updated version of inquirer requirements
const fs = require('fs');
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Inter");
const renderTeam = require("./src/bootstrap");

function init() // WHEN I start the application
{
inquirer  //using the inqurer prompt
  .prompt([
    {  // THEN I am prompted to enter the team manager’s name . . .
      type: 'input',  
      message: 'Please enter the team manager name.',
      name: 'name',  
    },
    {
      type: 'input', //user input for Description
      message: 'Please enter the manager employee ID.',  //See Acceptance Criteria: "// WHEN I enter a description . . ."
      name: 'id',
    },
    {
      type: 'input',  //user input for Installation Instructions
      message: 'Please enter your project installation instructions here.',
      name: 'email', //See Acceptance Criteria: ". . . WHEN I enter installation instructions . . .""
      },
    {
      type: 'input',  //user input for project usage
      message: 'Please enter your project usage information here.',
      name: 'officeNumber',  // WHEN I enter . . . usage information . . .""
      },
  ])

.then((answers) => {
    const manager = new Manager (
      answers.id,
      answers.name,
      answers.email,
      answers.officeNumber
    )
    teamMemberObjArr.push(manager)
    addEmployees()
})
};

function addEmployees() {
  inquirer
.prompt([
  {
    type: 'checkbox',  //checkbox input for different employee choices
    message: 'Please begin to add Employees to your team until you are done.',
    name: 'employeeChoice',
    choices: ['Add An Engineer', 'Add An Intern', 'Team Complete'],
  }
])
.then((answers) => {
  switch (answers.employeeChoice) {
    case "Add An Engineer":
    createEngineer();
    break;

    case "Add An Intern":
    createIntern();
    break;

    default:
      buildTeam();
      break;
  }
})
function createEngineer() {

  inquirer  
  .prompt([
    {  
      type: 'input',  
      message: 'Please enter the team Engineer name.',
      name: 'name',  
    },
    {
      type: 'input', 
      message: 'Please enter the Engineer employee ID.',  
      name: 'id',
    },
    {
      type: 'input',  
      message: 'Please enter the engineer email address.',
      name: 'email', 
      },
    {
      type: 'input',  
      message: 'Please finish the engineer github URL: www.github.com/',
      name: 'github',  
      },
  ])

.then((answers) => {
    const Engineer = new Engineer (
      answers.id,
      answers.name,
      answers.email,
      answers.github
    )
    teamMemberObjArr.push(Engineer)
    addEmployees()

})


function createIntern() {

  inquirer 
  .prompt([
    {  
      type: 'input',  
      message: 'Please enter the team Intern name.',
      name: 'name',  
    },
    {
      type: 'input', 
      message: 'Please enter the Intern employee ID.',  
      name: 'id',
    },
    {
      type: 'input',  
      message: 'Please enter the Intern email address.',
      name: 'email', 
      },
    {
      type: 'input',
      message: 'Please enter Intern school of attendance.',
      name: 'github',  
      },
  ])

.then((answers) => {
    const Intern = new Intern (
      answers.id,
      answers.name,
      answers.email,
      answers.school
    )
    teamMemberObjArr.push(Intern)
    addEmployees()
})
}
 function buildTeam() {
  fs.writeFile("./dist/index.html", renderTeam(teamMemberObjArr), "utf-8")
 }
}
}
init();