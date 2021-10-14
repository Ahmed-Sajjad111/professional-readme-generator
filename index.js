// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
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
        message: 'Provide a link to a video walkthrough testing this application (Required)',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('You need to provide a link!');
            return false;
          }
        }
      },
      {
        type: "list",
        name: "license",
        message: "Please choose a license to cover this application under (Required)",
        choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'Mozilla Public License 2.0']
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
