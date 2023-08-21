// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of the project?',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does it solve?',
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?',
    },
    {
        type: 'input',
        name: 'special',
        message: 'What makes your project stand out?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the step required to install your project?',
    },
];

inquirer.prompt(questions)
    .then(answers => {
        const readmeContent = generateREADME(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('README.md file has been successfully generated!')
        );
    });

// TODO: Create a function to write README file
const generateREADME = (answers) => {
    return `
    # ${answers.projectName}
    
    ## Description
    
    -${answers.motivation}.
    
    -${answers.why}.

    -${answers.problem}.

    -${answers.learn}.

    ## Table of Contents
    
    ## Installation
    
    -${answers.installation}.
    
    ## Usage

    ## License

    ## Contributing

    ## Tests

    ## Questions
    
    `;
};



// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();