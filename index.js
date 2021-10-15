// packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
const { renderLicenseBadge, generateMarkdown } = require('./utils/generateMarkdown');
// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter the title of your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      //Table Of Contents
      {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions for the installation of this application (Required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('You need to provide installation instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide information on the usage of this application (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('You need to provide information on the usage of this application!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'contribution',
        message: 'Would you like to include the industry standard for contributions: The Contributer Covenant Code of Conduct? ',
        default: true
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide a way to test this application (Required)',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('You need to provide a way to test this application!');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: "Please choose a license to cover this application under (Required)",
        choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'Mozilla Public License 2.0', 'No License']
      },
      {
        type: 'input',
        name: 'email',
        message: 'Provide your email (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('You need to provide an email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Provide your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('You need to provide an email!');
            return false;
          }
        }
      }
];

// const promptUser = () => {
//     return inquirer.prompt(questions)
// }

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), "/dist/"+fileName), data)
}

// function to initialize app
function init() { 
    inquirer.prompt(questions).then((responses) => {
      console.log("Generating Readme");
      writeToFile("README.md", generateMarkdown(responses))
    });
}

// function call to initialize app
init();