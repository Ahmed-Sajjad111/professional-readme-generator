// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license == "Apache 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  } else if (license == "GNU GPL v3") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (license == "Mozilla Public License 2.0") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
  } else if (license == "No License") {
    return ''
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return `(https://opensource.org/licenses/MIT)`
  } else if (license == "Apache 2.0") {
    return `(https://opensource.org/licenses/Apache-2.0)`
  } else if (license == "GNU GPL v3") {
    return `(https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license == "Mozilla Public License 2.0") {
    return `(https://opensource.org/licenses/MPL-2.0)`
  } else if (license == "No License") {
    return ''
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No License') {
    return `## License
    
  This project is licensed under [${license}]` + renderLicenseLink(license)
  }
  return ''
}

function renderLicenseToCSection(license) {
  if(license !== 'No License') {
    return `* [License](#license)`
  }
  return ''
}

function renderContributingSection(contribution) {
  if (contribution === true) {
    return `## Contributing
  
  [Contributer Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)`
  }
  return ''
}

function renderContributingToCSection(contribution){
  if(contribution === true) {
    return `* [Contributing](#contributing)`
  }
  return ''
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseToCSection(data.license)}
  ${renderContributingToCSection(data.contribution)}
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  To install the application, follow these instructions:
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ${renderContributingSection(data.contribution)}

  ## Tests
  To run tests, follow these instructions:
  ${data.tests}

  ## Questions

  If you have any questions you may reach me at:


  Email: ${data.email}


  Github: [${data.github}](https://github.com/${data.github}/)

`;
}

module.exports = {generateMarkdown};
