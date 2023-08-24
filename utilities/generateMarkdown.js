// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/license-${license}-brightgreen)`;
  }
  return '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `* [License](*license)\n`
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
 This project is licensed under the ${license} License - see the [LICENSE](LICENSE) file for details.\n`;
  }
  return '';
}

const generateREADME = (answers) => {
  console.log(answers)
  return `
  # ${answers.projectName}

  ${renderLicenseBadge(answers.license)}

  
  ## Description
  
  -${answers.motivation}.
  
  -${answers.why}.

  -${answers.problem}.

  -${answers.learn}.

  ## Table of Contents
  ${renderLicenseLink(answers.license)}
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  -${answers.installation}.

  -${renderLicenseSection(answers.license)}
  
  ## Usage

  -${answers.usage}.

  ## Contributing

  -${answers.contributors}.

  ## Tests

  -${answers.test}.

  ## Questions

  My github username is: ${answers.github}.

  If you have any questions about this project, please contact me at ${answers.email}.
  
  `;
};

module.exports = {generateREADME}

