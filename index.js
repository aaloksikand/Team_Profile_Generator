const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const renderTeam = require("./src/bootstrap");

const teamMemberObjArr = [];

function init() {
  // WHEN I start the application
  inquirer //using the inqurer prompt
    .prompt([
      {
        // THEN I am prompted to enter the team manager’s name . . .
        type: "input",
        message: "Please enter the team manager name.",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter the manager employee ID.",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter the manager email here.",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter the manager office number here.",
        name: "officeNumber",
      },
    ])

    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMemberObjArr.push(manager);
      addEmployees();
    });

  function addEmployees() {
    inquirer
      .prompt([
        {
          type: "checkbox",
          message:
            "Please begin to add Employees to your team until you are done.",
          name: "employeeChoice",
          choices: ["Add An Engineer", "Add An Intern", "Team Complete"],
        },
      ])
      .then((answers) => {
        switch (answers.employeeChoice[0]) {
          case "Add An Engineer":
            return createEngineer();

          case "Add An Intern":
            createIntern();
            break;

          default:
            buildTeam();
            break;
        }
      });
    function createEngineer() {
      inquirer
        .prompt([
          {
            type: "input",
            message: "Please enter the Engineer name.",
            name: "name",
          },
          {
            type: "input",
            message: "Please enter the Engineer employee ID.",
            name: "id",
          },
          {
            type: "input",
            message: "Please enter the engineer email address.",
            name: "email",
          },
          {
            type: "input",
            message: "Please finish the engineer github URL: www.github.com/",
            name: "github",
          },
        ])

        .then((answers) => {
          const engineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
          );
          teamMemberObjArr.push(engineer);
          addEmployees();
        });
    }
    function createIntern() {
      inquirer
        .prompt([
          {
            type: "input",
            message: "Please enter Intern name.",
            name: "name",
          },
          {
            type: "input",
            message: "Please enter Intern employee ID.",
            name: "id",
          },
          {
            type: "input",
            message: "Please enter Intern email address.",
            name: "email",
          },
          {
            type: "input",
            message: "Please enter Intern school of attendance.",
            name: "school",
          },
        ])
        .then((answers) => {
          const intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
          );
          teamMemberObjArr.push(intern);
          addEmployees();
        });
    }
  }
  function buildTeam() {
    fs.writeFile("./dist/index.html", renderTeam(teamMemberObjArr), (err) =>
      console.log(err)
    );
  }
}
init();
