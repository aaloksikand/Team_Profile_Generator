// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

import inquirer from 'inquirer'; //Importing inquirer according to updated version of inquirer requirements

import fs from 'fs'; //Importing fs
import CheckboxPrompt from 'inquirer/lib/prompts/checkbox';
const renderTeam = require("./src/bootstrap")

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

  inquirer  //using the inqurer prompt
  .prompt([
    {  // THEN I am prompted to enter the engineer’s name . . .
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

  inquirer  //using the inqurer prompt
  .prompt([
    {  // THEN I am prompted to enter the team manager’s name . . .
      type: 'input',  
      message: 'Please enter the team Intern name.',
      name: 'name',  
    },
    {
      type: 'input', //user input for Description
      message: 'Please enter the Intern employee ID.',  //See Acceptance Criteria: "// WHEN I enter a description . . ."
      name: 'id',
    },
    {
      type: 'input',  //user input for Installation Instructions
      message: 'Please enter the Intern email address.',
      name: 'email', //See Acceptance Criteria: ". . . WHEN I enter installation instructions . . .""
      },
    {
      type: 'input',  //user input for project usage
      message: 'Please enter Intern school of attendance.',
      name: 'github',  // WHEN I enter . . . usage information . . .""
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
)
})
}



init();