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

function managerPrompt() // WHEN I start the application
{
inquirer  //using the inqurer prompt
  .prompt([
    {  // THEN I am prompted to enter the team manager’s name . . .
      type: 'input',  
      message: 'Please enter the team manager name.',
      name: 'managerName',  
    },
    {
      type: 'input', //user input for Description
      message: 'Please enter a short description of your project.',  //See Acceptance Criteria: "// WHEN I enter a description . . ."
      name: 'description',
    },
    {
      type: 'input',  //user input for Installation Instructions
      message: 'Please enter your project installation instructions here.',
      name: 'installationInstructions', //See Acceptance Criteria: ". . . WHEN I enter installation instructions . . .""
      },
    {
      type: 'input',  //user input for project usage
      message: 'Please enter your project usage information here.',
      name: 'usageInformation',  // WHEN I enter . . . usage information . . .""
      },
    {
      type: 'input',  //user input for contribution guidelines
      message: 'Please enter your project contribution guidelines here.',  // WHEN I enter . . . contribution guidelines 
      name: 'contributionGuidelines', // WHEN I enter . . .contribution guidelines . . .
      },
    {
      type: 'input',  //user input for project test instructions
      message: 'Please enter your project test instructions here.',
      name: 'testInstructions',  // WHEN I enter . . . test instructions
      },
    {
      type: 'checkbox',  //checkbox input for different license choices
      message: 'Please choose a license for your application from the following list of options.',  // WHEN I choose a license for my application from a list of options
      name: 'licenseChoice',
      choices: ['Apache', 'The MIT License', 'Mozilla'],
    },
    {
      type: 'input',  //github username
      message: 'Please enter your Github username.',
      name: 'githubUrl',
      
    },  
    {
      type: 'input',  //email address
      message: 'Please enter your email address.',
      name: 'emailAddress',
    }
  ])

.then((data) => {
  const filename = `${data.projectTitle.toLowerCase().split('').join('')}.md`; //Generates readme.md file using project title as a name
  const readMe = generateReadme(data);
  fs.writeFileSync(filename, readMe, (err) =>
err ? console.log(err) : console.log('Success!')
)
})
}

function displayBadge(licenseChoice){  //displaybadge function depending on user choice of Apache, MIT or Mozilla
  let licenseBadge;
  if (licenseChoice = 'Apache') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]' //paste Apache here
  }
  else if (licenseChoice = 'The MIT License') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)]' //paste MIT here
  }
  else if (licenseChoice = 'Mozilla') {
    licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)]' //paste Mozilla here
  }
  return licenseBadge;
}
function generateReadme(data)
{
 return `# ${data.projectTitle} ${displayBadge(data.licenseChoice)}

## Project Description
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installationInstructions}

## Usage
${data.usageInformation}

## License
${data.licenseChoice} 

## Contributing
${data.contributionGuidelines}

## Tests
${data.testInstructions}

## Questions
For additional questions, please contact https://www.github.com/${data.githubUrl} or ${data.emailAddress}.  Thank you.`;
}

init();